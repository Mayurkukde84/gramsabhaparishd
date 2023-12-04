import React from 'react'
import { useTranslation } from 'react-i18next'

const Pages = () => {
    const {t} = useTranslation()
  return (
    <div>{t('page')}</div>
  )
}

export default Pages