// import type { Config } from "vike/types";
// import vikeReact from "vike-react/config";

// // Default config (can be overridden by pages)
// // https://vike.dev/config

// export default {
//   // https://vike.dev/head-tags
//   title: "My Vike App",
//   description: "Demo showcasing Vike",

//   extends: [vikeReact],
// } satisfies Config;

import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  title: "Naga — Backend & Data Engineer",
  description: "Backend & Data Engineer portfolio",
  extends: [vikeReact],

  prerender: true,
} satisfies Config;
