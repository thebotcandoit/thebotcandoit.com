# Redfin Estimate Checker

Use this skill to back-calculate what Redfin's AVM estimated at the moment a home sold and compare it to the actual sale price.

## Prerequisites
This skill requires **Claude in Chrome** to navigate Redfin property pages.

## The core technique
Redfin shows how much the estimate has moved since the home sold (e.g. "▼ $250,000 since sold").

**AVM at time of sale = Current estimate − (movement since sale)**

## How to use
1. Get a list of recently sold addresses from the user
2. For each address, navigate to the Redfin property page
3. Record: current estimate, movement since sold, actual sale price and date
4. Calculate AVM at sale and the gap vs actual price
5. Build a results table and write a brief interpretation

## Output format
| Address | Sale Date | Sale Price | Redfin AVM at Sale | Gap | Gap % |
|---------|-----------|-----------|-------------------|-----|-------|

**Interpretation:** [2-3 sentences on what the pattern means]

## Success statement
Skill is complete when the user has a table showing AVM accuracy and a plain-English interpretation of what it means for their decision.
