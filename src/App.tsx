
import { Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MainPageLazy } from "./components/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./components/AboutPage/AboutPage.lazy";
import './index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Link to='/'>Main page</Link>
      <Link to='/about'>About page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageLazy />} />
          <Route path='/about' element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App