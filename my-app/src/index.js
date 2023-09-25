import React from "react";
import { createRoot } from "react-dom/client";
import { QuoteGenerator } from "./QuoteGeneratorUI";
import "./index.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

window.onload = () => {
	root.render(<QuoteGenerator />);
};
