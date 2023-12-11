import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Bootstrap Initialization
import "bootstrap/dist/css/bootstrap.min.css";
// Application Main Stylesheet
import "./css/app.css";
// Custom Classes
import "./css/index.css";
// Fonts
import "./css/fonts.css";
// Icons
import "./css/icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
