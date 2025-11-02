// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'
// import { Menu, X } from 'lucide-react'
// import { useTranslation } from 'react-i18next'
// import LanguageSwitcher from './LanguageSwitcher'
// import ThemeSwitcher from './ThemeSwitcher'

// export default function Navbar() {
//     const { t } = useTranslation('translation')
//     const [menuOpen, setMenuOpen] = useState(false)

//     const links = [
//         { key: 'aboutUs', href: '#' },
//         { key: 'services', href: '#' },
//         { key: 'contact', href: '#' },
//         { key: 'projects', href: '#' }
//     ]

//     return (
//         <nav className="fixed w-full z-50 top-0 left-0 bg-black/30 backdrop-blur-md text-white border-b border-white/20">
//             <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//                 {/* شعار الشركة */}
//                 <div className="flex items-center gap-2">
//                     <Image src="/logo-1.png" alt="YOSR Logo" width={120} height={40} />
//                 </div>

//                 {/* روابط على الشاشات الكبيرة */}
//                 <ul className="hidden md:flex gap-8 font-semibold text-lg">
//                     {links.map((link, i) => (
//                         <li
//                             key={i}
//                             className="hover:text-[#0068B4] transition-colors duration-300 cursor-pointer"
//                         >
//                             {t(link.key)}
//                         </li>
//                     ))}
//                 </ul>

//                 {/* أدوات التحكم + زر القائمة */}
//                 <div className="flex items-center gap-4">
//                     <div className="hidden md:flex items-center gap-3">
//                         <LanguageSwitcher />
//                         <ThemeSwitcher />
//                     </div>

//                     {/* زر القائمة للجوال فقط */}
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="block md:hidden p-2 rounded border border-white/40 hover:bg-white hover:text-[#0068B4] transition-colors"
//                     >
//                         {menuOpen ? <X size={22} /> : <Menu size={22} />}
//                     </button>
//                 </div>
//             </div>

//             {/* القائمة الجانبية للجوال */}
//             {menuOpen && (
//                 <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10">
//                     <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-semibold">
//                         {links.map((link, i) => (
//                             <li
//                                 key={i}
//                                 className="hover:text-[#0068B4] transition-colors duration-300 cursor-pointer"
//                                 onClick={() => setMenuOpen(false)}
//                             >
//                                 {t(link.key)}
//                             </li>
//                         ))}
//                         <div className="flex items-center gap-4 pt-4 border-t border-white/20">
//                             <LanguageSwitcher />
//                             <ThemeSwitcher />
//                         </div>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     )
// }



// الكود الاعلى اصلي تصميم 1



// 'use client'
// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { Menu, X } from 'lucide-react'
// import { useTranslation } from 'react-i18next'
// import LanguageSwitcher from './LanguageSwitcher'
// import ThemeSwitcher from './ThemeSwitcher'

// export default function Navbar() {
//     const { t } = useTranslation('translation')
//     const [menuOpen, setMenuOpen] = useState(false)
//     const [scrolled, setScrolled] = useState(false)

//     const links = [
//         { key: 'aboutUs', href: '#' },
//         { key: 'services', href: '#' },
//         { key: 'contact', href: '#' },
//         { key: 'projects', href: '#' }
//     ]

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setScrolled(true)
//             } else {
//                 setScrolled(false)
//             }
//         }
//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     return (
//         <nav
//             className={`fixed w-full z-50 top-0 left-0 transition-colors duration-500 border-b ${scrolled
//                 ? 'bg-[#0068B4] border-white/20' // الخلفية عند scroll
//                 : 'bg-transparent border-transparent' // شفاف في البداية
//                 }`}
//         >
//             <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//                 {/* شعار الشركة */}
//                 <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2">
//                     <Image src="/logo-1.png" alt="YOSR Logo" width={120} height={40} />
//                 </div>

//                 {/* روابط على الشاشات الكبيرة */}
//                 <ul className="hidden md:flex gap-8 font-semibold text-lg">
//                     {links.map((link, i) => (
//                         <li
//                             key={i}
//                             className={`hover:text-white transition-colors duration-300 cursor-pointer ${scrolled ? 'text-white' : 'text-[#0068B4]'
//                                 }`}
//                         >
//                             {t(link.key)}
//                         </li>
//                     ))}
//                 </ul>

//                 {/* أدوات التحكم + زر القائمة */}
//                 <div className="flex items-center gap-4">
//                     <div className="hidden md:flex items-center gap-3">
//                         <LanguageSwitcher />
//                         <ThemeSwitcher />
//                     </div>

//                     {/* زر القائمة للجوال فقط */}
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="block md:hidden p-2 rounded border border-white/40 hover:bg-white hover:text-[#0068B4] transition-colors"
//                     >
//                         {menuOpen ? <X size={22} /> : <Menu size={22} />}
//                     </button>
//                 </div>
//             </div>

//             {/* القائمة الجانبية للجوال */}
//             {menuOpen && (
//                 <div className="md:hidden absolute top-full left-0 w-full bg-[#0068B4]/95 backdrop-blur-md border-t border-white/10">
//                     <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-semibold">
//                         {links.map((link, i) => (
//                             <li
//                                 key={i}
//                                 className="hover:text-white transition-colors duration-300 cursor-pointer"
//                                 onClick={() => setMenuOpen(false)}
//                             >
//                                 {t(link.key)}
//                             </li>
//                         ))}
//                         <div className="flex items-center gap-4 pt-4 border-t border-white/20">
//                             <LanguageSwitcher />
//                             <ThemeSwitcher />
//                         </div>
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     )
// }




'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
    const { t } = useTranslation('translation')
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    // الأقسام الداخلية في نفس الصفحة
    const links = [
        { key: 'aboutUs', href: 'aboutUs' },
        { key: 'services', href: 'services' },
        { key: 'projects', href: 'projects' },
        { key: 'contact', href: 'contact' },
    ]

    // رابط صفحة خارجية (صفحة الإدارة)
    const adminLink = { key: 'adminMessages', href: '/admin/messages' }

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // التحقق من حالة الإدمن من الكوكي
    useEffect(() => {
        const cookie = document.cookie.split('; ').find(row => row.startsWith('adminToken='))
        if (cookie && cookie.split('=')[1] === 'VALID_ADMIN') {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
    }, [])

    // تمرير ناعم للأقسام الداخلية
    const handleScrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setMenuOpen(false)
    }

    // تسجيل خروج الإدمن
    const handleLogout = () => {
        document.cookie = "adminToken=; Max-Age=0; path=/"
        setIsAdmin(false)
        window.location.href = '/'
    }

    return (
        <nav className={`fixed w-full z-50 top-0 left-0 transition-colors duration-500 border-b ${scrolled ? 'bg-[#0068B4] border-white/20' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* شعار الشركة */}
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2">
                    <Image src="/logo-1.png" alt="YOSR Logo" width={120} height={40} />
                </div>

                {/* روابط على الشاشات الكبيرة */}
                <ul className="hidden md:flex gap-8 font-semibold text-lg items-center">
                    {links.map((link, i) => (
                        <li key={i} onClick={() => handleScrollToSection(link.href)} className={`hover:text-white transition-colors duration-300 cursor-pointer ${scrolled ? 'text-white' : 'text-[#0068B4]'}`}>
                            {t(link.key)}
                        </li>
                    ))}

                    {/* زر الإدمن */}
                    {isAdmin ? (
                        <li>
                            <button
                                onClick={handleLogout}
                                className={`hover:text-white transition-colors duration-300 ${scrolled ? 'text-white' : 'text-[#0068B4]'}`}
                            >
                                {t('logout')} {/* استخدام المفتاح logout */}
                            </button>
                        </li>
                    ) : (
                        <li>
                            <a
                                href="/admin/login"
                                className={`hover:text-white transition-colors duration-300 ${scrolled ? 'text-white' : 'text-[#0068B4]'}`}
                            >
                                {t('login')} {/* استخدام المفتاح login */}
                            </a>
                        </li>
                    )}
                </ul>

                {/* أدوات التحكم + زر القائمة */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-3">
                        <LanguageSwitcher />
                        <ThemeSwitcher />
                    </div>

                    <button onClick={() => setMenuOpen(!menuOpen)} className="block md:hidden p-2 rounded border border-white/40 hover:bg-white hover:text-[#0068B4] transition-colors">
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* القائمة الجانبية للجوال */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0068B4]/95 backdrop-blur-md border-t border-white/10">
                    <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-semibold">
                        {links.map((link, i) => (
                            <li key={i} onClick={() => handleScrollToSection(link.href)} className="hover:text-white transition-colors duration-300 cursor-pointer">
                                {t(link.key)}
                            </li>
                        ))}

                        {isAdmin ? (
                            <li>
                                <button onClick={handleLogout} className="hover:text-white transition-colors duration-300">
                                    تسجيل الخروج
                                </button>
                            </li>
                        ) : (
                            <li>
                                <a href="/admin/login" className="hover:text-white transition-colors duration-300">
                                    تسجيل الدخول
                                </a>
                            </li>
                        )}

                        <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                            <LanguageSwitcher />
                            <ThemeSwitcher />
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    )
}
