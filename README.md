
First, create hono with vite

```sh
❯ bun create hono@latest
create-hono version 0.16.0
✔ Target directory sample-hono-tailwindcss
✔ Which template do you want to use? cloudflare-workers+vite
✔ Do you want to install project dependencies? Yes
✔ Which package manager do you want to use? bun
✔ Cloning the template
✔ Installing project dependencies
🎉 Copied project files
Get started with: cd sample-hono-tailwindcss
```

Second, config tailwindcss. Ref: https://tailwindcss.com/docs/installation/using-vite

```sh
❯ bun add -D tailwindcss @tailwindcss/vite
bun add v1.2.3 (8c4d3ff8)

installed tailwindcss@4.0.17
installed @tailwindcss/vite@4.0.17

❯ edit vite.config.js
❯ edit src/renderer.tsx
```
