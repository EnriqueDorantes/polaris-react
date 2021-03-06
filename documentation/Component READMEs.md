# Component READMEs

Component documentation is written in Markdown.

The Markdown format is enhanced to answer Polaris’ documentation needs.

---

## Metadata, component name, and introduction

A component README starts with metadata (in YAML), followed by the component name and an introduction:

```markdown
---
name: ComponentName
category: Category # for example: “Actions”
platforms:
  - android
  - ios
  - web
keywords:
  - keywords are useful
  - for improving search results
  - in the style guide

# Indicates the component takes over the entire viewport
fullSizeExamples: false # Optional, default: false

# Hides the playground, mostly useful for components which only render in an embedded app context
# that don’t have a matching React source
hidePlayground: false # Optional, default: false
---

# ComponentName

Short introduction about the component.
```

---

## Sections

Break content into sections by using a heading level 2 (`##`) preceeded by a horizontal rule (`---`):

```markdown
---

## I am a section heading

Content goes here.
```

Add keywords to a section:

```markdown
---

## I am a section heading

<!-- keywords: one, two, three -->
```

Skip a section in the side navigation of <https://polaris.shopify.com>

```markdown
---

## I am a section heading<!-- nav:skipsection -->
```

---

## Examples

List examples under the “Examples” section:

````markdown
---

## Examples

### First example

Example description.

```jsx
<MyComponent aProp={true} />
```
````

Restrict an example to a set of platforms:

````markdown
---

## Examples

### No example-for meta

This example is for all platforms (must contain React code).

```jsx
<MyComponent aProp={true} />
```

<!-- content-for: android -->

Just for Android.

<!-- /content-for -->

<!-- content-for: ios -->

Just for iOS.

<!-- /content-for -->

### This is an iOS-only example

<!-- example-for: ios -->

Example description.

### This is an example for iOS and Android

<!-- example-for: ios, android -->

Example description.
````

---

## Troubleshooting

When running `yarn tophat` or CI tests, when you see:

```console
🚨 [Top bar] No examples found in src/components/TopBar/README.md
```

A `---` may be missing before the `## Examples` heading:

```diff
+ ---
+
  ## Examples
```
