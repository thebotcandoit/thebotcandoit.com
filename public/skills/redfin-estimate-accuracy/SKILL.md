---
name: redfin-estimate-accuracy
version: "1.0"
updated: "2026-03-26"
description: "Use this skill when a user wants to know how accurate Redfin's estimate is on a property currently for sale. Triggers when a user pastes a Redfin listing URL and asks how accurate or trustworthy the estimate is, whether to trust the Redfin number, or how reliable the AVM is for a specific property."
---

# Redfin Estimate Accuracy Checker

Use this skill to answer the question: **how accurate is Redfin's estimate on a property currently for sale?**

You answer this by checking Redfin's track record on nearby homes that already sold. For each sold comp, you look at the Estimate History chart to find what Redfin was actually predicting *before* the sale closed, then compare that to the actual sale price.

## Prerequisites
This skill requires **Claude in Chrome** to navigate Redfin property pages.

## Critical: why the "since sold" number is useless

Redfin shows a "▼/▲ $X since sold" indicator on sold properties. **Do NOT use this to back-calculate the AVM at time of sale.** Redfin recalibrates its estimate to match the actual sale price immediately after closing. So back-calculating from the "since sold" number always gives you the sale price itself — it tells you nothing about how accurate Redfin's prediction was.

The only reliable source for what Redfin was predicting before a sale is the **Estimate History chart**.

## Step-by-step process

### 1. Navigate to the listing
- Use `window.location.href = '<URL>'` via the Chrome JS tool to open the Redfin listing the user provided
- Wait for the page to load, then use JavaScript to extract:
  - **List price** (the asking price)
  - **Redfin Estimate** (the AVM value shown on the page)
- Note the gap between them (e.g. "Redfin thinks it's worth $9K more than asking")

### 2. Find nearby sold comps
- Scroll down the listing page to find the **"Nearby Recently Sold Homes"** section
- Use `read_page` with the `find` parameter to locate this section efficiently
- Collect the addresses, sale dates, and sale prices of recently sold homes (aim for 4-6 comps)
- If fewer than 3 comps are visible, note this as a limitation

### 3. Check Redfin's pre-sale estimate on each comp

For each sold comp, do the following:

**Navigate to the comp:**
- Use `window.location.href` to go to the comp's Redfin page

**Open the Estimate History chart:**
- Use `find` to locate the "Estimate history" tab on the page
- Click the Estimate History tab to switch to the chart view
- Then click the **"1 yr"** tab to get monthly-level detail

**Extract the pre-sale estimate:**
- Hover on the chart line at the month **immediately before** the sale date
  - Example: if the home sold March 6, hover on the February data point
  - If the sale was early in a month, also check the month before that
- The tooltip will show the month and Redfin's estimate value at that point
- Record this as the **Redfin Pre-Sale Estimate**
- If the tooltip doesn't appear on the first hover, try hovering directly on the chart line itself (the colored line, not the background)

**Calculate the gap:**
- Gap = Sale Price − Redfin Pre-Sale Estimate
- Gap % = Gap / Sale Price × 100
- Direction: Over (Redfin predicted higher than sale) or Under (Redfin predicted lower than sale)

**Important hover tips:**
- The chart has monthly data points — hover between gridlines to find each month
- The tooltip format is: "Mon YYYY: $XXX,XXX Estimate"
- If a month's data point doesn't show, try hovering slightly left or right
- The y-axis shows dollar values — use it to visually estimate if the tooltip won't appear

### 4. Build the accuracy report

Present findings in this format:

**The property:**
- Address, list price, Redfin Estimate, and the gap between them

**How accurate Redfin has been nearby:**

| Address | Sale Date | Sale Price | Redfin Pre-Sale Est. | Est. Month | Off By | Off By % | Direction |
|---------|-----------|-----------|---------------------|------------|--------|----------|-----------| 
| (comp)  | (date)    | $X        | $Y                  | Mon YYYY   | $Z     | N%       | Over/Under |

**Summary:**
- Average error (as a percentage)
- Whether Redfin tends to overestimate or underestimate in this area
- What this means for the current listing's estimate — e.g. "Redfin has been underestimating values in this area by an average of 9%. Its estimate of $174K on this property is likely conservative — the true market value may be closer to $190K."

### 5. Give a plain-English verdict

End with a clear, direct interpretation:
- Is the Redfin estimate likely reliable here, or has it been consistently off?
- If the list price is below the estimate, does Redfin's local track record suggest the home is actually underpriced, or is the estimate just inflated?
- What should the user keep in mind when making an offer?

## Important notes
- **Never use the "since sold" indicator** — it reflects post-sale recalibration, not prediction accuracy
- Use the Estimate History chart on every comp — this is the only source of truth
- If the Estimate History tab won't load or the chart has no data for a comp, skip it and note why
- If Redfin blocks navigation or a page doesn't load, note it and move on to the next comp
- Always state how many comps you were able to check (e.g. "Based on 5 of 6 nearby sales")
- Be honest about limitations — if only 2 comps have usable chart data, say the sample is small

## Success statement
Skill is complete when the user has a table showing Redfin's actual pre-sale prediction accuracy on nearby sold homes and a plain-English interpretation of what that means for the property they're looking at.
