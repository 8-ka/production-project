
import { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { MainPageLazy } from "./components/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./components/AboutPage/AboutPage.lazy";
import { useTheme } from './theme/useTheme';
import './styles/index.scss';
import { classNames } from './helpers/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to='/'>Main page</Link>
      <Link to='/about'>About page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageLazy />} />
          <Route path='/about' element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App