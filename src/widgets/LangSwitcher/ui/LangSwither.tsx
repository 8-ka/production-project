import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import style from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface LangSwitcherProps {
  className?: string
}

const LangSwither = ({ className }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()
  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(style.button, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={onToggle}
    >
      {t('language')}
    </Button>
  )
}

export default LangSwither
