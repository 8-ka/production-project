import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

type SidebarProps = {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  console.log(collapsed);


  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Sidebar