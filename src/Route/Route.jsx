import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppsDetails from "../Components/AppsDetails/AppsDetails";

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
        },
        {
            path: '/apps/:id',
            Component: AppsDetails,
        }
    ]
  },
])

export default router;