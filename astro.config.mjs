import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { sidebarUser } from "./src/core/config/sidebar.ts";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: sidebarUser,
    }),
  ],
  output: "server",
  adapter: vercel(),
});
