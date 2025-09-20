# Reni Boediarti Portfolio

A beautiful, modern portfolio website for content creator Reni Boediarti, built with Angular and Tailwind CSS.

## 🎨 Features

- **Modern Design**: Clean, girly, and modern aesthetic with pink, purple, and rose color palette
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Animations**: Fade-in, slide-up, and floating animations
- **Tailwind CSS**: Modern utility-first CSS framework
- **Angular 19**: Latest Angular framework with standalone components

## 🚀 Live Demo

Visit the live portfolio: [https://leo3852.github.io/reniboediarti/](https://leo3852.github.io/reniboediarti/)

## 🛠️ Tech Stack

- **Frontend**: Angular 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter, Playfair Display, Dancing Script
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/leo3852/reniboediarti.git
cd reniboediarti
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## 🏗️ Build for Production

### Local Build
```bash
npm run build
```

### GitHub Pages Build
```bash
npm run build:github-pages
```

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment happens automatically when you push to the `main` branch.

### Manual Deployment Steps:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. **Push your code** to the main branch:
```bash
git add .
git commit -m "Deploy portfolio to GitHub Pages"
git push origin main
```

3. **Check the Actions tab** in your GitHub repository to see the deployment progress

4. **Access your site** at: `https://leo3852.github.io/reniboediarti/`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── hero/            # Landing section
│   │   ├── about/           # About section
│   │   ├── projects/        # Portfolio showcase
│   │   ├── contact/         # Contact form
│   │   └── portfolio/       # Main portfolio component
│   ├── app.component.*      # Root component
│   └── styles.scss          # Global styles with Tailwind
├── index.html
└── main.ts
```

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.js`:
- **Pink**: Various shades for primary elements
- **Purple & Lavender**: For accents and highlights
- **Rose**: For warm touches
- **Peach & Cream**: For feminine elements

### Content
Update the content in each component:
- `hero.component.html` - Landing section content
- `about.component.html` - About section content
- `projects.component.html` - Portfolio projects
- `contact.component.html` - Contact information

### Images
Replace placeholder content with actual images:
- Profile photo in the hero section
- Project images in the projects section
- Any other visual elements


## 👨‍💻 Developer

Created by [Leo Gur](https://github.com/leo3852) - Full-Stack Developer

- **GitHub**: [@leo3852](https://github.com/leo3852)
- **LinkedIn**: [Leonardo Gurgitano](https://linkedin.com/in/LeonardoGurgitano)
- **Portfolio**: [https://leo3852.github.io/appLeo/](https://leo3852.github.io/appLeo/)

---

⭐ If you like this project, please give it a star on GitHub!