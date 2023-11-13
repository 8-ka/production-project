import { classNames } from "shared/lib/classNames/classNames"
import styles from './PageLoader.module.scss'
import Loader from "shared/ui/Loader/Loader"

const PageLoader = () => {
  return (
    <div className={classNames(styles['page-loader'])}>
      <Loader />
    </div>
  )
}

export default PageLoader