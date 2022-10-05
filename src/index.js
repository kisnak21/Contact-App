import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import ContactApps from "./components/ContactApp";

//styling
import "../src/styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContactApps />
  </BrowserRouter>
);