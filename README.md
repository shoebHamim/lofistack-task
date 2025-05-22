# Shopping Cart Application

A modern, responsive shopping cart application built with React and TailwindCSS. This project demonstrates a fully functional e-commerce shopping cart with features like product options, add-ons, coupon codes, and more.

![Shopping Cart Demo](https://via.placeholder.com/800x400?text=Shopping+Cart+Demo)

## Features

- ✨ Modern, responsive design
- 🛒 Interactive shopping cart interface
- 🔄 Dynamic product quantity adjustment 
- 🎛️ Product options selection (like fuel source for pizza oven)
- ➕ Add-on options (like accident protection)
- 🏷️ Coupon code application system
- 📱 Mobile-friendly layout
- 🎨 Beautiful UI with TailwindCSS

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shopping-cart.git
   cd shopping-cart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist` folder.

## Using the Shopping Cart

- **Add/Remove Items**: Click the "+" and "-" buttons to adjust quantities
- **Remove Items**: Click the "×" button to remove an item
- **Product Options**: Click "Change" to cycle through available product options
- **Add-ons**: Click the orange button to add/remove add-ons like accident protection
- **Apply Coupon**: Click "Add Coupon" and use code "LOFI10" for 10% off

## Technologies Used

- **React**: Frontend library for building user interfaces
- **TailwindCSS**: Utility-first CSS framework
- **Vite**: Next-generation frontend tooling

## Project Structure

```
/src
  /components         # React components
    /CartItems.jsx    # Cart items container
    /OrderSummary.jsx # Order summary with coupon system
    /SingleCartItem.jsx # Individual cart item component
  /constants
    /items.js         # Product data
  /pages
    /Cart.jsx         # Main cart page
```

## License

[MIT](LICENSE)

## Acknowledgments

- Design inspiration from modern e-commerce platforms
- Icons and illustrations from [Heroicons](https://heroicons.com/)
