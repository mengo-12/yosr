'use client'
import { createContext, useState, useContext, useEffect } from 'react'

const SettingsContext = createContext()

export function SettingsProvider({ children }) {
    const [dark, setDark] = useState(false)
    const [lang, setLang] = useState('ar')

    // Dark Mode: تطبيق على كامل الصفحة
    useEffect(() => {
        if (dark) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
    }, [dark])

    // Language: تغيير اتجاه الصفحة
    useEffect(() => {
        document.documentElement.lang = lang
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    }, [lang])

    const toggleDark = () => setDark(!dark)
    const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar')

    return (
        <SettingsContext.Provider value={{ dark, toggleDark, lang, toggleLang }}>
            {children}
        </SettingsContext.Provider>
    )
}

export function useSettings() {
    return useContext(SettingsContext)
}
