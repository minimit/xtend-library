---
type: "Components"
category: "Core"
parent: "Loader"
title: "Content"
date: "2030-10-10"
---

## Spinner

Use **tailwind classes** to assign variant (e.g. [stroke](https://tailwindcss.com/docs/stroke), [opacity](https://tailwindcss.com/docs/opacity)).

Use `.spinner-animated` to assing spinner animation.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.spinner-animated`                     | `spinner-animated`                | Spinner animation            |

</div>

<demo>
  <demovanilla src="vanilla/components/core/loader/spinner">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/spinner-inverse">
  </demovanilla>
</demo>

## Filler

#### Direction

Use **component classes** to assign direction. For `<direction>` values use `x` or `y`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-<direction>`                     | `loader-<direction>`                | Loader direction for filler            |

</div>

Use `.loader-<direction>-animated` to assing filler animation. For `<direction>` values use `x` or `y`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-<direction>-animated`                     | `loader-<direction>-animated`                | Filler animation            |

</div>

Use **tailwind classes** to assign variant (e.g. [background-color](https://tailwindcss.com/docs/background-color), [opacity](https://tailwindcss.com/docs/opacity)).

<demo>
  <demovanilla src="vanilla/components/core/loader/filler-x">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/filler-y">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/filler-inverse">
  </demovanilla>
</demo>

#### Size

For `<size>` values use `x`, `top` or `bottom`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-x.loader-size-<size>`                     | `loader-x loader-size-<size>`                | Loader size for filler direction `x`             |

</div>

<demo>
  <demovanilla src="vanilla/components/core/loader/filler-size-x">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/filler-size-top">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/filler-size-bottom">
  </demovanilla>
</demo>

For `<size>` values use `y`, `left` or `right`.

<div class="table-scroll">

|                      | Syntax                          | Mixin            | Description                   |
| ----------------------- | ----------------------------------------- | -----------------------------| ----------------------------- |
| Component                  | `.loader-y.loader-size-<size>`                     | `loader-y loader-size-<size>`                | Loader size for filler direction `y`             |

</div>

<demo>
  <demovanilla src="vanilla/components/core/loader/filler-size-y">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/filler-size-left">
  </demovanilla>
  <demovanilla src="vanilla/components/core/loader/filler-size-right">
  </demovanilla>
</demo>