#!/bin/bash

# Reni Boediarti Portfolio - GitHub Pages Deployment Script
# This script builds the project for GitHub Pages and provides deployment instructions

echo "🚀 Building Reni Boediarti Portfolio for GitHub Pages..."

# Build the project for GitHub Pages
npm run build:github-pages

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Built files are in: ./dist/reniboediarti/browser/"
    echo ""
    echo "🌐 To deploy to GitHub Pages:"
    echo "1. Push your code to the main branch:"
    echo "   git add ."
    echo "   git commit -m 'Deploy portfolio to GitHub Pages'"
    echo "   git push origin main"
    echo ""
    echo "2. The GitHub Action will automatically deploy to:"
    echo "   https://leo3852.github.io/reniboediarti/"
    echo ""
    echo "3. Check the Actions tab in your GitHub repository for deployment status"
    echo ""
    echo "🎉 Your portfolio will be live at: https://leo3852.github.io/reniboediarti/"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
