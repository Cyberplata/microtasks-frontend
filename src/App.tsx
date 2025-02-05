import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {S} from "./components/pages/_styles"
import {PATH} from "./routes/router";

// export const PATH = {
//     PAGE1: "/adidas",
//     PAGE2: "/puma",
//     PAGE3: "/abibas",
//     ERROR: "/page/error",
//     MODEL: "/:model/:id",
//     PRICES: "/prices",
//     // MODEL_ADIDAS: "/:model/:id",
//     // MODEL_PUMA: "/:model/:id",
// } as const

function App() {
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
                        <NavLink to={PATH.PROTECTEDPAGE}>Protected page</NavLink>
                    </S.NavWrapper>
                    {/*<a href="page3">page 3 HTML</a>*/}
                    {/*<div><Link to={"https://yandex.com/"} target={"_blank"}>Yandex</Link></div>*/}
                </S.AllNavigationWrapper>
                <S.Content>
                    <Outlet />
                    {/*<Routes>*/}
                    {/*    <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>*/}

                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*    <Route path={PATH.MODEL} element={<Model/>}/>*/}
                    {/*    <Route path={PATH.PRICES} element={<Prices/>}/>*/}
                    {/*    /!*<Route path="/adidas/missing" element={<ModelMissing />} />*!/*/}
                    {/*    <Route path={"/*"} element={<Error404/>}/>*/}
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
