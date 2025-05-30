/// <reference types="vite/client" />

// Enhance TypeScript's built-in typings.
import '@total-typescript/ts-reset';

import type {
  HydrogenContext,
  HydrogenSessionData,
  HydrogenEnv,
} from '@shopify/hydrogen';
import type {createAppLoadContext} from '~/lib/context';

declare global {
  /**
   * A global `process` object is only available during build to access NODE_ENV.
   */
  const process: {
    env: {
      NODE_ENV: 'production' | 'development';
      SHOPIFY_WEBHOOK_SECRET?: string;
    };
  };

  interface Env extends HydrogenEnv {
    // declare additional Env parameter use in the fetch handler and Remix loader context here
  }
}

declare module '@netlify/remix-runtime' {
  interface AppLoadContext
    extends Awaited<ReturnType<typeof createAppLoadContext>> {
    // to change context type, change the return of createAppLoadContext() instead
  }

  interface SessionData extends HydrogenSessionData {
    // declare local additions to the Remix session data here
  }
}
