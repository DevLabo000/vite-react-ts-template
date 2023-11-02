/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_DISPLAY_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_COMMIT_VERSION: string;
  readonly VITE_APP_BUILD_DATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
