import React from "react"
import ReactDOM from "react-dom"
//import { createRoot } from 'react-dom/client';
import {render} from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

const root = document.getElementById("root")
render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  root
);