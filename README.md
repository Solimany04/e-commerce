# React E-Commerce Frontend

A modern, responsive e-commerce front-end application built with React and Vite. This project serves as the foundational user interface for an online store, featuring a dynamic homepage with a hero section, intuitive navigation, and dedicated product categorization pages. The design emphasizes a seamless user experience, allowing customers to easily browse products like mugs and t-shirts, manage their cart, and access essential site sections.

## Live Demo
[View Live Demo](https://Solimany04.github.io/e-commerce/)

## Features
* **Dynamic Routing:** Seamless single-page application navigation using React Router for Home, Products, Cart, Login, Mugs, and T-shirts.
* **Engaging Hero Section:** A prominent homepage header featuring a clear Call-to-Action (CTA) encouraging users to "Shop T-shirts and Mugs."
* **Responsive Navigation Bar:** A reusable top menu providing quick access to key sections across all devices.
* **Categorized Product Pages:** Dedicated views for specific product categories (Mugs, T-shirts) to streamline browsing.
* **Email Integration:** Client-side email functionality powered by EmailJS for direct communication.
* **Interactive Alerts:** Modern, customizable notification modals using SweetAlert2 for enhanced user feedback.
* **Modern Styling:** A robust UI combining Bootstrap 5, Tailwind CSS, and FontAwesome icons for a polished aesthetic.

## Tech Stack
* **Framework:** React (v19.1.0)
* **Build Tool:** Vite (`@vitejs/plugin-react`)
* **Routing:** React Router v7 (`react-router-dom` v7.5.3)
* **Styling & UI:**
  * Bootstrap 5 (`bootstrap` v5.3.6) & Bootstrap Icons
  * Tailwind CSS (`tailwind` v4.0.0)
  * FontAwesome (`fontawesome` v5.6.3)
  * Custom CSS
* **Utilities:**
  * SweetAlert2 (`sweetalert2` v11.21.0)
  * EmailJS (`@emailjs/browser` v4.4.1)

## Project Structure
```text
src/
├── App.jsx             # Main application component and routing setup
├── Pages/
│   ├── Home.jsx        # Homepage with Hero Section
│   ├── Products.jsx    # General products catalog
│   ├── Cart.jsx        # Shopping cart interface
│   ├── Login.jsx       # User authentication page
│   ├── Mugs.jsx        # Mugs category page
│   └── Tshirts.jsx     # T-shirts category page
└── shared/
    ├── Layout.jsx      # Global layout wrapper
    └── Navbar.jsx      # Reusable navigation component
```

## Installation & Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd ecommerce-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## Available Scripts

In the project directory, you can run the following commands:

* **`npm run dev`**: Starts the Vite development server. Open `http://localhost:5173` to view it in your browser. The page will reload when you make changes.
* **`npm run build`**: Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
* **`npm run lint`**: Runs ESLint to identify and report on patterns found in ECMAScript/JavaScript code.
* **`npm run deploy`**: Deploys the built project to GitHub Pages using the `gh-pages` package.

## Future Enhancements
* **Backend Integration:** Connect the frontend to a robust backend API (e.g., Node.js, Django, or Firebase) to manage real product data and user authentication.
* **Dynamic State Management:** Implement a global state management solution (such as Redux or React Context) to handle complex cart interactions and user sessions seamlessly.
* **Payment Gateway Integration:** Incorporate secure checkout processes using Stripe or PayPal.
* **Enhanced Product Filtering:** Add advanced search, sorting, and filtering capabilities on the product pages.
