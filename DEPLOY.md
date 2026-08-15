# GitHub Pages Setup

After pushing this repository to `trPrince/trPrince`, enable GitHub Pages:

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Select branch **`main`** and folder **`/site`**
4. Click **Save**
5. Wait 2–5 minutes for the site to go live at [https://trprince.github.io](https://trprince.github.io)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for GitHub Pages

```bash
npm run build:site
```

This exports the Next.js app to the `site/` folder, which GitHub Pages serves.

## Repository settings (recommended)

- **Description:** DevOps Engineer portfolio — CI/CD, Kubernetes, Azure & Terraform. Personal site + GitHub profile.
- **Website:** https://trprince.github.io
- **Topics:** devops, portfolio, nextjs, github-pages, kubernetes, terraform, github-actions, aws

## Pin this repo

Pin `trPrince` on your GitHub profile so visitors see your portfolio README first.
