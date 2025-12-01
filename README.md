# Portfolio Website

A simple, modern portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your projects and skills on GitHub Pages.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Semantic HTML**: Accessible and SEO-friendly structure
- **Interactive Elements**: Smooth scrolling, mobile navigation, and hover effects
- **Easy to Customize**: Simple structure that's easy to expand and modify

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS variables and Grid/Flexbox
- **JavaScript**: Interactive features and smooth animations
- **Google Fonts**: Inter font family for typography

## 📝 How to Use

### 1. Clone or Download

If you haven't already, clone this repository or download the files:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### 2. Customize Content

Edit the following files to personalize your portfolio:

#### `index.html`
- Replace "Your Name" with your actual name
- Update the hero section description
- Modify project details in the projects section
- Update contact information and links

#### `styles.css`
- Customize colors by modifying CSS variables in the `:root` section
- Adjust fonts, spacing, and other visual preferences

#### `script.js`
- Add any additional interactive features you need

### 3. Deploy to GitHub Pages

#### Option A: Using the main branch

1. Push your changes to GitHub
2. Go to your repository on GitHub
3. Click **Settings**
4. Scroll down to **GitHub Pages** section
5. Under **Build and deployment**, select **Deploy from a branch**
6. Choose **Main** (or your default branch) and **/ (root)**
7. Click **Save**

Your site will be available at: `https://yourusername.github.io/your-repo-name`

#### Option B: Using gh-pages branch

1. Create a gh-pages branch:
   ```bash
   git checkout --orphan gh-pages
   git add .
   git commit -m "Initial GitHub Pages commit"
   git push origin gh-pages
   ```
2. Enable GitHub Pages in settings as above, but select the **gh-pages** branch

### 4. Custom Domain (Optional)

If you want to use a custom domain:

1. Create a `CNAME` file in the root directory with your domain:
   ```
   yourdomain.com
   ```
2. Configure your DNS settings
3. Update GitHub Pages settings in your repository

## 🎨 Customization Tips

### Colors
Modify the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;     /* Main brand color */
    --secondary-color: #64748b;   /* Secondary text color */
    --highlight-color: #3b82f6;   /* Accent color */
    /* ... other colors */
}
```

### Adding Projects

To add more projects, duplicate the project card structure in `index.html`:

```html
<div class="project-card">
    <div class="project-image">
        <div class="placeholder-image">New Project</div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Project description...</p>
        <div class="project-links">
            <a href="#" class="btn btn-small">Live Demo</a>
            <a href="#" class="btn btn-small btn-outline">GitHub</a>
        </div>
    </div>
</div>
```

### Adding Sections

To add new sections:

1. Add the section HTML in `index.html`:
   ```html
   <section id="new-section" class="new-section">
       <div class="container">
           <h2 class="section-title">Section Title</h2>
           <!-- Your content here -->
       </div>
   </section>
   ```

2. Add corresponding CSS in `styles.css`:
   ```css
   .new-section {
       padding: 5rem 0;
       background-color: var(--background-color);
   }
   ```

3. Update the navigation menu to include the new section

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Mobile-friendly navigation menu
- Responsive grid layouts
- Touch-friendly buttons and links
- Optimized typography for all screen sizes

## 🌐 Browser Support

This website supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to:
- Create an issue in this repository
- Reach out through the contact links in the portfolio

---

**Happy coding! 🎉**