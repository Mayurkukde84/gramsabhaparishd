import React from 'react'
import { useTranslation } from 'react-i18next'
const Account = () => {
    const {t} = useTranslation()
    
  return (
    <div >{t('account')}</div>
  )
}

export default Account