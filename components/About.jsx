// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { useTranslation } from 'react-i18next'

// export default function About() {
//     const { t } = useTranslation('translation')

//     const sections = [
//         {
//             title: t('aboutvisionTitle'),
//             description: t('aboutvisionDec'),
//             color: 'bg-blue-100 dark:bg-blue-900',
//             accent: 'border-blue-500'
//         },
//         {
//             title: t('aboutmissionTitle'),
//             description: t('aboutmissionDec'),
//             color: 'bg-green-100 dark:bg-green-900',
//             accent: 'border-green-500'
//         },
//         {
//             title: t('aboutgoalsTitle'),
//             description: t('aboutgoalsDesc'),
//             color: 'bg-yellow-100 dark:bg-yellow-900',
//             accent: 'border-yellow-500'
//         },
//     ]

//     return (
//         <section
//             id="about"
//             className="relative py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
//         >
//             <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

//                 {/* الصورة الجانبية */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="w-full md:w-1/2 relative h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg"
//                 >
//                     <Image
//                         src="/images/company.jpg"
//                         alt="Company"
//                         fill
//                         style={{ objectFit: 'cover' }}
//                         className="rounded-xl"
//                         priority
//                     />
//                 </motion.div>

//                 {/* النصوص */}
//                 <motion.div
//                     initial={{ opacity: 0, x: 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="w-full md:w-1/2 flex flex-col justify-center gap-6"
//                 >
//                     <h2 className="text-4xl md:text-5xl font-bold text-[#0068B4] dark:text-white">
//                         {t('aboutUsTitle')}
//                     </h2>
//                     <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
//                         {t('aboutUsDescription')}
//                     </p>

//                     {/* كلمة المدير التنفيذي */}
//                     {/* صورة المدير */}
//                     <div className="flex-shrink-0 w-36 h-36 relative rounded-full overflow-hidden shadow-lg ring-2 ring-[#0068B4]">
//                         <Image
//                             src="/images/ceo.jpg"
//                             alt="CEO"
//                             fill
//                             style={{ objectFit: 'cover' }}
//                         />
//                     </div>

//                     {/* نص الرسالة */}
//                     <div className="flex-1 text-center md:text-left">
//                         <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed">
//                             {t('ceoMessage')}
//                         </p>
//                         <h3 className="text-2xl font-bold text-[#0068B4] dark:text-white">
//                             {t('ceoName')}
//                         </h3>
//                         <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-1">
//                             {t('ceoTitle', 'المدير التنفيذي')}
//                         </p>
//                     </div>
//                 </motion.div>
//             </div>

//             {/* الكارد المتعدد الأقسام - سطر جديد */}
//             <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {sections.map((section, i) => (
//                     <motion.div
//                         key={i}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: i * 0.2 }}
//                         className={`relative rounded-xl shadow-lg p-6 border-t-4 ${section.accent} ${section.color} hover:shadow-2xl hover:scale-105 transition-transform duration-300`}
//                     >
//                         <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{section.title}</h3>
//                         <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{section.description}</p>
//                     </motion.div>
//                 ))}
//             </div>
//         </section >
//     )
// }



'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function About() {
    const { t } = useTranslation('translation')

    const sections = [
        {
            title: t('aboutvisionTitle'),
            description: t('aboutvisionDec'),
            color: 'bg-blue-100 dark:bg-blue-900',
            accent: 'border-blue-500'
        },
        {
            title: t('aboutmissionTitle'),
            description: t('aboutmissionDec'),
            color: 'bg-green-100 dark:bg-green-900',
            accent: 'border-green-500'
        },
        {
            title: t('aboutgoalsTitle'),
            description: t('aboutgoalsDesc'),
            color: 'bg-yellow-100 dark:bg-yellow-900',
            accent: 'border-yellow-500'
        },
    ]

    return (
        <section
            id="about"
            className="relative py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* الصورة الجانبية */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 relative h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg"
                >
                    <Image
                        src="/images/company.jpg"
                        alt="Company"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-xl"
                        priority
                    />
                </motion.div>

                {/* نصوص التعريف */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex flex-col justify-center gap-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0068B4] dark:text-white">
                        {t('aboutUsTitle')}
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                        {t('aboutUsDescription')}
                    </p>
                </motion.div>
            </div>

            {/* كلمة المدير التنفيذي - بطاقة مستقلة */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-5xl mx-auto mt-16 bg-linear-to-r from-white via-blue-50 to-white dark:from-gray-800 dark:via-blue-900 dark:to-gray-800 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:scale-105 transition-transform duration-500"
            >
                {/* صورة المدير */}
                <div className="shrink-0 w-36 h-36 relative rounded-full overflow-hidden shadow-lg ring-2 ring-[#0068B4]">
                    <Image
                        src="/images/ceo.png"
                        alt="CEO"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* نص الرسالة */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed">
                        {t('ceoMessage')}
                    </p>
                    <h3 className="text-2xl font-bold text-[#0068B4] dark:text-white">
                        {t('ceoName')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-1">
                        {t('ceoTitle', 'المدير التنفيذي')}
                    </p>
                </div>
            </motion.div>

            {/* الكارد المتعدد الأقسام */}
            <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {sections.map((section, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        className={`relative rounded-xl shadow-lg p-6 border-t-4 ${section.accent} ${section.color} hover:shadow-2xl hover:scale-105 transition-transform duration-300`}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{section.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{section.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
