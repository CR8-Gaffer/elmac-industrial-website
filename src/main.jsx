import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// Self-hosted fonts (no CDN): Archivo variable (incl. width axis) for display
// and body; IBM Plex Mono for technical labels, tags and captions.
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-mono/700.css";
import "./styles.css";


// BrowserRouter with real paths: the build step copies index.html into each
// route directory (plus 404.html) so GitHub Pages serves every URL with a 200.
// basename comes from Vite's base — "/elmac-industrial-website/" on Pages today, "/" once
// the elmacindustrial.com.au is attached.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
