import React from 'react';
import {Adidas, adidasArr} from "./components/pages/Adidas";
import {Prices} from "./components/pages/Prices";
import {Puma, pumaArr} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from "./components/pages/_styles"
import {Model} from "./components/pages/Model";


function App() {
    return (
        <div>
            <S.HeaderWrapper><h1>HEADER</h1></S.HeaderWrapper>
            <S.BodyWrapper>
                <S.AllNavigationWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE1}>Adidas</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE2}>Puma</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PAGE3}>Abibas</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink>
                    </S.NavWrapper>
                    {/*<a href="page3">page 3 HTML</a>*/}
                    {/*<div><Link to={"https://yandex.com/"} target={"_blank"}>Yandex</Link></div>*/}
                </S.AllNavigationWrapper>
                <S.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.MODEL} element={<Model/>}/>
                        <Route path={PATH.PRICES} element={<Prices/>}/>
                        {/*<Route path="/adidas/missing" element={<ModelMissing />} />*/}
                        <Route path={"/*"} element={<Error404/>}/>
                        {/*<Route path="/*" element={<Navigate to={"/*"}/>}/>*/}

                        {/*<Route path={PATH.ERROR} element={<Error404/>}/>*/}
                        {/*<Route path="/*" element={<Navigate to={PATH.ERROR}/>}/>*/}
                    </Routes>
                </S.Content>
            </S.BodyWrapper>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}

export default App;
