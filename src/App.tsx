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
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
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
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/page1"}/>}/>
                        {/*<Route path="/" element={<Navigate to={"/page1"}/>}/>*/}

                        <Route path="/page1" element={<PageOne/>}/>
                        <Route path="/page2" element={<PageTwo/>}/>
                        <Route path="/page3" element={<PageThree/>}/>

                        <Route path="/page/error" element={<Error404/>}/>
                        <Route path="/*" element={<Navigate to={"/page/error"}/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;
