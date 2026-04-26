# Personal website — source-of-truth notes

Notes on the existing resume-generation system for reference when porting the
content into a personal website. Everything below lives in
`/home/alex/resumes-aws/lambda-resume/`.

## The unbranded resume — where its content actually comes from

The plain unbranded resume PDF lives at:

```
/home/alex/resumes-aws/lambda-resume/alex-sikand/job-companies/alex-sikand-plain-unbranded.pdf
```

Its content is generated from `alexData` — a hardcoded constant inside
`src/handler.ts` starting at **line 378**. The constant is the source of truth
for the lambda's rendering of Alex's resume.

There is _also_ a `templates/alex-sikand.json` file in the same project, but
**it is dead code for Alex's resume.** The lambda only loads the JSON template
for Azhar (`templates/azhar-huda.json`, handler.ts line 497); for Alex it just
uses the inline `alexData` constant.

The two have drifted significantly. If we ever consolidate, `alexData` is the
canonical version to keep.

### Drift between `alexData` and `alex-sikand.json`

| Field | `alexData` (source of truth) | `alex-sikand.json` (stale) |
|---|---|---|
| Email | `apsikand@gmail.com` | `alex@sikand.org` |
| City | San Francisco, CA | "United States" |
| Summary | Versatile Full-Stack Engineer… | I'm an AI & ML-focused full-stack engineer… |
| Skills | AWS, GCP, Docker, TypeScript, React, Next, Node, Python, Prisma, PostgreSQL, Vector DBs, DynamoDB, Mongo, Redis, BullMQ, Twilio, LangChain, RAG, PyTorch, CV (with `\n` separators for visual grouping) | Different list incl. Swift, BigQuery, Firebase, D3, Solidity |
| Visible jobs | 4 (CallSaver, Impel, Pivotal, Silk Labs) — FlightLevel is `hidden: true` | 7 (also Fyt, View ×2) |
| Hobbies | none | Open Source / CV Research / Mobile App Dev |
| Education | `M.S. - Artificial Intelligence`, `B.A. - Computer Science` | `Master of Science…`, `Bachelor's Degree…` |

## How the resume PDF is generated

Single-file Lambda at `src/handler.ts` (~1257 lines). Key landmarks:

| Line | What |
|---|---|
| `4–18` | `@react-pdf/renderer` imports (`Document`, `Page`, `Text`, `View`, `Image`, `renderToStream`) |
| `25–27` | Default font + colors + sizing |
| `223–337` | Font registry (Manrope, etc.) |
| `378–494` | **`alexData`** — the resume content |
| `497–516` | Loads Azhar's data from JSON (different code path) |
| `518–851` | `stylingConfigs` — color/font variants per template (gradient backgrounds, logo overlays, white-logo variants, brand color extraction with WCAG contrast checks) |
| `853–1166` | **`ResumeDocument`** React component — renders the actual PDF layout (header, Summary, WorkExperiences, EducationExperiences, Skills, Hobbies) |
| `1167` | `renderToStream(React.createElement(ResumeDocument, …))` — produces the PDF stream |
| `1178+` | `export const handler` — Lambda entry point |

The unbranded PDF is what `ResumeDocument` produces with the default color
config (`{ ACCENT: "#4f46e5", BACKGROUND: "#ffffff", BODY: "#374151",
NAME: "#111827" }`) — i.e., no company branding overlay applied.

Branded variants (gradient/white-logo per company) are produced by the same
component with different `stylingConfigs` keyed by the destination company —
those are the PDFs under `alex-sikand/final-list/output/<Company>/`.

## Image assets — what's used and where they live

All paths below are relative to `/home/alex/resumes-aws/lambda-resume/`.

### Headshot

- `alex-sikand/headshots/alex-sikand.png`
  - Referenced via `alexData.headshotPath` (handler.ts line 387)
  - Rendered in the resume header at 80×80 with rounded corners (handler.ts
    line 879: `headshot: { width: 80, height: 80, borderRadius: 40 }`)

### Work-experience company logos

Each visible job in `alexData.workExperiences` is matched by company name in
the renderer (handler.ts ~line 920) and gets a hardcoded logo:

| Company | Image path |
|---|---|
| CallSaver | `alex-sikand/images/callsaver.png` |
| Impel | `alex-sikand/images/impel.png` |
| Pivotal | `alex-sikand/images/pivotal.png` (also `pivotal.jpeg` on disk) |
| Silk Labs | `alex-sikand/images/silk-labs.png` |
| FlightLevel | `alex-sikand/images/flight-level.png` (hidden in current resume) |

These are referenced by hardcoded conditionals in the renderer
(`isCallSaver && Image…`, etc.) — not by a generic data-driven lookup. To add
a new job logo, both the file and a new conditional in handler.ts are needed.

### Education / university logos

| School | Image path |
|---|---|
| Boston University | `alex-sikand/images/boston-university.png` |

Matched on `exp.school?.toLowerCase().includes('boston university')` at
handler.ts line 987 — same hardcoded-conditional pattern as the company
logos.

### Other relevant assets

- `alex-sikand/jobs/remote-sf-bay.json` — job-list config used by some batch
  scripts; not part of the resume layout itself.
- `alex-sikand/final-list/output/<Company>/` — all rendered branded PDFs
  (one gradient and one white-logo variant per company).

## Implications for the personal website

When porting this content into a personal site:

- **Use `alexData` from handler.ts as the source-of-truth content**, not the
  JSON. The JSON is stale and missing the recent CallSaver/Impel updates.
- **Image paths are relative to the lambda's working directory** — for a
  website, copy the files into the site's `public/` (or equivalent) and
  rewrite paths.
- **The image-to-experience mapping is hardcoded by company name in
  handler.ts.** If you want a generic data-driven model on the website, add
  a `logoPath` field to each work experience entry instead of copying the
  conditional pattern.
- **Skill grouping uses `\n` literals as visual separators** in `alexData`.
  On the web, those should become explicit category headings or array
  groupings (e.g. `{ infra: [...], frontend: [...], data: [...] }`) rather
  than inline newlines.
- **Education degrees use `M.S. - Artificial Intelligence` / `B.A. -
  Computer Science` formatting.** The dash gets visually split into
  degree/field by the renderer; the website should split them at the data
  layer.
