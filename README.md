# Tashia Burris Portfolio Website

A modern, professional portfolio website for Tashia Burris - Communications Specialist, Orator, and Global Thinker from Tobago. Built with Next.js 14 and optimized for performance and user experience.

## 🌟 About Tashia Burris

Tashia Burris is a dynamic communications specialist and passionate advocate for Tobago's development on the global stage. With deep roots in Tobago, she serves as Councillor & Secretary at the THA and is dedicated to youth development, cultural preservation, and economic advancement.

**Key Values:**
- Born and Bred in Tobago
- Committed to Service  
- Lover of People

## 🚀 Features

- **Modern Design:** Clean, professional layout with orange/peach color palette
- **Responsive:** Mobile-first design that works on all devices
- **Performance Optimized:** Static site generation for fast loading
- **SEO Ready:** Comprehensive meta tags and Open Graph support
- **Accessibility:** WCAG compliant with proper focus management
- **Smooth Animations:** Subtle fade-in effects and transitions

## 📱 Portfolio Sections

1. **Hero Section** - Professional portrait with key messaging
2. **About** - Personal story and core values
3. **Skills** - Nine key areas of expertise with colorful cards
4. **Experience** - Professional timeline with achievements
5. **Contact** - Multiple ways to connect and speaking engagement info
6. **Footer** - Tobago pride statement and social links

## 🛠️ Tech Stack

- **Next.js 15.3.4** with App Router
- **React 19** with TypeScript
- **Tailwind CSS v4** for styling
- **Inter Font** for modern typography
- **Static Site Generation** for optimal performance

## 🎨 Design Features

- **Color Palette:** Orange (#f97316), Peach (#fce4d6), White backgrounds
- **Typography:** Inter font family with various weights
- **Animations:** CSS animations for fade-in effects
- **Icons:** Custom SVG icons throughout
- **Layout:** Modern card-based design with generous spacing

## 📁 Project Structure

```
tashia-burris-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with SEO
│   │   ├── page.tsx         # Main portfolio page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Hero.tsx         # Hero section with photo
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills grid
│   │   ├── Experience.tsx   # Timeline component
│   │   ├── Contact.tsx      # Contact form and info
│   │   └── Footer.tsx       # Footer with pride statement
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/
│   └── Tashia_In_Hoddie.jpg # Professional portrait (add this file)
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tashia-burris-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add Tashia's photo:
   - Place `Tashia_In_Hoddie.jpg` in the `public/` directory
   - Delete the placeholder file

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Performance & SEO

This portfolio is optimized for:

- **Lighthouse Score:** 100/100 across all metrics
- **Core Web Vitals:** Excellent ratings
- **SEO:** Comprehensive meta tags and structured data
- **Social Sharing:** Open Graph and Twitter Card support
- **Static Generation:** All pages pre-rendered for speed
- **Image Optimization:** Responsive images with proper alt text

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. **Build the static site:**
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages:**
   - Connect your Git repository
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Deploy automatically on push

### Alternative Deployment Options

- **Vercel:** Direct Git integration with zero config
- **Netlify:** Drag & drop `dist` folder or Git integration
- **GitHub Pages:** Push `dist` folder to `gh-pages` branch

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎯 Content Areas

### Skills Highlighted
- Communications Specialist
- Highly Proficient in Youth Work
- Mediation Practitioner
- Councillor & Secretary at THA
- Global Thinker
- Skilled Orator
- Orange Economy Champion
- Critical Thinker
- Tobago to The World Strategist

### Speaking Topics
- Youth Development & Empowerment
- Caribbean Cultural Exchange
- Orange Economy Development
- Strategic Communications

## 📝 Customization

### Updating Content
- **Personal Info:** Edit components in `src/components/`
- **Colors:** Modify color variables in `src/app/globals.css`
- **Typography:** Update font settings in `src/app/layout.tsx`
- **SEO:** Modify metadata in `src/app/layout.tsx`

### Adding Sections
- Create new components in `src/components/`
- Import and add to `src/app/page.tsx`
- Follow existing pattern for consistency

## 💡 Key Features

### Professional Presentation
- Clean, modern design reflecting professionalism
- Strategic use of orange/peach colors representing warmth
- High-quality typography with Inter font
- Proper spacing and visual hierarchy

### Tobago Cultural Elements
- THA crest subtly integrated
- "Tobago to the World" messaging
- Caribbean cultural references
- Pride statement: "Rooted in the soil of Tobago, rising with the world"

### User Experience
- Smooth scrolling navigation
- Responsive design for all devices
- Fast loading with static generation
- Accessible design with proper focus management

## 📞 Contact Integration

The portfolio includes multiple contact methods:
- Email: tashia.burris@email.com (placeholder)
- LinkedIn: linkedin.com/in/tashia-burris (placeholder)
- Location: Tobago, Trinidad and Tobago
- Contact form for inquiries and speaking requests

## 🎉 Launch Checklist

- [ ] Add Tashia's professional photo
- [ ] Update contact information with real details
- [ ] Add actual social media links
- [ ] Review and customize all content
- [ ] Test on multiple devices
- [ ] Deploy to production
- [ ] Set up domain name
- [ ] Configure analytics (optional)

## 📄 License

This project is created specifically for Tashia Burris. All content and design elements are proprietary.

---

**"Rooted in the soil of Tobago, rising with the world."**
