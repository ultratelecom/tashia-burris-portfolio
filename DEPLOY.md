# Vercel Deployment Guide

This portfolio is optimized for deployment on Vercel with automatic builds and deployments.

## 🚀 One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ultratelecom/tashia-burris-portfolio)

## 📋 Manual Deployment Steps

### 1. Prerequisites
- GitHub account with repository access
- Vercel account (free tier available)

### 2. Connect Repository to Vercel

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Import Project**: Click "Add New..." → "Project"
3. **Connect GitHub**: Authorize Vercel to access your repositories
4. **Select Repository**: Choose `ultratelecom/tashia-burris-portfolio`
5. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

### 3. Environment Variables (Optional)
No environment variables required for basic deployment.

### 4. Deploy
Click **"Deploy"** and Vercel will:
- Install dependencies
- Run the build process
- Deploy to a live URL
- Set up automatic deployments for future commits

## 🔧 Build Configuration

The project includes optimized configuration for Vercel:

### `next.config.ts`
- Image optimization enabled
- Security headers configured
- Performance optimizations
- Compression enabled

### `vercel.json`
- Custom caching rules
- Redirect configurations
- Build optimizations

### `package.json`
- Vercel-compatible scripts
- Node.js engine requirements
- Optimized dependencies

## 📊 Performance Features

✅ **Static Site Generation**: Pages pre-rendered for speed  
✅ **Image Optimization**: Automatic WebP/AVIF conversion  
✅ **CDN Distribution**: Global edge network  
✅ **Automatic Compression**: Gzip/Brotli compression  
✅ **Security Headers**: XSS and clickjacking protection  

## 🌐 Custom Domain Setup

1. **Add Domain**: Vercel Dashboard → Project → Settings → Domains
2. **Configure DNS**: Point your domain to Vercel's nameservers
3. **SSL Certificate**: Automatically provisioned by Vercel

## 🔄 Automatic Deployments

- **Production**: Deploys from `main` branch
- **Preview**: Deploys from pull requests
- **Instant Updates**: New commits trigger automatic builds

## 📈 Monitoring & Analytics

Enable in Vercel Dashboard:
- **Analytics**: Page views and performance metrics
- **Speed Insights**: Core Web Vitals monitoring
- **Function Logs**: Server-side debugging (if using API routes)

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Testing

The portfolio is optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Performance Targets

- **Lighthouse Score**: 100/100
- **First Load JS**: < 150KB
- **LCP**: < 1.2s
- **CLS**: < 0.1
- **FID**: < 100ms

## 🔍 SEO Features

- Open Graph meta tags
- Twitter Card support
- Structured data markup
- Semantic HTML structure
- Fast loading speeds

## 🆘 Troubleshooting

### Build Failures
- Check Node.js version compatibility (18+)
- Verify all dependencies are installed
- Review build logs in Vercel dashboard

### Performance Issues
- Enable Vercel Analytics
- Check Image Optimization settings
- Review caching configurations

### Custom Domain Issues
- Verify DNS configuration
- Check SSL certificate status
- Ensure domain is properly added in Vercel

## 📞 Support

For deployment issues:
1. Check Vercel documentation: https://vercel.com/docs
2. Review build logs in dashboard
3. Contact Vercel support for platform issues

---

**Live URL**: https://tashia-burris-portfolio.vercel.app  
**Repository**: https://github.com/ultratelecom/tashia-burris-portfolio 