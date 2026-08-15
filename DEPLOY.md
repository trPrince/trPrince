# GitHub Pages Setup

After pushing this repository to `trPrince/trPrince`, enable GitHub Pages:

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually)
4. Wait 2–5 minutes for the site to go live at [https://trprince.github.io](https://trprince.github.io)

The workflow builds the Next.js static export and publishes the `out/` artifact using
`actions/upload-pages-artifact` and `actions/deploy-pages`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Local build

```bash
npm run build
```

Static files are written to `out/`.

## Git hooks (Husky)

| Hook         | Action                                                           |
| ------------ | ---------------------------------------------------------------- |
| `commit-msg` | Validates Conventional Commits (`feat:`, `fix:`, `chore:`, etc.) |
| `pre-commit` | Runs ESLint and Prettier on staged files                         |
| `pre-push`   | Runs `npm run build`                                             |

## Repository settings (recommended)

- **Description:** DevOps Engineer portfolio — CI/CD, Kubernetes, Azure & Terraform. Personal site + GitHub profile.
- **Website:** https://trprince.github.io
- **Topics:** devops, portfolio, nextjs, github-pages, kubernetes, terraform, github-actions, aws

## Pin this repo

Pin `trPrince` on your GitHub profile so visitors see your portfolio README first.
