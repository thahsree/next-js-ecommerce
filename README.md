# E-commerce Web Application using Next.js

An E-commerce web application with essential features like product listing, user authentication, and cart management, built using Next.js.

## Features

- **Home Page**: A visually appealing landing page showcasing the platform.
- **Product Listing Page**: Displays a variety of products with filtering and sorting options.
- **Product Landing Page**: Detailed information about individual products.
- **Cart**: Allows users to add, remove, and update products.
- **Wishlist**: Enables users to save products for future consideration.
- **Checkout**: A seamless process for completing purchases.
- **Authentication**: Supports both credentials-based authentication and OAuth with Google client.

## Technologies Used

- **Next.js**: Server-side rendering and React-based framework for building the application.
- **OAuth (Google Client)**: Used for secure user authentication.
- **Tailwind CSS**: For efficient and responsive styling.
- **TypeScript**: Provides type safety and enhanced developer experience.
- **MongoDB**: Database for storing user and product data.
- **React DOM**: Handles DOM rendering and updates.
- **Bcrypt**: For securely hashing passwords.
- **Slick Carousel**: To create responsive and interactive carousels.

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/thahsree/next-js-ecommerce
   cd <directory>
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   NEXTAUTH_SECRET="34fkzI+GhYdh24kgediam9CDKIWUk0inbXC43hRaIvw=" # Added by `npx auth`. Read more: https://cli.authjs.dev
   ```

MONGODB_URI= your mongo-db uri
GOOGLE_CLIENT_ID= your client id
GOOGLE_CLIENT_SECRET= your client secret id

NEXTAUTH_URL= your url

````

4. **Start the Development Server**:
```bash
npm run dev
````

Access the application at `http://localhost:3000`.

## Folder Structure

```
> app
│   ├── account
│   │   ├── signup
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth]
│   │   │       └── route.ts
│   │   ├── products
│   │   │   └── route.ts
│   │   ├── register
│   │   │   └── route.ts
│   │   └── user
│   │       └── [userId]
│   │           └── route.ts
│   ├── cart
│   │   └── page.tsx
│   ├── models
│   │   ├── products.ts
│   │   └── user.ts
│   ├── products
│   │   ├── [id]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
> components
│   ├── CartProducts.tsx
│   ├── category.tsx
│   ├── Corousal.tsx
│   ├── Delivery.tsx
│   ├── ExpandingMenu.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── index.ts
│   ├── Login.tsx
│   ├── LoginForm.tsx
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   ├── ProductDetails.tsx
│   ├── ProductList.tsx
│   ├── Provider.tsx
│   └── Trending.tsx
> constants
│   └── index.ts
> types
│   ├── index.ts
│   └── next-auth.d.ts
> utils
│   └── index.ts
├── .env
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json

```
