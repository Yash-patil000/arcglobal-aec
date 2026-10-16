# ArcGlobal — Corporate CAD & Technical Services Website

A professional, modern, responsive corporate website designed specifically for CAD, Architecture, Civil Engineering, Land Surveying, BIM, Scan-to-CAD, Scan-to-BIM, and Technical Documentation companies.

Built to communicate engineering precision, technical accuracy, and US/international client readiness.

---

## 🚀 Key Highlights & Features

- **Indovance & Neilsoft Inspired Corporate Aesthetics**: Professional white, light gray slate, dark navy (`#0F172A`), and engineering blue (`#0284C7`) color palette with clean CAD blueprint line grid details.
- **100% Form-Free Architecture**: Absolutely **ZERO inquiry, quote, lead-generation, or contact forms** anywhere on the website. Uses informational navigation CTAs and direct email links (`mailto:info@arcglobal.com`).
- **Single Central Configuration**: Changing the working company name (`ArcGlobal`), email, phone, location, services list, capabilities, or branding requires editing **only ONE file** (`src/config/companyConfig.js`).
- **Full Responsive Layout**: Desktop (1920px, 1440px), Tablet (1024px, 768px), and Mobile (430px, 375px) support with responsive navigation drawer and vertical workflow timelines.
- **Static Deployment Ready**: Works natively with free static hosting options (GitHub Pages, Cloudflare Pages, Vercel, Netlify).

---

## 🛠️ Tech Stack & Directory Structure

```
d:/Civil Website 1/
├── index.html                   # Entry HTML with SEO title & OpenGraph tags
├── package.json                 # Dependencies (React 18, Vite 5, Lucide Icons)
├── vite.config.js               # Vite config with relative base path (./)
├── README.md                    # System & deployment guide
├── public/
│   ├── favicon.svg              # CAD compass favicon
│   └── assets/
│       └── images/              # High-resolution technical images
│           ├── hero_cad_visual.jpg
│           ├── about_cad_visual.jpg
│           ├── cap_land_survey.jpg
│           ├── cap_arch_doc.jpg
│           ├── cap_civil_site.jpg
│           ├── cap_bim_model.jpg
│           ├── cap_signage.jpg
│           └── cap_scan_to_bim.jpg
└── src/
    ├── main.jsx                 # Application entry
    ├── App.jsx                  # Main component composition
    ├── index.css                # Custom CAD blueprint design system & CSS variables
    ├── config/
    │   └── companyConfig.js     # ⭐ CENTRAL CONFIGURATION FILE
    └── components/
        ├── Navbar.jsx           # Sticky nav & mobile drawer
        ├── HeroSection.jsx      # Hero section with headline & CAD visual
        ├── TrustSection.jsx     # Credibility & 4 core value cards
        ├── AboutSection.jsx     # Multidisciplinary CAD expertise & visual
        ├── ServicesSection.jsx  # 6 Service cards with detailed checklists
        ├── WorkflowSection.jsx  # 5-Step process flow (Data to Deliverables)
        ├── IndustriesSection.jsx# 6 Supported industry domains
        ├── TechnologiesSection.jsx # Software badges (AutoCAD, Civil 3D, Revit, etc.)
        ├── DeliverablesSection.jsx # Technical format cards (.DWG, .RVT, .PDF, etc.)
        ├── WhyChooseUsSection.jsx  # 6-Point value drivers
        ├── CapabilitiesSection.jsx # 6 Visual portfolio cards & interactive modal
        ├── CapabilityModal.jsx     # Full CAD drawing inspection modal
        ├── ClientTypesSection.jsx  # Built for Technical Teams
        ├── CTASection.jsx       # Informational CTA block
        ├── ContactSection.jsx   # Direct contact details (No forms)
        └── Footer.jsx           # Dark technical footer
```

---

## 💻 How to Run Locally

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Commands

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/` to view the website.

3. **Build Production Bundle**:
   ```bash
   npm run build
   ```
   The compiled static assets will be generated in the `dist/` directory.

4. **Preview Production Build Locally**:
   ```bash
   npm run preview
   ```

---

## ⚙️ How to Change Company Details (Single Configuration File)

All text, company name, contact info, email, phone, location, services, and portfolio items are stored in:

📌 **`src/config/companyConfig.js`**

### 1. Change Company Name
To change the company name from `ArcGlobal` to another company name across the entire website:
Open `src/config/companyConfig.js` and edit:
```javascript
export const companyConfig = {
  name: "ArcGlobal",          // Change full company name here
  shortName: "ArcGlobal",     // Change logo text here
  tagline: "Architecture | Civil | Survey | BIM | Technical Documentation",
  ...
};
```

### 2. Change Email Address
Edit the email field in `src/config/companyConfig.js`:
```javascript
email: "info@arcglobal.com",  // Update placeholder email here
```

### 3. Change Phone Number & Location
```javascript
phone: "+91 XXXXX XXXXX",             // Update phone number
location: "India | Serving Global Clients", // Update location
```

---

## 🖼️ How to Replace Images

All visual images are located in the `public/assets/images/` directory:

| Section / Capability | Current Image File Path | Recommended Aspect Ratio |
| :--- | :--- | :--- |
| **Hero CAD Visual** | `public/assets/images/hero_cad_visual.jpg` | 16:9 or 4:3 |
| **About CAD Visual** | `public/assets/images/about_cad_visual.jpg` | 4:3 |
| **Land Survey Capability** | `public/assets/images/cap_land_survey.jpg` | 16:9 |
| **Architectural Capability** | `public/assets/images/cap_arch_doc.jpg` | 16:9 |
| **Civil Site Capability** | `public/assets/images/cap_civil_site.jpg` | 16:9 |
| **BIM Modeling Capability** | `public/assets/images/cap_bim_model.jpg` | 16:9 |
| **Technical Signage Capability** | `public/assets/images/cap_signage.jpg` | 16:9 |
| **Scan-to-CAD / Scan-to-BIM** | `public/assets/images/cap_scan_to_bim.jpg` | 16:9 |

Simply replace the JPG file with your new image maintaining the same filename.

---

## 🌐 Free Static Hosting Deployment Guide

### Option 1: GitHub Pages

1. Initialize git and commit your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of ArcGlobal corporate website"
   ```
2. Create a new repository on GitHub and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. Install `gh-pages` helper package:
   ```bash
   npm install -D gh-pages
   ```
4. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
5. Deploy:
   ```bash
   npm run deploy
   ```
   Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

---

### Option 2: Cloudflare Pages

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set Build Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
5. Click **Save and Deploy**.

---

### Option 3: Vercel

1. Install Vercel CLI or connect via GitHub:
   ```bash
   npx vercel
   ```
2. Or go to [vercel.com](https://vercel.com/), click **Add New Project**, import your GitHub repository.
3. Vercel will automatically detect `Vite`:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

---

## 📜 SEO & Performance Compliance

- Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<footer>`, single `<h1>`).
- Meta title, description, and OpenGraph tags configured in `index.html`.
- Clean relative path routing (`base: './'`).
- Zero heavy video backgrounds or external backend dependencies.


## Fix applied: Tailwind CSS

The original components use Tailwind utility classes, but Tailwind was not installed/configured and `src/index.css` did not include Tailwind directives. This caused the browser to render most components as unstyled HTML.

### Run locally (Windows PowerShell)

```powershell
cd "D:\Civil Website 1"
npm install
npm run dev
```

If PowerShell blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run dev`.

### If styles still look cached
Stop Vite with Ctrl+C, then run `npm.cmd run dev` again and hard-refresh the browser with Ctrl+Shift+R.

### Image assets
Place image files in `public/assets/images/`. Existing image references expect these paths.
