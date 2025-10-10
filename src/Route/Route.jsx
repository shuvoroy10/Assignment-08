import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppsDetails from "../Components/AppsDetails/AppsDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    Component: App,
    children: [
        {
            index: true,
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
        },
        
        
    ]
  },
])

export default router;