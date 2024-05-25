// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_THIRDWEB_CLIENT_ID: string;
  readonly VITE_THIRDWEB_SECRET_KEY: string;
  readonly VITE_LAND_CONTRACT: string;
  readonly VITE_MARKETPLACE_CONTRACT: string;
  readonly VITE_QUICKNODE_URL: string;
  readonly VITE_METAMASK_ADMIN_PRIVATE_KEY: string;
  readonly VITE_VRF_CONTRACT: string
  readonly VITE_PLAYER_CONTRACT: string
  // Add more variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
