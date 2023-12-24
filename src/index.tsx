import { BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./app/modules/home/homePage";
import reportWebVitals from "./reportWebVitals";
import { Layout } from "./app/components";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import "antd/dist/reset.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <Router>
      <Layout>
        <HomePage />
      </Layout>
    </Router>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
