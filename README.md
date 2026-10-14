# Maison — Luxury Real Estate Experience

A premium real estate landing page concept featuring immersive 3D architectural visualization, elegant UI design, smooth animations, and a property booking interface.

**Live Demo:** https://real-estate-landing-page-bice.vercel.app/

**Source Code:** https://github.com/RachidElk1106/RealEstateLandingPage

---

## Overview

Maison is a luxury real estate web experience designed to present high-end properties through cinematic visuals, interactive 3D scenes, and a refined user interface.

The project focuses on combining modern frontend development, interactive architectural visualization, responsive design, and form validation to create an engaging digital property showcase.

## Features

- **Luxury UI Design** — A refined interface inspired by premium real estate brands.
- **Interactive 3D Visualization** — Explore an architectural villa using a 3D model.
- **Day & Night Modes** — Switch between different lighting environments.
- **Interior & Exterior Views** — Change the camera perspective to explore different views of the property.
- **Smooth Animations** — Animated transitions and interface interactions.
- **Property Booking Form** — A form for submitting property viewing inquiries.
- **Form Validation** — Type-safe form data and validation with React Hook Form and Zod.
- **Responsive Experience** — Layouts adapted for desktop and mobile screens.

## Tech Stack

### Frontend
- React 19
- TypeScript
- Tailwind CSS
- Vite

### 3D & Architectural Visualization
- Three.js
- React Three Fiber
- Drei
- GLTF/GLB 3D model loading

### Animation & UI
- Framer Motion
- Lucide React

### Forms & Validation
- React Hook Form
- Zod
- `@hookform/resolvers`

### External Integration
- Web3Forms API for booking inquiry submissions

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/RachidElk1106/RealEstateLandingPage.git
   ```

2. Navigate to the project directory:

   ```bash
   cd RealEstateLandingPage
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the environment variables as described below.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL shown in your terminal.

## Environment Variables

The booking form uses Web3Forms to submit inquiries.

Create a `.env` file in the project root and configure:

```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

Replace the placeholder with your own Web3Forms access key.

**Important:** Vite exposes variables prefixed with `VITE_` to client-side code. Do not store private API secrets in these variables. Use this approach only for a service access key designed for client-side use, and configure appropriate service-side protections where available.

## Production Build

Build the application:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Goals

This project was built to explore and demonstrate:

- Component-based development with React.
- Type-safe UI development with TypeScript.
- Interactive 3D scenes using Three.js and React Three Fiber.
- Animation and interface transitions.
- Form state management and schema-based validation.
- Responsive frontend development.

## Future Improvements

- Optimize images and 3D assets for faster loading.
- Improve JavaScript bundle splitting and loading performance.
- Add accessibility improvements and keyboard navigation.
- Enhance booking submission feedback and error handling.
- Expand the property showcase with additional interactive experiences.

## Author

**Rachid**

Frontend Developer | React · TypeScript · Three.js

Explore more projects on [GitHub](https://github.com/RachidElk1106).