import React from 'react';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import {S} from "./components/pages/_styles"
import {PATH} from "./routes/router";

function App() {
   const navigate = useNavigate();
   const navigateHandler = () => {
      if (window.history.length > 1) {
         navigate(-1);
      } else {
         navigate(PATH.ADIDAS); // или другая fallback-страница
      }
   }

   return (
      <div>
         <S.HeaderWrapper><h1>HEADER</h1></S.HeaderWrapper>
         <S.BodyWrapper>
            <S.AllNavigationWrapper>
               <S.NavWrapper>
                  <NavLink to={PATH.ADIDAS}>Adidas</NavLink>
               </S.NavWrapper>
               <S.NavWrapper>
                  <NavLink to={PATH.PUMA}>Puma</NavLink>
               </S.NavWrapper>
               <S.NavWrapper>
                  <NavLink to={PATH.ABIBAS}>Abibas</NavLink>
               </S.NavWrapper>
               <S.NavWrapper>
                  <NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink>
               </S.NavWrapper>
               <S.NavWrapper>
                  <NavLink to={PATH.PROTECTED}>Protected page</NavLink>
               </S.NavWrapper>
               {/*<a href="page3">page 3 HTML</a>*/}
               {/*<div><Link to={"https://yandex.com/"} target={"_blank"}>Yandex</Link></div>*/}
            </S.AllNavigationWrapper>
            <S.Content>
               <S.HorizontalNavigation>
                  {/*<S.LinkLikeButton>*/}
                  {/*   <NavLink to={PATH.ADIDAS}>ГЛАВНАЯ СТРАНИЦА (ADIDAS)</NavLink>*/}
                  {/*</S.LinkLikeButton>*/}
                  <S.LinkLikeButton as={NavLink} to={PATH.ADIDAS}>
                     ГЛАВНАЯ СТРАНИЦА (ADIDAS)
                  </S.LinkLikeButton>
                  <S.ButtonLikeLink onClick={navigateHandler} role="link">НАЗАД</S.ButtonLikeLink>
               </S.HorizontalNavigation>
               <Outlet/>
               {/*<Routes>*/}
               {/*    <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>*/}

               {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
               {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
               {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
               {/*    <Route path={PATH.MODEL} element={<Model/>}/>*/}
               {/*    <Route path={PATH.PRICES} element={<Prices/>}/>*/}
               {/*    /!*<Route path="/adidas/missing" element={<ModelMissing />} />*!/*/}
               {/*    <Route path={"/*"} element={<Adidas/>}/>*/}
               {/*    /!*<Route path="/*" element={<Navigate to={"/*"}/>}/>*!/*/}

               {/*    /!*<Route path={PATH.ERROR} element={<Error404/>}/>*!/*/}
               {/*    /!*<Route path="/*" element={<Navigate to={PATH.ERROR}/>}/>*!/*/}
               {/*</Routes>*/}
            </S.Content>
         </S.BodyWrapper>
         <S.Footer>abibas 2023</S.Footer>
      </div>
   );
}

export default App;
