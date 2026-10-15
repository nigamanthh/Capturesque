# CAPTURESQUE — Premium Photography Portfolio

> **"Every frame has a story."**  
> An independent photography portfolio for **Nigamanth**, **Dharani**, and **Fazil**.

---

## 📸 Overview

CAPTURESQUE is a modern, editorial-grade photography portfolio built specifically to showcase the team's live concert, wedding, classical dance, and cinematic portrait photography using 100% authentic local photographs.

---

## 🛠️ Tech Stack

- **React 18** (Modern functional components)
- **Vite 6** (Blazing fast local development & optimized production bundling)
- **Tailwind CSS 3** (Custom typography and curated studio palette)
- **Lucide React** (Minimalist UI icons)
- **React Router 6** (Dedicated deep-linking routes for category galleries)
- **Google Fonts** (Cormorant Garamond & DM Sans)

---

## 🎨 Studio Color Palette & Typography

| Color Token | Hex Code | Role |
| :--- | :--- | :--- |
| **Warm Parchment** | `#F3EBDD` | Primary canvas background, clean whitespace |
| **Deep Espresso** | `#29241F` | Deep photographic sections, primary text, high-contrast framing |
| **Muted Forest Green** | `#4F5D48` | Editorial accents, metadata tags, subtle subheaders |
| **Terracotta** | `#B76E4D` | Sparingly used focal highlights, CTA interactions, active indicators |
| **Soft Sand** | `#D9CBB7` | Subtle divider lines, card borders, scrollbars |
| **Warm White** | `#FAF8F3` | Surface card backgrounds, elevated components |

- **Headings**: *Cormorant Garamond* (Serif)
- **Body & Labels**: *DM Sans* (Clean, legible sans-serif)

---

## 🚀 Running the Project Locally

The Vite development server is configured and ready:

```bash
# 1. Install dependencies (if setting up on a new machine)
npm install

# 2. Start the local development server
npm run dev
```

Visit **`http://localhost:3000/`** in your browser.

To create an optimized production build:
```bash
npm run build
```

---

## 📁 Project Structure

```
C:\PORTFOLIO\
├── HEADS PORTRAITS\          # Original source portraits (100% preserved)
├── PICTURES\                 # Original source event photographs (100% preserved)
├── public\
│   └── images\
│       ├── portraits\        # Team portraits (Nigamanth, Dharani, Fazil)
│       ├── andrea\           # Andrea Jeremiah concert series
│       ├── classical\        # Classical dance series
│       ├── director\         # Director Ram editorial portrait series
│       ├── live-performance\# Live stage & arena performance series
│       ├── wedding\          # Wedding rituals & celebration series
│       └── western-dance\    # Western dance & cultural stage series
├── src\
│   ├── components\
│   │   ├── Navbar.jsx        # Responsive navigation with scroll tint & mobile menu
│   │   ├── Hero.jsx          # Cinematic hero with real collection photos & mood selector
│   │   ├── WorkGrid.jsx      # Editorial portfolio grid with category filter tabs
│   │   ├── CategoryCard.jsx  # Card with hover zoom, badge & photo count
│   │   ├── Gallery.jsx       # Dedicated gallery view with masonry layout
│   │   ├── Lightbox.jsx      # Fullscreen lightbox (Esc, arrows, counter, scroll lock)
│   │   ├── TeamSection.jsx   # 3 distinct profiles for Nigamanth, Dharani, Fazil
│   │   ├── ContactSection.jsx# Direct inquiry form & studio contact cards
│   │   └── Footer.jsx        # Editorial footer with brand tagline & studio credits
│   ├── data\
│   │   └── galleryData.js    # Single central data source for photos, bios & categories
│   ├── pages\
│   │   ├── Home.jsx          # Home landing page with section anchors
│   │   └── GalleryPage.jsx   # Dynamic gallery page wrapper
│   ├── App.jsx               # Application routes & layout wrapper
│   ├── main.jsx              # React DOM mounting
│   └── index.css             # Tailwind layers, custom scrollbars & masonry CSS
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🖼️ How to Add or Update Photographs

All portfolio content is driven by **`src/data/galleryData.js`**. You do not need to modify React components to add or reorder photos!

1. Place your new image file inside the appropriate `public/images/<folder>/` directory.
2. Open `src/data/galleryData.js`.
3. Locate the target category in `CATEGORIES` and append a new photo object to `photos`:

```javascript
{
  id: "my-photo-unique-id",
  src: "/images/wedding/my-photo.jpg",
  alt: "Descriptive alt text for accessibility",
  title: "Photo Title",
  caption: "Editorial caption explaining the moment",
  orientation: "landscape", // or "portrait"
  ratio: 1.50
}
```

*The category photo count and total portfolio stats are computed automatically.*
