// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { useTranslation } from 'react-i18next'

// export default function Services() {
//     const { t } = useTranslation('translation')

//     const services = [
//         { titleKey: 'fireSystems', descKey: 'fireSystemsDesc', image: '/images/isawred-unsplash.jpg' },
//         { titleKey: 'earlyAlarm', descKey: 'earlyAlarmDesc', image: '/images/unk.jpg' },
//         { titleKey: 'fireEquip', descKey: 'fireEquipDesc', image: '/images/Fireexting.jpg' },
//         { titleKey: 'fireMaterials', descKey: 'fireMaterialsDesc', image: '/images/yavuz-kosar.jpg' },
//         { titleKey: 'safetyTools', descKey: 'safetyToolsDesc', image: '/images/safety.png' },
//         { titleKey: 'maintenance', descKey: 'maintenanceDesc', image: '/images/PeriodicMaintenance.jpg' },
//     ]

//     return (
//         <section
//             id="services"
//             className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
//         >
//             <div className="max-w-7xl mx-auto text-center mb-16">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="text-4xl md:text-5xl font-bold text-[#0068B4] dark:text-white"
//                 >
//                     {t('servicesTitle', 'خدماتنا')}
//                 </motion.h2>
//                 <div className="w-24 h-1 bg-[#0068B4] mx-auto rounded-full mt-4"></div>
//             </div>

//             <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
//                 {services.map((service, i) => (
//                     <motion.div
//                         key={service.titleKey}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: i * 0.1 }}
//                         className="relative w-full md:w-[30%] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-transparent border border-gray-200 dark:border-gray-700"
//                     >
//                         {/* صورة الخدمة */}
//                         <div className="relative h-48 w-full">
//                             <Image
//                                 src={service.image}
//                                 alt={t(service.titleKey)}
//                                 fill
//                                 style={{ objectFit: 'cover' }}
//                                 className="group-hover:scale-110 transition-transform duration-500"
//                             />
//                             <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-30 transition-opacity"></div>
//                         </div>

//                         {/* محتوى الكارد */}
//                         <div className="p-6 text-center">
//                             <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{t(service.titleKey)}</h3>
//                             <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
//                                 {t(service.descKey)}
//                             </p>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     )
// }


// تصميم 1


'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Services() {
    const { t } = useTranslation('translation')

    const services = [
        { titleKey: 'fireSystems', descKey: 'fireSystemsDesc', image: '/images/isawred-unsplash.jpg' },
        { titleKey: 'earlyAlarm', descKey: 'earlyAlarmDesc', image: '/images/unk.jpg' },
        { titleKey: 'fireEquip', descKey: 'fireEquipDesc', image: '/images/Fireexting.jpg' },
        { titleKey: 'fireMaterials', descKey: 'fireMaterialsDesc', image: '/images/yavuz-kosar.jpg' },
        { titleKey: 'safetyTools', descKey: 'safetyToolsDesc', image: '/images/safety.png' },
        { titleKey: 'maintenance', descKey: 'maintenanceDesc', image: '/images/PeriodicMaintenance.jpg' },
    ]

    return (
        <section
            id="services"
            className="
                py-20 px-6 
                bg-gradient-to-b from-white via-gray-100 to-gray-200 
                dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-800
                text-gray-900 dark:text-gray-100 
                transition-colors duration-500
            "
        >
            <div className="max-w-7xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-[#0068B4] dark:text-white"
                >
                    {t('servicesTitle', 'خدماتنا')}
                </motion.h2>
                <div className="w-24 h-1 bg-[#0068B4] mx-auto rounded-full mt-4"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, i) => {
                    const isLargeCard = i === Math.floor(services.length / 2)

                    return (
                        <motion.div
                            key={service.titleKey}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            className={`
                                group relative rounded-3xl overflow-hidden shadow-lg
                                transition-all duration-500
                                ${isLargeCard ? 'lg:col-span-2 lg:row-span-2 lg:h-[500px]' : 'h-[300px] md:h-[340px]'}
                            `}
                        >
                            {/* صورة الخدمة */}
                            <div className="relative w-full h-full">
                                <Image
                                    src={service.image}
                                    alt={t(service.titleKey)}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay يظهر عند hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className={`text-2xl font-semibold text-white mb-2 ${isLargeCard ? 'text-3xl' : ''}`}>
                                        {t(service.titleKey)}
                                    </h3>
                                    <p className="text-white text-sm md:text-base leading-relaxed max-w-xs md:max-w-md">
                                        {t(service.descKey)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
