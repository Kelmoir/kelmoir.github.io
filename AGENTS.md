# Agent Guidelines

## Commands
- **Build**: No build process required - static files
- **Test**: No test framework - manually test in browser
- **Lint**: No linter configured - follow style guidelines below
- **Serve**: Use `python -m http.server 8000` or `npx serve` for local development

## Code Style

### HTML
- Use semantic HTML5 tags (header, nav, main, section, footer)
- Include proper meta tags and accessibility attributes
- Use kebab-case for IDs and classes
- Indent with 2 spaces

### CSS
- Use CSS custom properties (variables) for colors and spacing
- Follow BEM methodology for class naming
- Mobile-first responsive design
- Use flexbox/grid for layouts
- Organize styles by section (header, hero, about, etc.)

### JavaScript
- Use modern ES6+ syntax (const/let, arrow functions, template literals)
- Use semantic variable names (camelCase)
- Add JSDoc comments for functions
- Handle edge cases and null checks
- Use event delegation for dynamic content

### General
- Keep files under 300 lines when possible
- Use consistent 2-space indentation
- Add meaningful comments for complex logic
- Ensure cross-browser compatibility
- Test on mobile and desktop viewports