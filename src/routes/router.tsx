import * as React from "react";
import {createBrowserRouter, Navigate, Outlet, RouteObject, useLocation,} from "react-router-dom";
import App from "../App";
import {Abibas} from "../components/pages/Abibas";
import {Adidas} from "../components/pages/Adidas";
import {Error404} from "../components/pages/Error404";
import {Login} from "../components/pages/Login";
import {Model} from "../components/pages/Model";
import {Prices} from "../components/pages/Prices";
import {ProtectedPage} from "../components/pages/ProtectedPage";
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
   MODEL: "/:model/:id",
   PRICES: "/prices",
   PROTECTED: "/protected",
   ERROR: "*",
   LOGIN: "/login",
   DEFAULT: "/", // По умолчанию открывается Adidas
} as const

const publicRoutes: RouteObject[] = [
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
   {
      path: PATH.ERROR,
      element: <Error404/>,
   },
   {
      path: PATH.LOGIN,
      element: <Login/>
   },
   {
      path: PATH.DEFAULT,
      element: <Adidas/>
   },
]

const privateRoutes: RouteObject[] = [
   {
      path: PATH.PROTECTED,
      element: <ProtectedPage/>
   },
]

export const PrivateRoutes = () => {
   const isAuth = false
   const location = useLocation();

   // Если true, то он отображает privateRoutes
   // Если false - не авторизован -> то выпрыгивает наверх в /login и отображает Login
   return isAuth ? <Outlet/> : <Navigate to="/login" state={{ from: location }} replace />; // <Outlet /> — это место, где отобразятся вложенные маршруты (они передаются через children).
};

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App/>,
      errorElement: <Error404/>,
      children: [ // Что за вложенные маршруты тут? - publicRoutes и privateRoutes
         {
            element: <PrivateRoutes/>, // Контейнер для защищённых маршрутов. Включайся вот этот компонент, если бы не было true/false (isAuth), то он постоянно включал наш массив (privateRoutes)
            children: privateRoutes, // Вложенные private маршруты (например, `/protected`). Вот здесь будут вложенные маршруты, если isAuth = true
         },
         ...publicRoutes,
      ]
   },
]);