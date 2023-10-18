import { type FC } from 'react'
import styles from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Link, type LinkProps } from 'react-router-dom'

export const enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

type AppLinkProps = LinkProps & {
  className?: string
  theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
        <Link
            to={to}
            className={classNames(styles.applink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
  )
}

export default AppLink
