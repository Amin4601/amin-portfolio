# Amin Ghafoori — Personal Portfolio

Responsive static portfolio built with HTML, CSS, and vanilla JavaScript.

## Project structure
- `index.html` — page content and structured profile metadata
- `styles.css` — responsive visual system and components
- `script.js` — navigation, project filtering, and project detail dialogs
- `assets/` — résumé, Power BI report, and Python notebook
- `favicon.svg`, `og-image.svg` — browser and social preview artwork
- `robots.txt`, `404.html`, `vercel.json` — publishing support

## Run locally
Open `index.html` in a browser, or run `python -m http.server 8000` from this folder.

## Deploy to Vercel
1. Upload this folder to a GitHub repository you own.
2. Import the repository into Vercel.
3. Select **Other** as the framework preset; no build command is required.
4. Keep the project root as `/` and deploy.
5. Add a custom domain in Vercel only if you own one and can edit its DNS records.

## Final review before public launch
- Confirm that every GitHub repository link is the intended public repository.
- Confirm the LinkedIn URL and public profile details.
- Review the résumé PDF and the PBIX/Notebook files before making them publicly downloadable.
- Add real dashboard screenshots if you want visual previews instead of the CSS-created abstract illustrations.
- Add measured model metrics only after checking actual notebook outputs. The page intentionally does not invent R², MAE, or RMSE values.

## Football dashboard page names
The supplied Power BI report contains four pages: `overview`, `leagues`, `matches`, and `players`.
