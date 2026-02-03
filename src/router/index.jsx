import About from "../pages/About";
import App from "../App";
import AboutHooks from "../pages/AboutHooks";
import AboutForm from "../pages/AboutForm";
import HookForm from "../pages/HookForm";
import Loading from "../pages/Loading";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "about", element: <About /> },
      { path: "aboutHooks", element: <AboutHooks /> },
      { path: "aboutForm", element: <AboutForm /> },
      { path: "HookForm", element: <HookForm /> },
      { path: "Loading", element: <Loading /> },
    ],
  },
];
export default routes;
