# Portfolio Website

A modern, professional portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark theme with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Meta tags and semantic HTML
- **Contact Form**: API route ready for email integration
- **Project Showcase**: Display your projects with tech stack
- **Skills Section**: Visual representation of your skills

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Lucide React** - Additional icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── projects/       # Projects page
│   ├── contact/        # Contact page
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
├── lib/               # Utilities and data
└── styles/            # Global styles
```

## 🎨 Customization

### Update Personal Information

Edit `lib/data.ts` to update:
- Skills
- Projects
- Personal details

### Update Contact Information

Edit `components/Footer.tsx` and `app/contact/page.tsx` to update:
- Social media links
- Email address
- Phone number

### Contact Form Integration

The contact form API route is at `app/api/contact/route.ts`. To integrate with an email service:

1. Install your preferred email service (e.g., Resend, SendGrid)
2. Add API keys to `.env.local`
3. Update the route handler to send emails

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the project:
```bash
npm run build
npm start
```

## 📝 License

This project is open source and available under the MIT License.

