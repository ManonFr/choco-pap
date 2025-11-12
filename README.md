# Chocopap

**Choco Pap** is a fictional chocolate e-commerce website built as part of a web development training project.  
The site is fully responsive, mobile-first, with no CSS framework, and structured using **Next.js App Router**.

---

## Features

- Dynamic cart with add/remove/quantity controls
- Cart persistence using `localStorage`
- Centralized state with `CartContext`
- Product filtering by category, price, and rating
- Responsive design with collapsible filters and adaptive layout
- SSR hydration-safe with `isReady` handling (no Next.js hydration errors)
- Product data loaded dynamically from a local JSON file

---

## Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: JavaScript (with `use client` components)
- **Styling**: CSS Modules (no Tailwind, no Bootstrap)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (`Fjalla One`, `Noto Serif`)

---

## Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/choco-pap.git
   cd choco-pap

   ```

2. Install dependencies:
   npm install

3. Start the dev server:
   npm run dev

4. Visit:
   http://localhost:3000

---

## Project Structure

choco-pap/
├── app/
│ ├── page.js # Home page
│ ├── boutique/ # Store page
│ └── produits/[slug]/ # Product detail page
├── components/
│ ├── Header/
│ ├── Footer/
│ ├── CartDrawer/
│ ├── FilterSidebar/
│ ├── ProductGrid/
│ └── ProductCard/
├── contexts/
│ └── CartContext.js # Cart state logic
├── lib/
│ ├── filterProducts.js
│ └── slugify.js
├── public/
│ └── data/products.json # Product data
│ └── images/ # Product & carousel images

---

## Author

Project developed by Manon Fromage, as part of a training program to learn web development.

---

## License

This is an educational project, feel free to reuse or adapt it for learning purposes.
