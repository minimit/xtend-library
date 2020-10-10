---
type: "Components"
category: "Core"
parent: "Row"
title: "Content"
date: "2030-10-10"
---

## Space

For `<space>` values use any of [tailwind spacing](https://tailwindcss.com/docs/customizing-spacing).

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Variants               | Description                   |
| ----------------------- | ---------------------------- | -----------------| ----------------------------- |----------------------------- |
| Util                  | `.row-space-<space>`       | `row-space-<space>`                | `responsive`                | Space contents horizontally and vertically            |
| Util                  | `.row-space-x-<space>`       | `row-space-x-<space>`                | `responsive`                | Space contents horizontally            |
| Util                  | `.row-space-y-<space>`       | `row-space-y-<space>`                | `responsive`                | Space contents vertically            |

</div>

[[notePrimary]]
| **Do not use margin** css or classes on `.row` because it has automatic negative margins for internal spacing.

<demo>
  <demovanilla src="vanilla/components/core/row/space-px">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-1">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-2">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-3">
  </demovanilla>
  <demovanilla src="vanilla/components/core/row/space-4">
  </demovanilla>
</demo>

## Alignment

Use **tailwind classes** to assign flex alignment.

<demo>
  <demovanilla src="vanilla/components/core/row/alignment">
  </demovanilla>
</demo>