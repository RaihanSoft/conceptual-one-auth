import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ContantUs from "../Pages/ContantUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [


            {
                path: "/home",
                element: <Home />,

            },
            {
                path: "/about",
                element: <About />,

            },            {
                path: "/contactUs",
                element: <ContantUs />,

            },
        ]
    },
]);

export default router