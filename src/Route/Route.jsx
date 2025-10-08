import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";

const router = createBrowserRouter([
    {
    path: '/',
    Component: App,
    children: [
        {
            path: '/',
            Component: Home
        },
        {
            path: '/apps',
            Component: Apps
        },
        {
            path: '/installation',
            Component: Installation,
        }
    ]
  },
])

export default router;