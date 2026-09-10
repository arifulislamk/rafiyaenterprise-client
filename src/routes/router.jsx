import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Services from "../pages/Service";
import Contact from "../component/Contact";
import AccountOpen from "../pages/AccountOpen";

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
        },
        {
          path: "/AccountOpen",
          element: <AccountOpen />,
        }
    ]
  },
]);

export default router;