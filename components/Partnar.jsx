'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function PartnersSection() {
    const { t } = useTranslation('translation')

    const partners = [
        { id: 1, name: 'شركة أ', logo: '/images/part1.png' },
        { id: 2, name: 'شركة ب', logo: '/images/part2.png' },
        { id: 3, name: 'شركة ج', logo: '/images/part3.png' },
        { id: 4, name: 'شركة د', logo: '/images/part4.png' },
        { id: 5, name: 'شركة هـ', logo: '/images/part5.png' },
        { id: 6, name: 'شركة و', logo: '/images/part6.png' },
    ]

    return (
        <section
            id="partners"
            className="py-20 px-6 bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
        >
            {/* عنوان القسم */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-[#0068B4] dark:text-white"
                >
                    {t('partnersTitle', 'شركائنا')}
                </motion.h2>
                <div className="w-24 h-1 bg-[#0068B4] mx-auto rounded-full mt-4"></div>
            </div>

            {/* شبكة الشركاء */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                {partners.map((partner, i) => (
                    <motion.div
                        key={partner.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="group relative flex items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                    >
                        <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={120}
                            height={120}
                            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
