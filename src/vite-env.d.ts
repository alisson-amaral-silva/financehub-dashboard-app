/// <reference types="vite/client" />

// Environment variables
interface ImportMetaEnv {
  readonly VITE_SHELL_URL: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
