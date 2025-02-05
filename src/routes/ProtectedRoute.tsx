import React from "react";
import {Navigate} from "react-router-dom";
import {Error404} from "../components/pages/Error404";
import {PATH} from "./router";

type Props = {
   children: React.ReactNode; // принимает все дочерние элементы
};
export const ProtectedRoute = ({children}: Props) => {
   // Представим, что у нас есть хук, который проверяет, авторизован ли пользователь
   const useAuth = () => {
      // Здесь может быть логика проверки (например, токен в localStorage)
      return false; // Допустим, пользователь не авторизован
   };

   const isAuth = useAuth();

   return isAuth
      ? <>
         {children}
      </>
      : <Navigate to="/error"/>;
      // : <Navigate to={PATH.ERROR}/>
      // : <Error404/>;

};