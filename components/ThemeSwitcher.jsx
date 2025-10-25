'use client'
import { useSettings } from '../context/SettingsContext'
import { Sun, Moon } from 'lucide-react'

export default function ThemeSwitcher() {
    const { dark, toggleDark } = useSettings()

    return (
        <button
            onClick={toggleDark}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 hover:scale-110 transition"
        >
            {dark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700 dark:text-gray-200" />}
        </button>
    )
}
