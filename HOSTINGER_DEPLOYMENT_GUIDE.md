# FAWZAANA TRADERS — Hostinger Web App Deployment Guide

This zip package contains the complete, production-ready Vite + React TypeScript codebase and the compiled production build for **FAWZAANA TRADERS**.

---

## Quick Method 1: Hostinger Web Hosting (Fastest - Recommended)
Use this if you have Hostinger Shared / Cloud / Premium / Business Web Hosting:

1. Log into your **Hostinger hPanel**.
2. Go to **Websites** → Select your domain → Click **File Manager**.
3. Navigate into the **`public_html`** folder.
4. Upload all the files and folders from the **`dist/`** directory (or extract the zip and copy contents of `dist` into `public_html`).
5. Ensure `index.html` is directly inside `public_html/`.
6. Add the following `.htaccess` file inside `public_html/` so client-side routing works seamlessly on refresh:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Your website is live immediately with ultra-fast CDN speed!

---

## Method 2: Hostinger Node.js Web Application Manager
Use this if you are using Hostinger VPS or Hostinger Node.js App Manager:

1. In Hostinger hPanel, go to **Node.js** under your domain.
2. Select **Node.js Version: 20.x or 22.x**.
3. Upload this entire project directory.
4. Set Application root: `/` (or your uploaded folder path).
5. Set Application startup command: `npm run preview -- --port 3000 --host` or `node server.js`.
6. Click **Run NPM Install** and then **Restart Application**.

---

## Included High-Definition Assets:
- All high-fidelity generated furniture photography:
  - Terracotta Sculptural Executive Lounge Chair
  - 4-Foot Modular Office System Workstation
  - Nordic Fluted Boardroom Conference Table
  - AeroFlex High-Back Mesh Ergonomic Task Chair
  - Aura Heavy-Gauge Metal Storage Cupboard & Credenza
- Vector circular gold crest (`FawzaanaLogo`)
- Interactive scroll-spy morphing showcase
- Slide-over cart drawer with direct WhatsApp formatting (`+91 94785 74847`)
