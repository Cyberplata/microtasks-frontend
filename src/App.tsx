import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Link, Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import styled from "styled-components";
import {S} from "./components/pages/_styles"

function App() {
    return (
        <div>
            <S.HeaderWrapper><h1>HEADER</h1></S.HeaderWrapper>
            <S.BodyWrapper>
                <S.AllNavigationWrapper>
                    <S.NavWrapper>
                        <NavLink to={"/page1"}>Page1</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={"/page2"}>Page2</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={"/page3"}>Page3</NavLink>
                    </S.NavWrapper>
                    <a href="page3">page 3 HTML</a>
                    {/*<div><Link to={"https://yandex.com/"} target={"_blank"}>Yandex</Link></div>*/}
                </S.AllNavigationWrapper>
                <S.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/page1"}/>}/>
                        {/*<Route path="/" element={<Navigate to={"/page1"}/>}/>*/}

                        <Route path="/page1" element={<PageOne/>}/>
                        <Route path="/page2" element={<PageTwo/>}/>
                        <Route path="/page3" element={<PageThree/>}/>

                        <Route path="/page/error" element={<Error404/>}/>
                        <Route path="/*" element={<Navigate to={"/page/error"}/>}/>
                    </Routes>
                </S.Content>
            </S.BodyWrapper>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}

export default App;
