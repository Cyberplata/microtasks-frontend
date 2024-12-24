import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";

export const PATH = {
    PAGE1: "/adidas",
    PAGE2: "/puma",
    PAGE3: "/abibas",
    ERROR: "/page/error",
    MODEL: "/:model/:id",
    PRICES: "/prices",
    // MODEL_ADIDAS: "/:model/:id",
    // MODEL_PUMA: "/:model/:id",
} as const

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: "contact",
                element: <Contact />,
            },
        ]


    },

]);