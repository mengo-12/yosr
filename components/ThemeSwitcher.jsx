// 'use client'
// import { useSettings } from '../context/SettingsContext'
// import { Sun, Moon } from 'lucide-react'

// export default function ThemeSwitcher() {
//     const { dark, toggleDark } = useSettings()

//     return (
//         <button
//             onClick={toggleDark}
//             aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
//             className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 hover:scale-110 transition"
//         >
//             {dark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700 dark:text-gray-200" />}
//         </button>
//     )
// }



'use client'

import { useSettings } from '../context/SettingsContext'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeSwitcher() {
    const { dark, toggleDark } = useSettings()

    return (
        <button
            onClick={toggleDark}
            aria-label={dark ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن'}
            className={`relative w-12 h-12 flex items-center justify-center rounded-full shadow-md 
            transition-all duration-300 hover:scale-110 border border-gray-300 dark:border-slate-600
            ${dark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-[#0068B4] hover:bg-[#005a9e]'}`}
        >
            <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                    <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Sun className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Moon className="w-6 h-6 text-white" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    )
}
