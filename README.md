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
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## ESlint

```sh
npm init @eslint/config
```

```sh
Need to install the following packages:
@eslint/create-config@0.4.6
Ok to proceed? (y) y
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

### prettier をインストール

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
