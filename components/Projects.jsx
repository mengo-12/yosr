// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { useTranslation } from 'react-i18next'
// import { Trophy, Users, Briefcase, Star } from 'lucide-react'

// export default function Achievements() {
//     const { t } = useTranslation('translation')

//     const achievements = [
//         {
//             icon: <Trophy size={36} className="text-[#0068B4]" />,
//             titleKey: 'projectsCompleted',
//             descKey: 'projectsCompletedDesc'
//         },
//         {
//             icon: <Users size={36} className="text-[#0068B4]" />,
//             titleKey: 'happyClients',
//             descKey: 'happyClientsDesc'
//         },
//         {
//             icon: <Briefcase size={36} className="text-[#0068B4]" />,
//             titleKey: 'yearsExperience',
//             descKey: 'yearsExperienceDesc'
//         },
//         {
//             icon: <Star size={36} className="text-[#0068B4]" />,
//             titleKey: 'awardsReceived',
//             descKey: 'awardsReceivedDesc'
//         },
//     ]

//     return (
//         <section
//             id="achievements"
//             className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
//         >
//             {/* عنوان القسم */}
//             <div className="max-w-7xl mx-auto text-center mb-16">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="text-4xl md:text-5xl font-bold text-[#0068B4] dark:text-white"
//                 >
//                     {t('achievementsTitle', 'إنجازاتنا')}
//                 </motion.h2>
//                 <div className="w-24 h-1 bg-[#0068B4] mx-auto rounded-full mt-4"></div>
//             </div>

//             {/* بطاقات الإنجازات */}
//             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//                 {achievements.map((achieve, i) => (
//                     <motion.div
//                         key={achieve.titleKey}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: i * 0.2 }}
//                         className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
//                     >
//                         <div className="mb-4">{achieve.icon}</div>
//                         <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                             {t(achieve.titleKey)}
//                         </h3>
//                         <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
//                             {t(achieve.descKey)}
//                         </p>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     )
// }

// الاعلى تصميم 1


'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Trophy, Users, Briefcase, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Achievements() {
    const { t } = useTranslation('translation')

    const achievements = [
        {
            icon: <Trophy size={50} className="text-[#0068B4]" />,
            titleKey: 'projectsCompleted',
            count: 150
        },
        {
            icon: <Users size={50} className="text-[#0068B4]" />,
            titleKey: 'happyClients',
            count: 300
        },
        {
            icon: <Briefcase size={50} className="text-[#0068B4]" />,
            titleKey: 'yearsExperience',
            count: 20
        },
        {
            icon: <Star size={50} className="text-[#0068B4]" />,
            titleKey: 'awardsReceived',
            count: 12
        },
    ]

    const [counters, setCounters] = useState(achievements.map(() => 0))

    useEffect(() => {
        const interval = setInterval(() => {
            setCounters(prev => prev.map((val, i) => {
                if (val < achievements[i].count) return val + Math.ceil(achievements[i].count / 100)
                return achievements[i].count
            }))
        }, 30)
        return () => clearInterval(interval)
    }, [])

    return (
        <section
            id="achievements"
            className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
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
                    {t('achievementsTitle', 'إنجازاتنا')}
                </motion.h2>
                <div className="w-24 h-1 bg-[#0068B4] mx-auto rounded-full mt-4"></div>
            </div>

            {/* عرض الإنجازات كعدادات */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {achievements.map((achieve, i) => (
                    <motion.div
                        key={achieve.titleKey}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        className="flex flex-col items-center justify-center gap-4 p-6"
                    >
                        <div className="mb-2">{achieve.icon}</div>
                        <span className="text-4xl md:text-5xl font-extrabold text-[#0068B4]">
                            {counters[i]}
                            {achieve.titleKey === 'yearsExperience' ? '+' : ''}
                        </span>
                        <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
                            {t(achieve.titleKey)}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}



// الاعلى تصميم 2