---
name: content-creation
description: Standards, templates, and validation logic for creating high-performance web content.
allowed-tools: Read, Write
---

# Content Creation Skill

> "Content is not just text. It is a user experience."

## 📚 The 2026 Content Playbook

### 1. The "Skim-Stopper" Technique
Readers skim. Stop them with visual hooks:
*   **Tables**: "Comparison Table" stops 80% of skimmers.
*   **Lists**: Bullet points are read 3x more than block text.
*   **Bolding**: Bold the **most important phrase** in a paragraph involved.

### 2. The Semantic Web (HTML5)
*   **h1**: Only one per page.
*   **h2**: Main chapters.
*   **h3**: Sub-points within chapters.
*   **table**: Data presentation (don't use images for data).

---

## 📋 Markdown Template: The "Pillar Post"

Copy this structure for standard informational articles:

```markdown
# [Target Keyword]: The Complete Guide (2026 Update)

**Meta Description**: Learn everything about [Keyword]. expert analysis, costs, and pros/cons. [CTR Hook].

---

## Key Takeaways
*   **Core Insight 1**: The most important thing.
*   **Core Insight 2**: The second most important thing.
*   **Core Insight 3**: Actionable advice.

---

[Introduction: Hook + Promise + Credibility]

## What is [Keyword]?
[Definition and Context]

## Benefits of [Keyword]
*   Benefit 1
*   Benefit 2

## Comparison: [Option A] vs [Option B]
| Feature | Option A | Option B |
| :--- | :--- | :--- |
| **Cost** | $$$ | $$ |
| **Speed** | Fast | Medium |
| **Best For** | Pros | Beginners |

## Step-by-Step Guide
1.  **Step One**: Instruction.
2.  **Step Two**: Instruction.

## Frequently Asked Questions (FAQ)

### Question 1?
Answer (40-50 words, direct).

### Question 2?
Answer.

## Conclusion
[Summary + Final Call to Action]
```

---

## ✅ Validation (The "Hard" Check)

We enforce quality via code.

### `scripts/content_validator.py`

This script is the **Law**. It checks:
1.  **Word Count**: Must require deeper analysis.
2.  **Structure**: Essential sections (Intro, Takeaways, FAQ).
3.  **Formatting**: Markdown syntax validity.

Usage:
```bash
python .agent/skills/content-creation/scripts/content_validator.py path/to/file.md
```
