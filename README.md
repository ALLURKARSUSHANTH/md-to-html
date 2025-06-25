# Markdown to HTML Converter (Node.js CLI Tool)

This is a simple command-line tool written in Node.js that converts a Markdown (`.md`) file into a clean, styled HTML (`.html`) file. It supports standard Markdown syntax including headers, bold/italic text, lists, links, inline code, and code blocks.

---

## ✅ Features

- Converts `.md` Markdown files to `.html`
- Supports:
  - Headers (`#`, `##`, etc.)
  - Bold and Italics
  - Ordered and Unordered Lists
  - Links
  - Inline code and code blocks
- Clean HTML output with built-in styling

---

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) installed (v14+ recommended)
- npm (comes with Node.js)

---

##  🛠️ Installation

1. Clone or download this repository.

2. Open your terminal and navigate to the project directory.

3. Install the required npm package:

```bash
npm install marked
```

##  🚀 Running Instructions

- Ensure you have saved the script as `md-to-html.js`.

- Use the following command format to convert a Markdown file to HTML:

```bash
node md-to-html.js <input-file.md> <output-file.html>

