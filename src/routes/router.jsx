import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Services from "../pages/Service";
import Contact from "../component/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main /> ,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        }
    ]
  },
]);

export default router;