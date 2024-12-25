import {Profiler} from "react";
import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import {Abibas} from "../components/pages/Abibas";
import {Adidas} from "../components/pages/Adidas";
import {Croses} from "../components/pages/Croses";
import {Error404} from "../components/pages/Error404";
import {Model} from "../components/pages/Model";
import {Prices} from "../components/pages/Prices";
import {Puma} from "../components/pages/Puma";

// Новый синтаксис RRD в React Router v6.4
// 1. Новый синтаксис через createBrowserRouter
// 2. Компонент Outlet - это точка входа для вложенных маршрутов.
// 3. Новые хуки useNavigation, useMatches, useRouteError для работы с навигацией, совпадениями и ошибками маршрута.
// 4. Работа с асинхронными функциями (Data API) в роутинге
// 5. Инкапсуляция логики через action и loader в роутинге
// 6. RouterProvider - новый контекст для роутера

export const PATH = {
    ADIDAS: "/adidas",
    PUMA: "/puma",
    ABIBAS: "/abibas",
    ERROR: "/page/error",
    MODEL: "/:model/:id",
    PRICES: "/prices",
    // MODEL_ADIDAS: "/:model/:id",
    // MODEL_PUMA: "/:model/:id",
} as const

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas/>,
            },
            {
                path: PATH.PUMA,
                element: <Puma/>,
            },
            {
                path: PATH.ABIBAS,
                element: <Abibas/>,
            },
            {
                path: PATH.PRICES,
                element: <Prices/>,
            },
            {
                path: PATH.MODEL,
                element: <Model/>,
            },
        ]
    },
]);