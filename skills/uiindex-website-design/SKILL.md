---
name: uiindex-website-design
description: Build or improve web interfaces from real visual references, preserving the existing project and verifying layout, controls, and motion in a browser. Use for reference-led website implementation or visual critique; works with user-supplied references and does not require UI Index MCP.
license: MIT
---

# Reference-led website design

Inspect the existing implementation before changing it. Reuse the project's typography, tokens, components, routing, and data boundaries unless the requested design requires a specific change. A visual improvement is not permission to migrate frameworks or add services.

## Translate references into decisions

Start with the supplied screenshots or website. If references are missing and browsing is available, find examples appropriate to the user's audience and page type; UI Index research is one optional source. Study only enough to resolve the actual layout and interaction decisions.

Record which decisions come from which reference: reading order, relative scale, whitespace, control grouping, content density, and behavior. Match the user's stated preferences before applying your own. Do not copy trademarks, claim another company's work as original, or assume its fonts/assets are licensed for reuse.

## Build the useful interface

- Let real product content lead. Add copy when it clarifies a choice or state, not to fill whitespace. Avoid decorative subtitles, counters, and repeated CTAs without a task-specific reason.
- Keep emphasis within the chosen type system. Do not introduce an unrelated display face for a few headline words unless the brief asks for it.
- Use one coherent spacing, radius, and color system. Trace exceptions to the reference or a functional need.
- Implement controls beyond the resting state: selected, open, focused, loading, empty, error, and disabled where relevant. Preserve labels, keyboard operation, escape/dismissal behavior, and a path out of empty results.
- Keep screenshot/content previews faithful. Use honest empty states for missing captures, and never represent a mock animation as a recorded source interaction.

## Motion is behavior

First name what changes and why. Keep reading surfaces stable. Gesture-driven motion should respond from its current position, allow interruption, and ease to rest. Preserve native scrolling and reduce decorative motion for reduced-motion preferences. Clean up event handlers and animation frames, and stop work when hidden or offscreen.

Watch the actual interaction at normal speed. Still screenshots do not establish smoothness, gesture fidelity, or frame rate. Do not add an animation dependency when the project's existing tools can implement the required behavior.

## Verify and report

Open the implemented page in the available browser. Compare at a matching viewport, then test a narrow viewport and the affected interactions. Check long content, overflow, keyboard focus, images loading, and layout changes when menus open. For motion, test rapid input, interruption, leaving the area, scrolling, and reduced motion when supported.

Run relevant existing tests and the build. Fix concrete defects you can demonstrate. If browser access or source evidence is unavailable, state what remains unverified; do not manufacture a screenshot, a numeric quality score, or an assertion that the design is flawless.

An implementation request authorizes the requested changes, not publication, purchases, account changes, or a larger redesign. A critique-only request should end with findings, not unsolicited edits.
