import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Loader.module.scss'

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={classNames(styles['lds-grid'], {}, [className])}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  )
}

export default Loader