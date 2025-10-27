// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { User } from 'lucide-react'
// import { useTranslation } from 'react-i18next'

// export default function TestimonialsCarousel() {
//     const { t } = useTranslation('translation')

//     const testimonials = [
//         {
//             name: 'أحمد صالح',
//             title: 'مدير مشاريع',
//             message: 'شركة يُسر قدمت لنا خدمة رائعة وسرعة في التنفيذ مع جودة عالية.',
//         },
//         {
//             name: 'سارة محمد',
//             title: 'رئيس قسم مشتريات',
//             message: 'تعامل احترافي ودعم متواصل طوال فترة المشروع، أوصي بهم بشدة.',
//         },
//         {
//             name: 'خالد العلي',
//             title: 'مقاول مستقل',
//             message: 'الالتزام بالمواعيد والمعايير الفنية كان ممتازًا، تجربة ممتازة.',
//         },
//     ]

//     const [currentIndex, setCurrentIndex] = useState(0)

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//         }, 5000)
//         return () => clearInterval(interval)
//     }, [testimonials.length])

//     return (
//         <section
//             id="testimonials"
//             className="py-16 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
//         >
//             {/* عنوان القسم */}
//             <div className="max-w-7xl mx-auto text-center mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold text-[#0068B4] dark:text-white">
//                     {t('testimonialsTitle', 'آراء العملاء')}
//                 </h2>
//                 <div className="w-20 h-1 bg-[#0068B4] mx-auto rounded-full mt-3"></div>
//             </div>

//             {/* Carousel مصغر */}
//             <div className="relative max-w-3xl mx-auto h-[220px] sm:h-[260px] md:h-[280px]">
//                 <AnimatePresence mode="wait">
//                     {testimonials.map((client, index) =>
//                         index === currentIndex ? (
//                             <motion.div
//                                 key={client.name}
//                                 initial={{ opacity: 0, x: 50 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 exit={{ opacity: 0, x: -50 }}
//                                 transition={{ duration: 0.6 }}
//                                 className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center"
//                             >
//                                 {/* أيقونة المستخدم */}
//                                 <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 mb-3">
//                                     <User size={36} className="text-[#0068B4] dark:text-white" />
//                                 </div>

//                                 <p className="text-gray-700 dark:text-gray-300 italic mb-3 text-sm sm:text-base">
//                                     {t(client.message)}
//                                 </p>
//                                 <h3 className="text-lg font-bold text-[#0068B4] dark:text-white mb-1">
//                                     {t(client.name)}
//                                 </h3>
//                                 <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
//                                     {t(client.title)}
//                                 </p>
//                             </motion.div>
//                         ) : null
//                     )}
//                 </AnimatePresence>

//                 {/* أزرار التنقل */}
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
//                     {testimonials.map((_, idx) => (
//                         <button
//                             key={idx}
//                             onClick={() => setCurrentIndex(idx)}
//                             className={`w-3 h-3 rounded-full transition-colors ${
//                                 currentIndex === idx ? 'bg-[#0068B4]' : 'bg-gray-300 dark:bg-gray-600'
//                             }`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }


// تصميم 1


'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function TestimonialsCarousel() {
    const { t } = useTranslation('translation')

    const testimonials = [
        {
            name: 'أحمد صالح',
            title: 'مدير مشاريع',
            message: 'شركة يُسر قدمت لنا خدمة رائعة وسرعة في التنفيذ مع جودة عالية.',
        },
        {
            name: 'سارة محمد',
            title: 'رئيس قسم مشتريات',
            message: 'تعامل احترافي ودعم متواصل طوال فترة المشروع، أوصي بهم بشدة.',
        },
        {
            name: 'خالد العلي',
            title: 'مقاول مستقل',
            message: 'الالتزام بالمواعيد والمعايير الفنية كان ممتازًا، تجربة ممتازة.',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [testimonials.length])

    return (
        <section
            id="testimonials"
            className="
                py-20 px-6 
                bg-gradient-to-b from-gray-100 via-white to-gray-50 
                dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 
                text-gray-900 dark:text-gray-100 
                transition-colors duration-500
            "
        >
            {/* عنوان القسم */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0068B4] dark:text-white">
                    {t('testimonialsTitle', 'آراء العملاء')}
                </h2>
                <div className="w-24 h-1 bg-[#0068B4] mx-auto rounded-full mt-4"></div>
            </div>

            {/* Carousel */}
            <div className="relative max-w-3xl mx-auto h-[240px] sm:h-[280px] md:h-[300px]">
                <AnimatePresence mode="wait">
                    {testimonials.map((client, index) =>
                        index === currentIndex ? (
                            <motion.div
                                key={client.name}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6 }}
                                className="
                                    absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center 
                                    p-6 sm:p-8 rounded-3xl shadow-lg
                                    bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg
                                    border border-gray-200 dark:border-gray-700
                                    text-center
                                "
                            >
                                {/* أيقونة المستخدم */}
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/60 mb-4 shadow-md">
                                    <User size={36} className="text-[#0068B4] dark:text-white" />
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 italic mb-3 text-sm sm:text-base leading-relaxed">
                                    {t(client.message)}
                                </p>
                                <h3 className="text-lg font-bold text-[#0068B4] dark:text-white mb-1">
                                    {t(client.name)}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                                    {t(client.title)}
                                </p>
                            </motion.div>
                        ) : null
                    )}
                </AnimatePresence>

                {/* أزرار التنقل */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                currentIndex === idx
                                    ? 'bg-[#0068B4]'
                                    : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
