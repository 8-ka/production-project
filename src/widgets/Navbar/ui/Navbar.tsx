import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to='/' theme={AppLinkTheme.SECONDARY}>Main page</AppLink>
                <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>About page</AppLink>
            </div>
        </div>
  )
}
