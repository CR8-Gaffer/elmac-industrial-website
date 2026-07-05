import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages serves at https://<org>.github.io/elmac-industrial-website/ until a
// custom domain is attached. Absolute base gives BrowserRouter real paths
// (per-route index.html copies are generated in the build script).
// At custom-domain cutover: change base to "/".
export default defineConfig({
  base: "/elmac-industrial-website/",
  plugins: [react(), tailwindcss()],
});
