// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CLIENT_ID: string;
    readonly VITE_CLIENT_SECRET: string;
    // Add more variables here as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  