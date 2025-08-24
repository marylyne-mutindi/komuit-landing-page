# Komuit Landing Page

A modern, responsive landing page for Komuit - Smart Transit Platform. This landing page is designed for users before they sign up or log in, featuring clean design, smooth animations, and mobile-first responsiveness.

## Features

### 🎨 Design & UI
- Modern, clean design with gradient backgrounds
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations using AOS.js
- Hover effects on buttons and cards
- Professional color scheme and typography

### 📱 Responsive Navigation
- Fixed navigation with blur effect
- Mobile-friendly hamburger menu
- Smooth scrolling to sections
- Active state management

### 🚀 Sections Included
1. **Hero Section** - Animated storytelling with rotating steps
2. **Features** - Four user type cards (Passenger, Conductor/Admin, Investor, Technology)
3. **How It Works** - 4-step process (Book → Pay → Board → Track)
4. **About** - Mission statement and statistics
5. **Contact** - Contact form and call-to-action buttons
6. **Footer** - Links, social media, and contact information

### ✨ Animations
- AOS (Animate On Scroll) for smooth reveal animations
- Hero section storytelling animation
- Hover effects on cards and buttons
- Smooth transitions throughout

## File Structure

```
komuit-landing-page/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

1. **Open the page**: Simply open `index.html` in your web browser
2. **Local development**: Use a local server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   ```

## Customization Guide

### 🎨 Colors & Branding

**Primary Colors** (in `styles.css`):
```css
/* Main gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Text colors */
color: #2c3e50;  /* Dark text */
color: #7f8c8d;  /* Light text */
```

**To change brand colors**:
1. Find and replace `#667eea` and `#764ba2` with your brand colors
2. Update the logo text in `index.html` (line ~15)
3. Modify feature card gradient colors (lines 400-420 in `styles.css`)

### 📝 Content Updates

**Hero Section** (`index.html` lines 35-70):
- Update headline and description
- Modify button text and actions

**Features Section** (`index.html` lines 90-130):
- Change user types, icons, and descriptions
- Add or remove feature cards

**About Section** (`index.html` lines 180-210):
- Update company mission and statistics
- Modify stat numbers and descriptions

**Contact Information** (`index.html` lines 280-290):
- Update email, phone, and address in footer

### 🎯 JavaScript Customization

**Button Actions** (`script.js` lines 165-195):
```javascript
handleSignUp() {
    // Replace with your sign-up logic
    window.location.href = '/signup';
}

handleLogin() {
    // Replace with your login logic
    window.location.href = '/login';
}
```

**Form Submission** (`script.js` lines 100-140):
- Integrate with your backend API
- Add real form validation
- Connect to email service

### 📱 Responsive Breakpoints

The design uses these breakpoints:
- Mobile: `max-width: 480px`
- Tablet: `max-width: 768px`
- Desktop: `1200px` max container width

### 🚀 Performance Optimization

**Already included**:
- Optimized animations with AOS
- Throttled scroll events
- Lazy loading setup for future images
- Preloading of critical resources

**For production**:
1. Minify CSS and JavaScript files
2. Optimize images (add WebP format)
3. Enable gzip compression on server
4. Add service worker for caching

## External Dependencies

- **AOS.js** - Animate on scroll library
- **Font Awesome** - Icons
- **Google Fonts** - Inter font family

All dependencies are loaded via CDN for easy setup.

## Browser Support

- Chrome (60+)
- Firefox (60+)
- Safari (12+)
- Edge (79+)

## Adding New Sections

To add a new section:

1. **HTML**: Add the section after existing ones
```html
<section class="new-section" id="new-section">
    <div class="container">
        <!-- Your content -->
    </div>
</section>
```

2. **CSS**: Add styles in `styles.css`
```css
.new-section {
    padding: 100px 0;
    background: #fff;
}
```

3. **Navigation**: Add link to navbar
```html
<a href="#new-section" class="nav-link">New Section</a>
```

## Common Customizations

### Change Animation Speed
```css
/* In styles.css - faster animations */
* {
    transition: all 0.2s ease; /* was 0.3s */
}
```

### Modify Hero Animation Timing
```javascript
// In script.js - change interval
this.intervalId = setInterval(() => {
    this.nextStep();
}, 1500); // was 2500ms
```

### Add Social Media Links
Update the footer social links with your actual URLs:
```html
<a href="https://facebook.com/komuit"><i class="fab fa-facebook"></i></a>
<a href="https://twitter.com/komuit"><i class="fab fa-twitter"></i></a>
```

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (main/master)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Or connect GitHub repository for automatic deployments

### Vercel
```bash
npm install -g vercel
vercel
```

## Support & Maintenance

- All code is well-commented for easy understanding
- Modular JavaScript classes for easy updates
- CSS organized by sections
- Mobile-first responsive design approach

## License

This landing page template is free to use and modify for your projects.

---

**Questions or need help customizing?** 
Feel free to modify any part of this landing page to match your brand and requirements!
