'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n' // المسار الذي فيه ملف i18n.js في مشروعك
// إذا عندك ملف i18n في lib: استخدم '../lib/i18n' حسب مشروعك

export default function LanguageSwitcher({ syncWithSettings }) {
    // syncWithSettings: دالة اختيارية (setLang) لربط LanguageSwitcher مع SettingsContext إن رغبت
    const { t } = useTranslation() // يمكنك تمرير namespace إن استخدمت واحداً
    const [currentLang, setCurrentLang] = useState(typeof window !== 'undefined' ? (i18n.language || 'ar') : 'ar')

    useEffect(() => {
        // مراقبة تغيّر اللغة من أماكن أخرى
        const handle = () => setCurrentLang(i18n.language || 'ar')
        i18n.on('languageChanged', handle)
        return () => i18n.off('languageChanged', handle)
    }, [])

    const changeLanguage = (lng) => {
        if (!lng) return
        i18n.changeLanguage(lng) // يغيّر لغة i18next ويخزن في cache (cookie/localStorage) حسب config
            .then(() => {
                setCurrentLang(lng)
                if (typeof document !== 'undefined') {
                    document.documentElement.lang = lng
                    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
                }
                // إذا أردت مزامنة مع SettingsContext (اختياري)، مرّر دالة syncWithSettings
                if (typeof syncWithSettings === 'function') syncWithSettings(lng)
            })
            .catch((err) => {
                console.error('i18n changeLanguage error', err)
            })
    }

    return (
        <div className="flex gap-2 items-center">
            <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => changeLanguage('ar')}
                aria-label={t ? t('switchToArabic') || 'عربي' : 'عربي'}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors ${currentLang === 'ar' ? 'bg-primary text-white' : 'bg-slate-700 text-white/90'}`}
            >
                🇸🇦
            </motion.button>

            <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => changeLanguage('en')}
                aria-label={t ? t('switchToEnglish') || 'English' : 'English'}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors ${currentLang === 'en' ? 'bg-primary text-white' : 'bg-slate-700 text-white/90'}`}
            >
                🇬🇧
            </motion.button>
        </div>
    )
}
