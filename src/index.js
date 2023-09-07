import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
const Home = React.lazy(() => import("./pages/Home"));
const Refs = React.lazy(() => import("./pages/Refs"));
const Hoc = React.lazy(() => import("./pages/Hoc"));
const ControlledComponents = React.lazy(() =>
  import("./pages/ControlledComponents")
);
const PureComponent = React.lazy(() => import("./pages/PureComponent"));
const Optimization = React.lazy(() => import("./pages/Optimization"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<>...</>}>
                <Home />
              </React.Suspense>
            }
          />

          <Route
            path="refs"
            element={
              <React.Suspense fallback={<>...</>}>
                <Refs />
              </React.Suspense>
            }
          />

          <Route
            path="hoc"
            element={
              <React.Suspense fallback={<>...</>}>
                <Hoc />
              </React.Suspense>
            }
          />

          <Route
            path="controlled-components"
            element={
              <React.Suspense fallback={<>...</>}>
                <ControlledComponents />
              </React.Suspense>
            }
          />

          <Route
            path="pure-component"
            element={
              <React.Suspense fallback={<>...</>}>
                <PureComponent />
              </React.Suspense>
            }
          />

          <Route
            path="optimization"
            element={
              <React.Suspense fallback={<>...</>}>
                <Optimization />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
