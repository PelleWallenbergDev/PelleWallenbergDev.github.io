#  Website

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

## Where to put images

You can add images to the workspace in two common places depending on how you want to reference them:

- public/ (recommended for JSON/static references):
	- Put images under `public/images/` (for example `public/images/portfolio/project1.png`).
	- Files in `public/` are served as-is at the site root, so you can reference them from JSON or templates with an absolute path like `/images/portfolio/project1.png`.
	- This is the simplest approach when your image paths live inside data files (for example `src/data/projects.json`) because the bundler does not rewrite paths inside JSON.

- src/ (for bundled imports):
	- Put images under `src/assets/` or next to components (for example `src/components/Portfolio/images/`).
	- Import them in Vue so the bundler can optimize and fingerprint them. Example using `new URL`:

```js
// inside a <script setup> in a Vue component
const imageUrl = (filename) => new URL(`../components/Portfolio/images/${filename}`, import.meta.url).href
// usage in template: <img :src="imageUrl(project.image)" />
```

Examples for this repo:

- If you want to keep using the existing `src/data/projects.json` file, update the `image` values to point to `public/`, e.g.:

```json
{
	"image": "/images/portfolio/project1.png"
}
```

- Or move the image files into `src/components/Portfolio/images/` and store only the filename in the JSON, then resolve it in the component with `new URL(...)` as shown above.

Tips:
- Use `public/` for content you want to reference directly from static files or external data.
- Use `src/` when you want Vite to process images (compression, hashing) and you don't need to reference them from plain JSON.
- Keep images in a logical subfolder like `images/portfolio/` to avoid clutter.


### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
