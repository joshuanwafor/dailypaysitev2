/// <reference types="react" />

// Fallback for IDEs that cannot resolve React types (e.g. with Yarn PnP)
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: Record<string, unknown>;
  }
}

