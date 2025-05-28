
# Install Tailwind CSS in a React + Vite Project

_By Nasir_

Tailwind CSS is a popular utility-first CSS framework that makes styling your React apps super fast and easy. In this article, I'll show you how to quickly install and configure Tailwind CSS in a React project using Vite as your build tool.

----------

## Step 1: Create a new React + Vite project (optional)

If you don’t have a React + Vite project yet, create one with the following command:

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app

```

If you already have a Vite + React project, just open it.

----------

## Step 2: Install Tailwind CSS and the Vite plugin

Run this command to install Tailwind CSS along with the official Vite plugin for Tailwind:

```bash
npm install tailwindcss @tailwindcss/vite

```

----------

## Step 3: Configure Vite to use Tailwind CSS plugin

Open your `vite.config.js` or `vite.config.ts` file and update it as follows:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

```

This tells Vite to use both the React plugin and the Tailwind CSS plugin during build.

----------

## Step 4: Add Tailwind CSS to your main CSS file

Create or open your `src/index.css` file (or wherever your main CSS file is). Add this at the top:

```css
@import "tailwindcss";

```

This imports Tailwind’s base styles and utilities into your project.

----------

## Step 5: Use Tailwind CSS classes in your React components

Here’s a simple example of a React component using Tailwind classes:

```jsx
import React from 'react'
import './index.css'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App

```

Notice we use className in React instead of class.

----------

## Step 6: Run your app

Start the development server:

```bash
npm run dev

```

Open the URL shown in your terminal (usually `http://localhost:5173`) and you should see the “Hello world!” text styled with Tailwind CSS.

----------

## Summary

-   Installed Tailwind CSS and the Vite plugin
    
-   Configured Vite to use Tailwind plugin
    
-   Imported Tailwind CSS in the main CSS file
    
-   Used Tailwind CSS classes in React components
    
-   Ran the app with 
    
`npm run dev`
That’s it! You’re now ready to build beautiful React apps with Tailwind CSS and Vite.

 [link](https://example.com)