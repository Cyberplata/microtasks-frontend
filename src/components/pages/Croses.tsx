import React from "react";
import {Outlet} from "react-router-dom";

export const Croses = () => {
    return (
        <div>
            <div>HEADERRRR</div>
            <Outlet />
            <div>FOOTER</div>
        </div>
    );
};

// Приведи пример с асинхронным роутингом? (например, при помощи React.lazy и Suspense)
// App.tsx
// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//
// // Асинхронная загрузка компонентов
// const Home = React.lazy(() => import('./pages/Home'));
// const About = React.lazy(() => import('./pages/About'));
// const Contact = React.lazy(() => import('./pages/Contact'));
//
// const App: React.FC = () => {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/about">About</Link></li>
//                         <li><Link to="/contact">Contact</Link></li>
//                     </ul>
//                 </nav>
//
//                 {/* Обёртка Suspense для загрузки */}
//                 <Suspense fallback={<div>Loading...</div>}>
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/about" element={<About />} />
//                         <Route path="/contact" element={<Contact />} />
//                     </Routes>
//                 </Suspense>
//             </div>
//         </Router>
//     );
// };
//
// export default App;

// useNavigation, useMatches, useRouteError - это хуки в новом роутере, которые позволяют получить доступ к навигации, совпадениям и ошибкам маршрута.