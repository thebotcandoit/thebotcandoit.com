---
name: redfin-estimate-accuracy
description: "Use this skill when a user wants to know how accurate Redfin's estimate is on a property currently for sale. Triggers when a user pastes a Redfin listing URL and asks how accurate or trustworthy the estimate is, whether to trust the Redfin number, or how reliable the AVM is for a specific property."
---

# Redfin Estimate Accuracy Checker

Use this skill to answer the question: **how accurate is Redfin's estimate on a property currently for sale?**

You answer this by checking Redfin's track record on nearby homes that already sold — if Redfin was consistently off by 10% on recent sales in the same area, the user should weight the current estimate accordingly.

## Prerequisites
This skill requires **Claude in Chrome** to navigate Redfin property pages.

## Step-by-step process

### 1. Navigate to the listing
- Use `window.location.href = '<URL>'` via the Chrome JS tool to open the Redfin listing the user provided
- Wait for the page to load, then grab:
  - **List price** (the asking price)
  - **Redfin Estimate** (the AVM value shown on the page)
- Note the gap between them (e.g. "Redfin thinks it's worth $600K more than asking")

### 2. Find nearby sold comps
- Scroll down the listing page to find the **"Nearby Recently Sold Homes"** or **"Similar Homes"** section
- Collect the addresses of recently sold homes shown there (aim for 4-6 comps)
- If fewer than 3 comps are visible, note this as a limitation

### 3. Check Redfin's accuracy on each comp
For each sold comp:
- Navigate to that comp's Redfin page using `window.location.href`
- Find the **Redfin Estimate** and the **"▼/▲ $X since sold"** indicator
- Back-calculate: **AVM at time of sale = Current estimate − movement since sold**
- Record the **actual sale price** and **sale date** from the page
- Calculate the gap: AVM at sale vs. actual sale price (in dollars and as a percentage)
- Note the direction: did Redfin overestimate or underestimate?

### 4. Build the accuracy report
Present findings in this format:

**The property:**
- Address, list price, Redfin Estimate, and the gap between them

**How accurate Redfin has been nearby:**

| Address | Sale Date | Sale Price | Redfin Predicted | Off By | Off By % | Direction |
|---------|-----------|-----------|-----------------|--------|----------|-----------|
| (comp)  | (date)    | $X        | $Y              | $Z     | N%       | Over/Under |

**Summary:**
- Average error (as a percentage)
- Whether Redfin tends to overestimate or underestimate in this area
- What this means for the current listing's estimate — e.g. "Redfin's estimate of $3.1M on this property should be taken with caution — in this neighborhood, Redfin has been overestimating by an average of 11%, which would put a more realistic estimate closer to $2.76M."

### 5. Give a plain-English verdict
End with a clear, direct interpretation:
- Is the Redfin estimate likely reliable here, or has it been consistently off?
- If the list price is below the estimate, does Redfin's local track record suggest the home is actually underpriced, or is the estimate just inflated?
- What should the user keep in mind when making an offer?

## Important notes
- Only use sold comps where the "since sold" indicator is visible — skip any where it's missing
- If Redfin blocks navigation or a page doesn't load, note it and move on to the next comp
- Always state how many comps you were able to check (e.g. "Based on 5 of 6 nearby sales")
- Be honest about limitations — if only 2 comps are available, say the sample is small

## Success statement
Skill is complete when the user has a table showing Redfin's accuracy on nearby sold homes and a plain-English interpretation of what that means for the property they're looking at.
