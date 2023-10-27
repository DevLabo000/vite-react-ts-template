# README

## React+Vite でプロジェクトを作成

```sh
npm create vite@latest
```

以下の設定を選択してインストール

```sh
✔ Project name: … vite-react-ts-template
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC
```

プロジェクトを移動し、npm インストール

```sh
cd vite-react-ts-template
npm install
```

ローカル環境を立ち上げる

```sh
npm run dev
```

以下の URL にアクセスをして、画面が開けば OK

```sh
  VITE v4.5.0  ready in 1052 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## tailwind css をインストール

インストール

```sh
npm install -D tailwindcss postcss autoprefixer
```

初期化

```sh
npx tailwindcss init -p
```

`tailwind.config.js`に以下を追記

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`index.css`の余計な css を削除後、以下を追記

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`App.tsx`を以下の内容に置き換え

```tsx
import './App.css'

function App() {
  return (
    <h1 className="text-3xl font-bold text-slate-700 underline">
      Hello world!
    </h1>
  )
}

export default App
```

ローカルのページを開いてスタイルが当たっていれば OK

## ESlint を設定

以下のコマンドを実行

```sh
npm init @eslint/config
```

以下の設定をする。

```sh
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a
style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-standard-with-typescript@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^6.4.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 || ^16.0.0  eslint-plugin-promise@^6.0.0 typescript@*
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
Installing eslint-plugin-react@latest, eslint-config-standard-with-typescript@latest, @typescript-eslint/eslint-plugin@^6.4.0, eslint@^8.0.1, eslint-plugin-import@^2.25.2, eslint-plugin-n@^15.0.0 || ^16.0.0 , eslint-plugin-promise@^6.0.0, typescript@*

added 108 packages, and audited 321 packages in 14s

123 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
A config file was generated, but the config file itself may not follow your linting rules.
Successfully created .eslintrc.cjs file in /home/wsl-user/app/vite-react-ts-template
```

eslint-plugin-tailwindcss をインストール

```sh
npm i -D eslint-plugin-tailwindcss
```

`.eslintrc.json`に以下の設定を追加

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:eslint-config-prettier",
    "plugin:react/jsx-runtime",
    "prettier"
  ],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "jsx-a11y",
    "react",
    "react-hooks",
    "tailwindcss"
  ],
  "rules": {
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

## prettier をインストール

```sh
npm install -D prettier prettier-plugin-tailwindcss eslint-config-prettier
```

.eslintrc.cjs を修正

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'tailwindcss'],
  rules: {},
}
```

.prettierrc.cjs を作成し以下の記述を追加

```js
/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
}

module.exports = config
```

## その他 package インストール

```sh
npm install react-router-dom
```

```sh
npm install react-toastify
```

```sh
npm install react-hook-form zod
```

```sh
npm i jotai
```

```sh
npm install react-icons
```

```sh
npm i -D rollup-plugin-visualizer
```

```js
  build: {
    rollupOptions: {
      plugins: [visualizer()],
    },
  },
```
