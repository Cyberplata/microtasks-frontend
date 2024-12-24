import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import {Adidas} from "../components/pages/Adidas";
import {Croses} from "../components/pages/Croses";
import {Error404} from "../components/pages/Error404";

// Новый синтаксис роутера в React Router v6.4
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
        element: <Croses/>,
        errorElement: <Error404/>,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas/>,
            },
        ]


    },

]);