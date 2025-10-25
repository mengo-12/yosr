'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Building2, ShieldCheck, Lightbulb } from 'lucide-react'

export default function About() {
    const { t } = useTranslation('translation')

    const cards = [
        {
            icon: <Building2 size={40} className="text-[#0068B4]" />,
            titleKey: 'aboutCard1Title',
            descKey: 'aboutCard1Desc',
            image: '/images/about1.jpg',
        },
        {
            icon: <Lightbulb size={40} className="text-[#0068B4]" />,
            titleKey: 'aboutCard2Title',
            descKey: 'aboutCard2Desc',
            image: '/images/about2.jpg',
        },
        {
            icon: <ShieldCheck size={40} className="text-[#0068B4]" />,
            titleKey: 'aboutCard3Title',
            descKey: 'aboutCard3Desc',
            image: '/images/about3.jpg',
        },
    ]

    return (
        <section
            id="about"
            className="relative py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6 text-[#0068B4] dark:text-white"
                >
                    {t('aboutUsTitle')}
                </motion.h2>

                <div className="w-24 h-1 bg-[#0068B4] mx-auto mb-12 rounded-full"></div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-16 max-w-3xl mx-auto"
                >
                    {t('aboutUsDescription')}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                        >
                            {/* صورة البطاقة */}
                            <div className="relative w-full h-52 overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={t(card.titleKey)}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-50 transition-opacity"></div>
                            </div>

                            {/* محتوى البطاقة */}
                            <div className="p-6 text-center">
                                <div className="flex justify-center mb-4">{card.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                                    {t(card.titleKey)}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">{t(card.descKey)}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
