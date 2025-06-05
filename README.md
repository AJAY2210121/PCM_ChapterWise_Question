# PCM_ChapterWise_Question

A modern, responsive web application built with React.js, showcasing clean UI design and interactive user experience based on Figma design specifications.

## 🎨 Design Reference

**Figma Design**: [PCM_ChapterWise_Question](https://www.figma.com/design/YIWrMUpFBxBbHPWqGqRf4J/Sample-Task---Frontend-Web-Development?node-id=1-2613&t=iIQzhntgRN4inASv-0)

This project is a pixel-perfect implementation of the provided Figma design, focusing on:
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, intuitive interface following design guidelines
- **Interactive Elements** - Smooth animations and user interactions
- **Cross-browser Compatibility** - Consistent experience across all browsers

## 📋 Table of Contents

- [Design Reference](#design-reference)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Design Implementation](#design-implementation)
- [Technologies Used](#technologies-used)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## 📁 Project Structure

This project follows a component-based React architecture for scalable and maintainable code:

```
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Website favicon
│   └── assets/             # Static assets (images, icons, fonts)
│       ├── images/         # Project images and graphics
│       ├── icons/          # SVG icons and icon fonts
│       └── fonts/          # Custom fonts (if any)
|
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header/         # Header component
│   │   ├── Footer/         # Footer component
│   │   ├── Button/         # Custom button component
│   │   └── Card/           # Card component
│   ├── pages/              # Page components
│   │   ├── Home/           # Home page
│   │   ├── About/          # About page
│   │   └── Contact/        # Contact page
│   ├── styles/             # Styling files
│   │   ├── globals.css     # Global styles
│   │   ├── variables.css   # CSS custom properties
│   │   └── components/     # Component-specific styles
│   ├── utils/              # Helper functions
│   ├── hooks/              # Custom React hooks
│   ├── App.js              # Main application component
│   └── index.js            # Application entry point
|
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
├── package-lock.json       # Dependency lock file
└── README.md               # Project documentation
```

### 🗂️ Component Organization:

- **`components/`** - Reusable UI components following atomic design principles
- **`pages/`** - Route-based page components
- **`styles/`** - Organized CSS with global variables and component-specific styles
- **`utils/`** - Helper functions and utilities
- **`hooks/`** - Custom React hooks for shared logic

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/AJAY2210121/JEE_ChapterWise_Question.git

# Navigate to project directory
cd JEE_ChapterWise_Question

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:3000`

## 💻 Usage

### Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

### Environment Setup

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_VERSION=1.0.0
```

## ✨ Features

### 🎯 Core Features
- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Component Library** - Reusable UI components following design system
- **Modern Styling** - CSS Grid, Flexbox, and CSS custom properties
- **Interactive Elements** - Hover effects, animations, and transitions
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation

### 🔧 Technical Features
- **React Hooks** - Modern functional components with state management
- **Code Splitting** - Optimized bundle size with lazy loading
- **Error Boundaries** - Graceful error handling
- **Performance Optimized** - Memoization and optimized re-renders
- **SEO Friendly** - Proper meta tags and semantic HTML

## 🎨 Design Implementation

### Design System
- **Typography** - Consistent font hierarchy and spacing
- **Color Palette** - Brand colors with proper contrast ratios
- **Spacing** - 8px grid system for consistent layouts
- **Components** - Reusable design tokens and components

### Responsive Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

### Key Design Elements
- **Navigation** - Responsive navigation with mobile hamburger menu
- **Hero Section** - Eye-catching hero with call-to-action
- **Cards** - Consistent card layouts with hover effects
- **Forms** - Styled form elements with validation
- **Buttons** - Multiple button variants with proper states

## 🛠️ Technologies Used

### Frontend Stack
- **React.js** (^18.0.0) - UI library
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Styling with Grid, Flexbox, and custom properties
- **HTML5** - Semantic markup

### Development Tools
- **Create React App** - Build tool and development server
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

### Design Tools
- **Figma** - Design reference and asset export
- **CSS Variables** - Dynamic theming support

## 🌐 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The application is fully responsive and tested on:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b React Hooks`)
3. Commit your changes (`git commit -m 'Code Splittin'`)
4. Push to the branch (`git push origin Error Boundaries`)
5. Open a Pull Request

### Code Style Guidelines
- Use functional components with hooks
- Follow the existing folder structure
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design compatibility

## 👤 Author

**Your Name**
- Email: [Ajayyadav0653987@gmail.com](mailto:Ajayyadav0653987@gmail.com)
- GitHub: [@AJAY2210121](https://github.com/AJAY2210121)
- LinkedIn: [ajay-kumar-yadav-a41715282](https://linkedin.com/in/ajay-kumar-yadav-a41715282)

## 🔗 Links

- **Live Demo**: [https://your-demo-link.com](https://your-demo-link.com)
- **Figma Design**: [Design Reference](https://www.figma.com/design/YIWrMUpFBxBbHPWqGqRf4J/Sample-Task---Frontend-Web-Development?node-id=1-2613&t=iIQzhntgRN4inASv-0)
- **Repository**: [https://github.com/yourusername/frontend-sample-task](https://github.com/AJAY2210121/JEE_ChapterWise_Question)

---

⭐ **If you found this project helpful, please give it a star!**

📧 **Questions?** Feel free to reach out or open an issue for any questions or suggestions.
