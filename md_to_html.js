#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Check for required arguments
if (process.argv.length < 4) {
    console.error("Usage: node md-to-html.js <input.md> <output.html>");
    process.exit(1);
}

const inputPath = process.argv[2];
const outputPath = process.argv[3];

// Read the Markdown file
fs.readFile(inputPath, 'utf8', (err, markdown) => {
    if (err) {
        console.error("❌ Error reading file:", err.message);
        process.exit(1);
    }

    // Convert to HTML
    const htmlContent = marked(markdown);

    // HTML wrapper
    const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${path.basename(inputPath)}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        pre, code { background: #f4f4f4; padding: 10px; border-radius: 5px; }
        pre { overflow-x: auto; }
        a { color: #0366d6; }
    </style>
</head>
<body>
${htmlContent}
</body>
</html>
`;

    // Write to output file
    fs.writeFile(outputPath, fullHtml, 'utf8', (err) => {
        if (err) {
            console.error("❌ Error writing HTML file:", err.message);
            process.exit(1);
        }
        console.log(`✅ Converted '${inputPath}' → '${outputPath}'`);
    });
});