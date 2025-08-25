import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import TagManager from "react-gtm-module";
import useGTMPageView from "./components/useGTMPageView"; // updated path

// Initialize GTM
const tagManagerArgs = {
  gtmId: "GTM-MHPDGLH", // Replace with your actual GTM ID
};
TagManager.initialize(tagManagerArgs);

function Root() {
  useGTMPageView(); // Tracks pageviews on route changes
  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Root />
  </HashRouter>
);
