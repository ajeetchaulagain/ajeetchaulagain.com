# import-notion-post

Converts a Notion page into a production-ready blog post for `ajeetchaulagain.com`.

---

## Prerequisites

`NOTION_TOKEN` must be set in `.env.local`. The Notion page must be shared with the integration.

---

## How to run

Say **"execute with \<notion-page-url\>"** to target a page directly, or **"execute"** to be prompted for a URL.

---

## Execution steps

1. **Fetch the draft** — read `NOTION_TOKEN` from `.env.local`, then call the Notion API to fetch the page content:

   ```bash
   # Get page title
   curl -s "https://api.notion.com/v1/pages/<page-id>" \
     -H "Authorization: Bearer <token>" \
     -H "Notion-Version: 2022-06-28"

   # Get page blocks (paginate with start_cursor if has_more=true)
   curl -s "https://api.notion.com/v1/blocks/<page-id>/children?page_size=100" \
     -H "Authorization: Bearer <token>" \
     -H "Notion-Version: 2022-06-28"
   ```

   Extract the page ID from the URL (last 32-char hex segment). Convert the block JSON to markdown yourself — handle `paragraph`, `heading_1/2/3`, `bulleted_list_item`, `numbered_list_item`, `code`, `callout`, `image`, and `quote` block types.

2. **Read the reference** — read `src/posts/react-image-gallery.md` for the canonical frontmatter and formatting style.
3. **Convert** — apply all conversion rules below, in order.
4. **Proofread** — fix grammar and spelling silently (see [Proofreading](#proofreading)).
5. **Copy images** — move draft images to `src/images/<post-slug>/` with descriptive names.
6. **Save** — write to `src/posts/<post-slug>.md`, overwriting any existing file.
7. **Verify** — run `yarn build` and confirm it passes.

---

## Conversion rules

### Frontmatter

Remove all Notion metadata at the top (`Assign:`, `Status:`, `Deadline:`).

Use the top-level `# H1` as the post title — put it in frontmatter, remove it from the body.

```yaml
---
title: '<post title from H1>'
description: '<one sentence: what the reader will learn>'
date: '<YYYY-MM-DD>'
tags: ['tag1', 'tag2']
thumbnail:
  { src: ../images/thumbnails/<slug>.png, altText: '<descriptive alt text>' }
author: 'Ajeet Chaulagain'
---
```

> If no matching thumbnail exists, use `image-gallery-icon.png` as a placeholder.

---

### Preserve the author's formatting

Your job is **format conversion, not editing**. Copy the author's words exactly.

| If the draft has…                                | Output…                                          |
| ------------------------------------------------ | ------------------------------------------------ |
| A bullet list                                    | A bullet list — never collapse to prose          |
| A numbered list                                  | A numbered list — never reorder                  |
| A paragraph followed by bullets                  | That exact structure                             |
| Two near-identical paragraphs                    | Both — they are intentional                      |
| A byte-for-byte duplicate paragraph              | Only one — Notion export artifact                |
| A duplicate intro sentence before unique content | Better-worded version + all content that follows |

**The only words you may change:**

- Broken Notion link syntax (see [Content cleanup](#content-cleanup))
- Unfilled placeholders (`<repo.url>`, `[Video will be attached here]`)
- Notion metadata lines

---

### No imports

Do **not** add import statements. All components (`InfoCallToAction`, etc.) are registered globally via the MDX provider.

---

### Code blocks

Notion exports everything as `tsx` or `jsx`. Reclassify each block:

| Content                      | Language tag  |
| ---------------------------- | ------------- |
| Shell commands               | `bash`        |
| TypeScript                   | `ts`          |
| JSON                         | `json`        |
| YAML                         | `yaml`        |
| JSX / TSX                    | `jsx` / `tsx` |
| Output, file trees, diagrams | `bash:noCopy` |

**Key files and configs** — add title and line highlight annotations:

````
```ts:title=src/lambda.ts {20-37}{numberLines:true}
````

**Directory structures and terminal output** — disable the copy button:

````
```bash:title=Directory_Structure&noCopy
````

Remove `$ ` prefixes from shell commands.

---

### Callout / aside blocks

Convert Notion `<aside>` blocks to `<InfoCallToAction>`. Use single quotes inside `htmlString`:

```md
<InfoCallToAction htmlString="<p>Text here. <code>inline code</code> and <a href='url'>links</a>.</p>"/>
```

---

### Images

- Copy to `src/images/<post-slug>/` with a descriptive name (`cdk-deploy-output.png`, not `image 3.png`)
- Reference as: `![Descriptive alt text](../images/<post-slug>/filename.png)`
- Remove Notion's URL-encoded syntax: `![image.png](Folder%20Name/image.png)`

---

### Content cleanup

Fix Notion export artifacts only — do not touch the author's prose:

- **Broken links** — `[NestJS](<[https://docs.nestjs.com/](https://docs.nestjs.com/)>)` → `[NestJS](https://docs.nestjs.com/)`
- **Placeholders** — remove `<repo.url>`, `[Video will be attached here]`, etc.
- **Duplicate paragraphs** — remove byte-for-byte duplicates; keep near-duplicates
- **List indentation** — fix Notion's broken nesting, do not change the content
- **Malformed headings** — e.g. `### ### Writing CDK Stack` → `### Writing CDK Stack`
- **Instructional notes** — remove Notion-internal notes like `(selected line → 3-6, 12-37)`
- **Emoji flow diagrams / file trees** — keep as-is in a `bash:noCopy` block

---

### Section headings

- `##` — main sections
- `###` — subsections
- `####` — sub-subsections
- Never add a `##` that repeats the post title

---

## Proofreading

After conversion, fix grammar and spelling silently — no changelog, no summary.

**Fix:**

- Spelling mistakes and typos
- Subject-verb agreement and tense consistency
- Missing or incorrect punctuation

**Do not touch:**

- Word choice, tone, or style
- Technical terms, package names, CLI flags, code references
- Run-on sentences that are clear and intentional

---

## Output location

`src/posts/<post-slug>.md`

Match the `notion-markdown-posts/` subdirectory name, shortened if sensible (e.g. `deploy-nestjs-app-to-aws-lambda-using-aws-cdk` → `nestjs-aws-serverless`). If a file already exists for the same post, use that filename.
