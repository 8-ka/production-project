
import { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss';
import { MainPage } from 'pages/MainPage';
import AboutPage from 'pages/AboutPage/ui/AboutPage';
import { classNames } from 'shared/lib/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to='/'>Main page</Link>
      <Link to='/about'>About page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App