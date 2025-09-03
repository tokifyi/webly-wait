# Webly.ai Landing Page

A modern, responsive landing page for Webly.ai - the fastest AI-native website generator that turns ideas into fully designed, SEO-ready websites in minutes.

## 🚀 Features

- **Modern Design**: Built with Tailwind CSS and shadcn/ui components
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Optimized with Next.js 15 and App Router
- **Accessible**: WCAG compliant components and semantic HTML
- **SEO Ready**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 📋 Sections

1. **Hero Section**: Main value proposition with CTA buttons
2. **Waitlist Form**: Email capture for launch notifications
3. **How It Works**: 3-step process explanation
4. **Target Users**: Indie Hackers, Creators, Small Business
5. **Feedback Form**: User input collection
6. **Footer**: Links and branding

## 🎯 Target Audience

- **Indie Hackers / SaaS Founders**: Quick MVP landing pages
- **Creators / Portfolio Owners**: Personal branding sites
- **Small Business Owners**: Fast, affordable online presence

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

The landing page is built with modular components and can be easily customized:

- **Colors**: Update CSS variables in `globals.css`
- **Content**: Modify text in `src/app/page.tsx`
- **Components**: Add new shadcn/ui components as needed
- **Styling**: Use Tailwind CSS classes for custom styling

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🔧 Development

### Adding New Components

1. Install shadcn/ui components:

   ```bash
   npx shadcn@latest add [component-name]
   ```

2. Import and use in your components:
   ```tsx
   import { Button } from "@/components/ui/button";
   ```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the design system defined in `globals.css`
- Maintain consistent spacing with the established scale
- Use semantic color variables for theming

## 📄 License

This project is part of the Webly.ai product suite.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ for Webly.ai
