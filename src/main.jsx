import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { RouterProvider, createHashRouter } from "react-router";
import routes from "./router/index.jsx";

const router = createHashRouter(routes);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
