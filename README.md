# UI Index skills

Research real websites, then build an interface informed by the evidence.

Two complementary skills for coding agents:

| Skill | Purpose |
| --- | --- |
| `uiindex-research` | Find relevant websites, inspect their captures and measured design systems, and cite useful patterns. |
| `uiindex-website-design` | Apply those patterns to an existing web project and verify the result in a browser. |

These are original, web-focused skills. They work with [UI Index](https://uiindex.design), but the design skill also works with references supplied by the user. YC is one collection, not a required style or industry.

## Install

Clone the public skills repository and validate the package:

```sh
git clone https://github.com/perixtar/uiindex-skills.git
cd uiindex-skills
node scripts/validate.mjs
```

Copy the desired directories from `skills/` into your coding agent's project skill directory. For example, Codex uses `.codex/skills/` and Claude Code uses `.claude/skills/`. Review the instructions before installation.

Source and contributions: [perixtar/uiindex-skills](https://github.com/perixtar/uiindex-skills).

## Connect data

The research skill can use either the UI Index MCP tools, when configured, or today's public exports:

- [Discovery index](https://uiindex.design/data/design-index.json)
- [Agent entry point](https://uiindex.design/llms.txt)
- Individual study records and design artifacts linked by the index

The MCP implementation lives separately in the private application workspace and is not part of this skills distribution. Free local use reads the public exports. A managed endpoint is staged at `https://uiindex.design/api/mcp/`; when live, it will require a UI Index account, an active Individual ($9/month) or Team ($15/month) plan, and a bearer token created on the account page. Production checkout remains disabled during payment-account activation. Installing a skill does not subscribe the user or authorize payment.

## Try it

> Find references for a developer-tool homepage. Compare navigation, hero composition, type scale, and mobile behavior; then adapt the strongest patterns to this project.

> Improve this pricing section. Show the reference screens behind your recommendations and verify the expanded, selected, keyboard, and mobile states.

> Study Orca Aerospace's design system. Separate measured values from interpretation and show the capture date and limitations.

## Contribute

Keep changes grounded in an observable agent failure or a useful supported workflow. Preserve the user's stack, product, scope, and authorization. Do not add mandatory bulk research, invented quality scores, or automatic paid calls. Run `node scripts/validate.mjs` before proposing a change.

## License and scope

The original skill instructions and validation script in this folder are MIT licensed. The UI Index name and logo are not licensed by this grant. Neither website screenshots, third-party brands/fonts, the design dataset, nor hosted services are included in this code license. Free access is not a transfer of those rights.

Inspired by the separation of research and implementation skills in [Appllama's public skills repository](https://github.com/Appllama/appllama-skills). No AppLlama skill text, logo, screenshots, or paid library data is included.
