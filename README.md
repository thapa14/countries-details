# Frontend Mentor - REST Countries API with Color Theme Switcher

This is my solution to
the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).
The goal was to build a fully responsive application that lets users browse country data, filter by region, and switch
between light and dark themes.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
      
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot
![home-dark](https://github.com/user-attachments/assets/a12e1abf-39a3-4798-a42f-3d49398f23e6)
![mobile-home-dark](https://github.com/user-attachments/assets/51a9c87e-9550-4111-ab7a-2a45ddd40cf0)
![mobile-details-dark](https://github.com/user-attachments/assets/f71e194a-6a43-406e-9770-a726783de73c)

### Links

- Solution URL: [Github Repo](https://github.com/thapa14/countries-details)
- Live Site URL: [Link Link](https://countries-details-theme.netlify.app/)

## My Process

### Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### What I Learned

This was my first project using **TypeScript with React**, and it really helped me understand:

- How to strongly type props
- How to use Tailwind’s `dark:` variants for theme switching
- How to build reusable components with proper types
- How to give **types to React hooks** like `useState`, `useEffect`, `ContextApi` etc.

Example of dark mode implementation using Tailwind:

```tsx
function Detail({head, detail}: DetailPropsType) {
    return <div className="flex gap-2 items-center">
        <h6 className="text-sm font-medium ">
            {head}:
        </h6>
        <p className="text-sm text-gray-500">
            {Array.isArray(detail) ? detail.join(", ") : detail}
        </p>
    </div>
}
