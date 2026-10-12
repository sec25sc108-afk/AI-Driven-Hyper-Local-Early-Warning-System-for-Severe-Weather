# WeatherWatch AI

A responsive front-end prototype for a hyper-local weather monitoring and early-warning dashboard, intended for a student disaster-management / SIH presentation.

## Files
- `index.html` — page structure and dashboard sections
- `styles.css` — responsive dark dashboard styling
- `app.js` — simulated weather profiles, risk labels, and demo alerts

## Run locally
Open `index.html` in a browser. No build tools or package installation are required.

## Publish with GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `styles.css`, and `app.js` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. The URL will appear in the Pages settings.

## Important limitations
This package is a **recreated front-end prototype**, not an export of the original Higgsfield project source. Weather values, rain probabilities, chart bars, and alerts are simulated sample data. It does not connect to a live weather API, train or run an AI forecasting model, or send real alerts. Do not use it for real emergency decisions.

To make it a real early-warning system, connect a verified weather data provider, implement and validate the forecasting service, add location-specific data handling, and follow official guidance from meteorological and disaster-management authorities.
