// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_THIRDWEB_CLIENT_ID: string;
  readonly VITE_THIRDWEB_SECRET_KEY: string;
  readonly VITE_LAND_CONTRACT: string;
  readonly VITE_QUICKNODE_URL: string;
  // Add more variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}