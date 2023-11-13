import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotPageFound.module.scss'

const NotFoundPage = ({ className }: { className?: string}) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(styles['not-found-page'], {}, [className])}>
      {t('not_found_page')}
    </div>
  )
}

export default NotFoundPage;