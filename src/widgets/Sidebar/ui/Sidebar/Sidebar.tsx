import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwither } from 'widgets/LangSwitcher'
import styles from './Sidebar.module.scss'
import Button from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  console.log(collapsed)
  
  const onToggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <Button onClick={onToggle}>toggle</Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwither />
      </div>
    </div>
  )
}

export default Sidebar
