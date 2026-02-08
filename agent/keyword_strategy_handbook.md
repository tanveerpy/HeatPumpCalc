# Heat Pump Keyword Strategy: Execution Handbook

> **Status**: Ready for Implementation  
> **Date**: 2026-02-08  
> **Author**: Keyword Strategist Agent

## 1. Executive Summary
This document serves as the master guide for executing the SEO and Content Strategy for the "Heat Pump Cost Calculator". We have moved away from generic "lawn care" templates to a focused, high-intent strategy targeting homeowners considering heat pumps in 2026.

**Core Objective**: Dominate the "Heat Pump Cost" niche by combining a functional tool (Calculator) with deep, authoritative content strings.

---

## 2. Asset Overview & Location
All strategic assets are located in the root or `agent/` folder.

| Asset | Location | Purpose |
| :--- | :--- | :--- |
| **Master Keyword List** | [`/keywords.md`](../keywords.md) | The raw data source. Contains 20+ high-value keywords categorized by Intent (Transactional, Commercial, Informational). |
| **Content Strategy** | [`/agent/content_strategy.md`](./content_strategy.md) | The architectural blueprint. Defines URL structure, Content Pillars, and Linking Strategy. |
| **Content Briefs** | [`/agent/content_briefs.md`](./content_briefs.md) | Detailed writing instructions for the first 3 priority pages. Give this to the Writer Agent. |

---

## 3. Step-by-Step Execution Guide

### Phase 1: The Foundation (Tools)
*Objective: Build the "Magnets" that attract backlinks and high-intent users.*

1.  **Build the Calculator**:
    - **URL**: `/` (Homepage) or `/calculator`
    - **Key Input Fields**: Square Footage, Climate Zone (Hot/Cold), Current Heating Fuel (Gas/Oil/Electric).
    - **Logic**: Use the data from `keywords.md` to ensure the tool's H1 and Meta Title target `heat pump cost calculator`.

2.  **Build the Savings Estimator**:
    - **URL**: `/tools/savings-estimator`
    - **Focus**: ROI. Calculate "Years to Break Even".
    - **Internal Link**: Place a prominent link to this tool from the main Calculator results page.

### Phase 2: The Authority (Articles)
*Objective: Rank for research-phase queries and support the tools.*

1.  **Assign Briefs to Writer**:
    - Take the briefs from `agent/content_briefs.md`.
    - Generate the articles using the `content-writer` agent.
    - **Constraint**: Ensure the writer uses the specific H2s and data points listed in the briefs.

2.  **Publishing Checklist**:
    - **URL Permalinks**: Ensure they match the `Target URL` in the briefs exactly (e.g., `/guides/heat-pump-cost-2026`).
    - **Interlinking**:
        - The "Cost Guide" MUST link to the Calculator 3x (Intro, Middle, CTA).
        - The "Comparison Level" MUST link to the Savings Estimator.
    - **Images**: Use descriptive Alt Text containing the primary keyword (e.g., "chart showing heat pump vs gas furnace cost comparison").

### Phase 3: The Snippet Wins (FAQ)
*Objective:Capture "People Also Ask" boxes in Google.*

1.  **Implement Schema Markup**:
    - Wrap the FAQ section in `LD-JSON` (FAQPage Schema).
2.  **Draft Answers**:
    - Use the questions listed in `keywords.md` (Section 3).
    - Keep answers under 50 words each to maximize snippet probability.

---

## 4. Maintenance & Growth

### Quarterly Review
- **Re-evaluate Keywords**: Check Search Console for "surprise" keywords we are ranking for but didn't target. Add them to `keywords.md`.
- **Update Costs**: Energy prices change. Update the Calculator logic and the "Cost Guide" article figures annually (Next review: Q1 2027).

### Expansion Opportunities
- **Brand-Specific Guides**: "Mitsubishi vs Daikin Heat Pump Cost".
- **State-Specific Guides**: "Mass Save Rebates 2026", "California Heat Pump Incentives".

---

## 5. Immediate Next Actions
1.  [ ] **Developer**: Initialize the Next.js project and build the `Calculator` component.
2.  [ ] **Content Writer**: Generate the "Heat Pump Cost Guide 2026" using Brief #1.
