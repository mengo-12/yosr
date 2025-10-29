'use client'
import './globals.css'
import Navbar from '../components/Navbar'
import FloatingContact from '../components/FloatingContact'
import { SettingsProvider } from '../context/SettingsContext'
import '../lib/i18n'

export default function RootLayout({ children }) {
    return (
        <html>
            <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-cairo">
                <SettingsProvider>
                    <Navbar />
                    {children}
                    <FloatingContact/>
                </SettingsProvider>
            </body>
        </html>
    )
}
