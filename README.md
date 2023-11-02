# README

- [README](#readme)
  - [OverView](#overview)
    - [Demo Page](#demo-page)
    - [Packages](#packages)
    - [Environment](#environment)
    - [SetUp](#setup)
  - [構築メモ](#構築メモ)
    - [React+Vite でプロジェクトを作成](#reactvite-でプロジェクトを作成)
    - [tailwind css をインストール](#tailwind-css-をインストール)
    - [ESlint を設定](#eslint-を設定)
    - [prettier をインストール](#prettier-をインストール)

## OverView

Vite + React + TypeScriptの簡易テンプレート

### Demo Page

🎉 <https://vite-react-ts-template.vercel.app/>

### Packages

| パッケージ名      | 目的           | 備考                 |
| :---------------- | :------------- | :------------------- |
| tailwind css      | スタイリング   | cssユーティリティ    |
| react-toastify    | トースト       | 簡易的な通知など     |
| sweetalert2       | ダイアログ     | 確認が必要な通知など |
| react-icons       | アイコン       |                      |
| jotai             | 状態管理       |                      |
| react-hook-form   | フォーム管理   |                      |
| @headlessui/react | コンポーネント |                      |
| zod               | バリデーション |                      |
| Vite              | バンドル       |                      |
| swr               | 非同期処理     | api通信など          |
| nookies           | cookie管理     |                      |

### Environment

- Ubuntu 21.04@WSL2
- node 16.14.2
- npm 9.8.1

### SetUp

```sh
git clone https://github.com/DevLabo000/vite-react-ts-template.git
cd vite-react-ts-template
npm install
npm run dev
```

## 構築メモ

### React+Vite でプロジェクトを作成

[公式ページ](https://vitejs.dev/guide/)を参考にインストール

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

### tailwind css をインストール

[公式ページ](https://tailwindcss.com/docs/installation)を参考にインストール

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
};
```

`index.css`の余計な css を削除後、以下を追記

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`App.tsx`を以下の内容に置き換え

```tsx
import './App.css';

function App() {
  return (
    <h1 className="text-3xl font-bold text-slate-700 underline">
      Hello world!
    </h1>
  );
}

export default App;
```

`npm run dev`でローカルのページを開いてスタイルが当たっていれば OK

### ESlint を設定

以下のコマンドを実行

```sh
npm init @eslint/config
```

いろいろ聞かれるので以下の選択を行う。

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

他のESLintのパッケージをインストール

```sh
npm i -D eslint-plugin-tailwindcss eslint-plugin-unused-imports eslint-plugin-import eslint-config-airbnb eslint-config-airbnb-typescript
```

細かい設定は[.eslintrc.json](https://github.com/DevLabo000/vite-react-ts-template/blob/main/.eslintrc.json)を参照

### prettier をインストール

```sh
npm install -D prettier prettier-plugin-tailwindcss eslint-config-prettier
```

細かい設定は[.prettierrc.cjs](https://github.com/DevLabo000/vite-react-ts-template/blob/main/.prettierrc.cjs)を参照
