import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function handleResponsiveZoom() {
    const width = window.innerWidth;
    const html = document.documentElement;

    if (width < 1920) {
        // @ts-ignore
        html.style.zoom = "0.9"; // Gunakan desimal agar lebih mudah dihitung
        // Set CSS Variable untuk digunakan di Tailwind
        html.style.setProperty('--app-zoom', '0.9');
    } else {
        // @ts-ignore
        html.style.zoom = "1";
        html.style.setProperty('--app-zoom', '1');
    }
}

// Jalankan saat startup
handleResponsiveZoom();

// Jalankan saat window di-resize
window.addEventListener("resize", handleResponsiveZoom);

createRoot(document.getElementById("root")!).render(<App />);