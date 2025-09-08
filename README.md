# saqif.com

Personal website for Saqif Badruddin - a modern Next.js site with a preserved 2017 archive.

## 🚀 Features

-   **Modern Landing Page**: Minimal, elegant design with dynamic year calculation
-   **Preserved 2017 Site**: Complete archive of the original website at `/2017/`
-   **TypeScript**: Full type safety throughout the codebase
-   **Tailwind CSS**: Utility-first styling for rapid development
-   **Static Export**: Optimized for GitHub Pages deployment
-   **Responsive Design**: Works perfectly on all devices

## 🛠️ Tech Stack

-   **Framework**: Next.js 15 with App Router
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS
-   **Deployment**: GitHub Pages (static export)
-   **Node.js**: Requires v18.18.0 or higher

## 🏃‍♂️ Getting Started

### Prerequisites

-   Node.js 18.18.0 or higher
-   npm, yarn, pnpm, or bun

### Development

1. **Clone the repository**

    ```bash
    git clone https://github.com/Saqif280/saqif.com.git
    cd saqif.com
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
    - Main site: [http://localhost:3000](http://localhost:3000)
    - 2017 archive: [http://localhost:3000/2017/](http://localhost:3000/2017/)

### Building for Production

```bash
npm run build
```

This creates a static export in the `out/` directory, ready for GitHub Pages deployment.

## 📁 Project Structure

```
saqif.com/
├── src/app/                 # Next.js App Router
│   ├── page.tsx            # Main landing page
│   ├── 2017/page.tsx       # 2017 site redirect
│   └── globals.css         # Global styles
├── public/2017/            # Preserved 2017 website
│   ├── index.html          # Original site
│   ├── css/                # Original styles
│   ├── js/                 # Original scripts
│   ├── img/                # Original images
│   └── resume/             # Resume iframe
├── out/                    # Static export output
└── next.config.ts          # Next.js configuration
```

## 🌐 Deployment

This site is configured for GitHub Pages deployment:

1. **Build the static export**

    ```bash
    npm run build
    ```

2. **Deploy the `out/` directory**
    - The `out/` folder contains all static files
    - Configure GitHub Pages to serve from the `out/` directory
    - Or use GitHub Actions for automatic deployment

## 🔧 Configuration

-   **Static Export**: Configured in `next.config.ts`
-   **Tailwind CSS**: Configured in `tailwind.config.js`
-   **TypeScript**: Configured in `tsconfig.json`

## 📝 Development Notes

-   The main landing page uses React hooks for dynamic year calculation
-   The 2017 site is served as static files from the `public/` directory
-   All links open in new tabs for better UX
-   The design maintains the original minimal aesthetic

## 🤝 Contributing

This is a personal website, but feel free to:

-   Report issues
-   Suggest improvements
-   Fork for your own use

## 📄 License

This project is for personal use. Please respect the original design and content.
