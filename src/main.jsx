import React from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";

function App() {
  return <p className="react-loading">Loading portfolio...</p>;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
