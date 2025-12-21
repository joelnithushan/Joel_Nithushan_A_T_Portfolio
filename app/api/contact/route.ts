import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Get email configuration from environment variables
    const recipientEmail = process.env.CONTACT_EMAIL || "joelnithushan6@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    // If Resend API key is configured, send email via Resend
    if (resendApiKey) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>", // Update this with your verified domain
            to: [recipientEmail],
            subject: `New Contact Form Message from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #dc2626;">New Contact Form Submission</h2>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Message:</strong></p>
                  <p style="white-space: pre-wrap;">${message}</p>
                </div>
                <p style="color: #666; font-size: 12px;">
                  This message was sent from your portfolio contact form at ${new Date().toLocaleString()}
                </p>
              </div>
            `,
            replyTo: email,
          }),
        });

        if (!resendResponse.ok) {
          const errorData = await resendResponse.json();
          console.error("Resend API error:", errorData);
          throw new Error("Failed to send email via Resend");
        }

        const resendData = await resendResponse.json();
        console.log("Email sent successfully via Resend:", resendData);
      } catch (emailError) {
        console.error("Error sending email via Resend:", emailError);
        // Fall through to logging if email fails
      }
    }

    // Log the submission (always log for backup)
    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

