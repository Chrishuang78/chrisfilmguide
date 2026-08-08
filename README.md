# NYC Arthouse Film Guide

A personal weekly guide to independent, repertory, international, and arthouse cinema in New York City.

This repository is the GitHub Pages export of the ChatGPT Site. It uses Next.js static export, so GitHub Actions can publish it at:

`https://YOUR-GITHUB-USERNAME.github.io/chrisfilmguide/`

## Local development

```bash
npm ci
npm run dev
```

## Publishing

Push to `main`. The included GitHub Actions workflow builds the static site and deploys the `out/` directory to GitHub Pages.

In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions** the first time.
