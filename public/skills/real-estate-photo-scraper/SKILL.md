# Real Estate Photo Scraper

Use this skill whenever a user shares a real estate listing URL and wants to download, save, or export the property photos.

## Prerequisites — read before starting

This skill requires **Claude in Chrome** (the browser extension). Without it, Claude cannot control the browser and the skill will not work.

Before proceeding, confirm:
- Chrome browser is open (not Firefox, Safari, or Edge)
- The Claude in Chrome extension is installed and the user is logged in
- The extension icon is visible in the Chrome toolbar

## Supported sites
- Redfin
- Zillow
- Compass
- Realtor.com
- Most MLS listing pages

## How to use
1. Ask the user to share the listing URL if they haven't already
2. Open the URL in Chrome using Claude in Chrome
3. Navigate through every photo in the gallery systematically
4. Download all photos to a folder on the user's computer
5. Confirm the total number of photos saved and the folder location

## Troubleshooting
| Problem | Fix |
|---------|-----|
| Photos not loading | Ask user to scroll through gallery manually first, then retry |
| Download blocked | Ask user to allow downloads from this site in browser settings |
| Login required | Ask user to log into the site first |

## Success statement
Skill is complete when all photos have been downloaded and the user confirms access. State the total count and folder path.
