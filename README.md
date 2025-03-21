# Rodrigo Santos's Corner of the Web

Welcome to Rodrigo Santos's personal corner of the web. This is a place where I share my thoughts, projects, and experiences. Feel free to explore and enjoy!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

Provide step-by-step installation instructions:

```bash
# Clone the repository
git clone https://github.com/RodrigoRafaelSantos7/portfolio

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

## Usage

Explain how to use your project after installation:

```bash
# Run the application
npm run dev
```

Visit `http://localhost:3000` to see the website running locally.

## Features

- **Modern Design System**: Clean, minimalist design with attention to detail and user experience
- **Dark Mode Support**: Seamless switching between light and dark themes
- **Blog Integration**: Markdown-based blog with proper typography and reading experience
- **Animated UI Components**: Subtle animations that enhance user experience without being distracting
- **Responsive Layout**: Works flawlessly on mobile, tablet, and desktop devices
- **Project Showcase**: Highlighted projects with easy navigation
- **Performance Optimized**: Fast load times and smooth interactions

## Configuration

You can customize various aspects of the portfolio by modifying the following files:

```typescript
// app/data.ts - Add or modify projects and blog posts
export const PROJECTS: Project[] = [
  {
    title: 'Your Project',
    description: 'Project description',
    link: 'https://yourproject.com',
    id: 'project-id',
  },
  // Add more projects here
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Your Blog Post',
    description: 'Blog post description',
    link: '/blog/post-slug',
    uid: 'post-id',
  },
  // Add more blog posts here
]

// lib/constants.ts - Update website URL
export const WEBSITE_URL = 'https://yourwebsite.com'
```

## Contributing

Guidelines for contributing to your project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

---

## Project Structure

```
portfolio/
├── app/                  # Next.js app directory
│   ├── blog/             # Blog posts and layouts
│   ├── globals.css       # Global CSS
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── data.ts           # Project and blog data
├── components/           # Reusable UI components
│   └── ui/               # UI component library
├── lib/                  # Utility functions
│   ├── constants.ts      # Global constants
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## Technology Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS with Typography plugin
- **Animations**: Motion
- **Theming**: next-themes for dark mode support
- **Fonts**: Google Fonts (Inter)
- **Content**: MDX for blog posts

## Contact

Rodrigo Santos - [GitHub](https://github.com/RodrigoRafaelSantos7) - hello@rodrigosantos.dev

Project Link: [https://github.com/RodrigoRafaelSantos7/portfolio](https://github.com/RodrigoRafaelSantos7/portfolio)
