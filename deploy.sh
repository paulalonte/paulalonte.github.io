#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful! The dist folder is ready for deployment."
    echo ""
    echo "To deploy to GitHub Pages:"
    echo "1. Push your code to GitHub"
    echo "2. Go to your repository settings"
    echo "3. Navigate to Pages section"
    echo "4. Set source to 'GitHub Actions'"
    echo "5. The workflow will automatically deploy your site"
    echo ""
    echo "Or manually:"
    echo "1. Copy contents of dist/ folder to a gh-pages branch"
    echo "2. Push the gh-pages branch to GitHub"
    echo ""
    echo "Your site will be available at: https://yourusername.github.io"
else
    echo "Build failed! Please check the errors above."
    exit 1
fi 