'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Facebook, Instagram, Linkedin, Phone } from 'lucide-react'

export default function Footer() {
    const { t } = useTranslation('translation')

    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0068B4] text-white pt-16 pb-6 px-6 md:px-12"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-start">
                {/* عن الشركة */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">{t('aboutTitle')}</h3>
                    <p className="text-sm leading-relaxed opacity-90">
                        {t('aboutDesc')}
                    </p>
                </div>

                {/* روابط سريعة */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">{t('quickLinks')}</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li className="hover:translate-x-1 transition-transform cursor-pointer">{t('linkAbout')}</li>
                        <li className="hover:translate-x-1 transition-transform cursor-pointer">{t('linkServices')}</li>
                        <li className="hover:translate-x-1 transition-transform cursor-pointer">{t('linkProjects')}</li>
                        <li className="hover:translate-x-1 transition-transform cursor-pointer">{t('linkContact')}</li>
                    </ul>
                </div>

                {/* تواصل معنا */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">{t('contactUs')}</h3>
                    <ul className="text-sm space-y-2 opacity-90">
                        <li>{t('phone')}: 920004000</li>
                        <li>{t('email')}: info@yosr.sa</li>
                        <li>{t('address')}</li>
                    </ul>

                    {/* أيقونات التواصل */}
                    <div className="flex justify-center md:justify-start gap-4 mt-5">
                        <a href="https://facebook.com" target="_blank" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                            <Facebook size={18} />
                        </a>
                        <a href="https://instagram.com" target="_blank" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="https://wa.me/966500000000" target="_blank" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                            <Phone size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* حقوق النشر */}
            <div className="mt-10 pt-4 border-t border-white/20 text-sm text-center opacity-80">
                {t('rights', { year: new Date().getFullYear() })}
            </div>
        </motion.footer>
    )
}
