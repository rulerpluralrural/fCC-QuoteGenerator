import React from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from "react";
import { QuoteGenerator } from "./QuoteGenerator";
import "./index.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<QuoteGenerator />);
