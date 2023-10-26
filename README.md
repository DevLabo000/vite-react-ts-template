# プロジェクト作成

```sh
npm create vite@latest
✔ Project name: … vite-react-ts-template
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC

Scaffolding project in /home/wsl-user/app/vite-react-ts-template...

Done. Now run:

  cd vite-react-ts-template
  npm install
  npm run dev
```

```sh
npm install
```

```sh
npm run dev
```

### tailwind css をインストール

```sh
npm install -D tailwindcss postcss autoprefixer
```

```sh
npx tailwindcss init -p
```

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
