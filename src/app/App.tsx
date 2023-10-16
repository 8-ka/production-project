
import { Link } from "react-router-dom";
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App