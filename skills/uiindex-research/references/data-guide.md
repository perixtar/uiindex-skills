# UI Index data guide

The discovery document is `/data/design-index.json`. Its `companies` array contains `name`, `slug`, `industry`, `subindustry`, `page`, `data`, and optional `design` metadata. The current dataset is a YC collection; the product is not YC-only.

Use `design.signature`, `descriptors`, `colorScheme`, `fontFamilies`, and `components` to shortlist. The `analysis` object carries source/capture dates, confidence, coverage, warnings, and whether editorial review is pending. A declared font may not have loaded: check warnings before calling it a verified rendered font.

An individual record at `/data/companies/{slug}.json` contains:

- `capture.screens`: homepage viewport captures, including desktop regions and a mobile opening when available.
- `capture.exploration.sections`: additional section crops when separately captured.
- `capture.exploration.motion`: optional recording and poster, with its own capture date in `exploration.capturedAt`.
- `textIndex.lines`: OCR text and image-space rectangles. The index's image hash associates it with a particular capture; text is not an exact DOM transcription.
- `observation.designSystem`: measured design roles, component observations, provenance, review state, responsive observations, and confidence notes.

MCP screen references use `{slug}/{screen-id}`, for example `orca-aerospace/hero`. Do not invent a section ID; get it from `list_screens` or `search_screens`. A section's capture date can differ from the parent study's original capture date.

The four implementation artifacts are `DESIGN.md`, `variables.css`, `tailwind.css` (Tailwind v4 theme), and `tokens.json`. These are generated observational guides, not company-published source files. Keep the evidence trail when adapting their values.

Image and media paths are UI Index-relative. A screen URL lets a browser view it; a tool must return or a supported viewer must open the actual image before visual inspection is claimed. Missing optional fields mean unavailable evidence, not a reason to fabricate a replacement.
