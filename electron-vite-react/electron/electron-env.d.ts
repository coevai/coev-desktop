/// <reference types="vite-electron-plugin/electron-env" />

import { GetConfig } from "./main/api/config.get"
import { PutConfig } from "./main/api/config.put"
import { ListFiles } from "./main/api/files.list"
import { Look } from "./main/api/look"
import { Think } from "./main/api/think"

declare namespace NodeJS {
  interface ProcessEnv {
    VSCODE_DEBUG?: 'true'
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬ dist-electron
     * │ ├─┬ main
     * │ │ └── index.js    > Electron-Main
     * │ └─┬ preload
     * │   └── index.mjs   > Preload-Scripts
     * ├─┬ dist
     * │ └── index.html    > Electron-Renderer
     * ```
     */
    APP_ROOT: string
    /** /dist/ or /public/ */
    VITE_PUBLIC: string
  }
}

export interface CoevAPI {
  Think: typeof Think,
  GetConfig: typeof GetConfig,
  PutConfig: typeof PutConfig,
  ListFiles: typeof ListFiles,
  Look: typeof Look,
  OpenDirectory: typeof OpenDirectory
}

declare global {
  interface Window {
    CoevAPI: CoevAPI
  }
}
