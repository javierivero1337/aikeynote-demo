# AI Keynote: Guide & Essence

This document captures the core essence, style, and vibes of the **AI Keynote** project. Use it as a reference to maintain consistency as we expand the material.

## 🌌 The Essence
The keynote is designed to be a **provocative, cinematic experience** that challenges the "Normalcy Bias" (Sesgo de Normalidad). It's not just a presentation; it's a narrative journey about the inflection point of AI and how it reshapes our reality.

## 🎨 Visual Style
*   **Theme:** Strictly **Dark Mode**. Deep blacks (`oklch(0.05 0 0)`) and rich grays.
*   **Typography:**
    *   **Mona Sans:** Used for headings (`h1`-`h6`). Bold, tracking-tight, and slightly stretched (110%) for a modern, high-impact look.
    *   **Hubot Sans:** Used for body text, spans, and UI elements. Provides a technical, "robotic-yet-human" feel.
*   **Effects:**
    *   **Dithering & Noise:** Subtle grain and dithered gradients to give a tactile, cinematic quality.
    *   **Framer Motion:** Smooth, intentional transitions. Avoid "cheap" animations; focus on opacity fades and subtle scale transforms.
    *   **Gradients:** `zinc-950` to `black` backgrounds.

## ✨ Vibes
*   **Futuristic yet Grounded:** It should feel like a transmission from the near future, not a sci-fi movie.
*   **Urgent but Calm:** The tone is serious and intellectual, focusing on "breaking the bias."
*   **Minimalist:** Let the typography and high-quality shaders (like the Globe or Dither) do the heavy lifting. Don't clutter the slides.

## 🛠 Development Stack & Patterns
*   **Framework:** Next.js (App Router) + React 19.
*   **Styling:** Tailwind CSS v4.
*   **Animations:** Framer Motion for UI/text transitions.
*   **3D & Shaders:** 
    *   **React Three Fiber (R3F):** For integrating Three.js into the React tree.
    *   **Postprocessing:** Used for the "Retro/Dither" look via `@react-three/postprocessing`.
    *   **Custom Shaders:** GLSL is used for waves and dithering effects (see `components/Dither.tsx`).
*   **Slide Structure:** Every slide should be wrapped in `<SlideShell />`.
*   **Headings:** Use `<SlideHeading />` for consistent sizing and font application.
*   **Components:** Keep slides modular in `components/slides/`.

---
*Stay bold. Break the bias.*
