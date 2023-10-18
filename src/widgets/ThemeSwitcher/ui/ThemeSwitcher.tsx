import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import ThemeIcon from 'shared/assets/icons/dark-mode.svg'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps): JSX.Element => {
  const { toggleTheme } = useTheme()

  return (
    <Button className={classNames(styles.button, {}, [className])} onClick={toggleTheme} theme={ThemeButton.CLEAR}><ThemeIcon className={styles['theme-icon']} /></Button>
  )
}

export default ThemeSwitcher
