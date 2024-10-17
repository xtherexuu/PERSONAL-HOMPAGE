import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";
import { flatRoutes } from "remix-flat-routes";

export default defineConfig({
  plugins: [
    remix({
      routes: async (defineRoutes) => {
        return flatRoutes("routes", defineRoutes);
      },
    }),
    netlifyPlugin(),
    tsconfigPaths(),
  ],
  ssr: {
    noExternal: ["remix-i18next"],
  },
});
