# Deployment

HealthTerminology.com is built as a static Vite app and can be deployed to GitHub Pages without a backend.

## Local build

```bash
npm ci
npm run build
```

The build output is written to `dist/`.

## GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

What it does:
- runs on pushes to `main`
- installs dependencies with `npm ci`
- builds the app with `npm run build`
- uploads `dist/` as a Pages artifact
- deploys that artifact to GitHub Pages

Repository settings still need to point Pages at GitHub Actions.

## Sample export

A small example progress export is available at `public/sample-progress-export.json`.
It is meant as a reference shape for the import/export flow, not as live user data.
