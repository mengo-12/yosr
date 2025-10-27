// 'use client'

// import { motion } from 'framer-motion'
// import { useTranslation } from 'react-i18next'
// import { Trophy, Users, Briefcase, Star } from 'lucide-react'
// import { useEffect, useState } from 'react'
// import Image from 'next/image'

// export default function Achievements() {
//     const { t } = useTranslation('translation')

//     const achievements = [
//         { icon: <Trophy size={50} className="text-[#0068B4]" />, titleKey: 'projectsCompleted', count: 150 },
//         { icon: <Users size={50} className="text-[#0068B4]" />, titleKey: 'happyClients', count: 300 },
//         { icon: <Briefcase size={50} className="text-[#0068B4]" />, titleKey: 'yearsExperience', count: 20 },
//         { icon: <Star size={50} className="text-[#0068B4]" />, titleKey: 'awardsReceived', count: 12 },
//     ]

//     const projects = [
//         { id: 1, image: '/images/دار-مرعي-.jpg', title: 'برج دار مرعي', desc: 'محتوى المشروع حي الجامعة – طريق الدائري الثالث بدروم + أرضي + ميزانين + خدمات + مصلى + مطعم + 7 متكررمسمى العقد : صيانة وتشغيل نوع العقد : دائم' },
//         { id: 2, image: '/images/فندق-الحمد.jpg', title: 'فندق الحمد', desc: 'محتوى المشروعحي العزيزية – طريق ابو بكر الصديق بدروم + مواقف + أرضي + ميزانين + مصلى + مطعم + خدمات + 7 متكرر + مبيات مسمى العقد : صيانة وتشغيل نوع العقد : دائم' },
//         { id: 3, image: '/images/فندق-سالم.jpg', title: 'فندق سالم', desc: 'محتوى المشروعالعزيزية – شارع صدقي بدروم + أرضي + ميزانين + خدمات + مصلى + مطعم + 14 متكرر + مرتد مسمى العقد : صيانة وتشغيل نوع العقد : دائم' },
//         { id: 4, image: '/images/فندق-الجزيرة.jpg', title: 'فندق الجزيرة', desc: 'محتوى المشروعالسليمانية – طريق المسجد الحرام بدروم + أرضي + ميزانين + 12 متكرر + مبيتات مسمى العقد : صيانة وتشغيل نوع العقد : دائم' },
//         { id: 5, image: '/images/برج-السيد.jpg', title: 'برج السيد عبدالله بن عايد', desc: 'محتوى المشروع :بدروم + أرضي + ميزانين + 7 متكرر + مبيتات الششة – طريق الملك فهد العام' },
//         { id: 6, image: '/images/برج-السيد-خالد-عبدالله.jpg', title: 'برج السيد خالد عبدالله', desc: 'محتوى المشروعالششة – بجوار محطة المشاعر مواقف + أرضي + ميزانين + 5 متكرر + مبيتات' },
//         { id: 7, image: '/images/عمارة-السيد-سعيد-جميل.jpg', title: 'عمارة السيد سعد جميل', desc: 'محتوى المشروعالششة – طريق الملك فهد العام بدروم + أرضي + 6 متكرر + مبيتات أعمال الهدم إزالة وترحيل الانقاضمحتوى المشروع الششة – طريق الملك فهد العام بدروم + أرضي + 6 متكرر + مبيتات أعمال الهدم إزالة وترحيل الانقاض' },
//         { id: 8, image: '/images/بلدية-الشوقية.jpg', title: 'مشروع وزارة الشؤون البلدية و القروية (أمانة العاصمة المقدسة بلدية الشوقية الفرعية)', desc: 'محتوى المشروع– أرضي – نظام الرش الآلي . – نظام الإنذار المبكر من الحريق . – مضخة الحريق . – شبكة الإطفاء الرطبة . – نظام الإطفاء بغرف الارشيف . – شبكة الإطفاء الجافة . – نظام الإطفاء بغرف الكهرباء . – مطفيات الحريق .' },
//         { id: 9, image: '/images/نمرة-٣.jpg', title: 'مشروع وزارة الأوقاف (مسجد الخيف – مسجد نمرة)محتوى المشروع :', desc: '' },
//         { id: 10, image: '/images/مشروع-الملك-عبدالعزيز.jpg', title: 'مشروع وزارة الأوقاف (مسجد الخيف – مسجد نمرة)محتوى المشروع :', desc: 'محتوى المشروع :ارضي + واحد متكرر + ملحق نظام الإنذار المبكر من الحريق مضخة الحريق المولد الكهربائيمطفيات الحريق نظام الإطفاء بالمطابخ المركزية نظام الإطفاء بغرف الكهرباء نظام الرش الآلي شبكة الإطفاء الرطبة شبكة الإطفاء الجافة العنوان : الشرائع – مدينة الملك عبدالعزيز الرياضية .' },





//     ]

//     const [counters, setCounters] = useState(achievements.map(() => 0))
//     const [currentIndex, setCurrentIndex] = useState(0)

//     // تشغيل العدادات
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCounters(prev =>
//                 prev.map((val, i) => {
//                     if (val < achievements[i].count)
//                         return val + Math.ceil(achievements[i].count / 100)
//                     return achievements[i].count
//                 })
//             )
//         }, 30)
//         return () => clearInterval(interval)
//     }, [])

//     // تحريك الكاروسل كل 5 ثوانٍ
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex(prev => (prev + 1) % Math.ceil(projects.length / 3))
//         }, 5000)
//         return () => clearInterval(interval)
//     }, [projects.length])

//     const visibleProjects = projects.slice(currentIndex * 3, currentIndex * 3 + 3)

//     return (
//         <section
//             id="achievements"
//             className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
//         >
//             {/* ===== عنوان القسم ===== */}
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

//             {/* ===== العداد ===== */}
//             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center mb-20">
//                 {achievements.map((achieve, i) => (
//                     <motion.div
//                         key={achieve.titleKey}
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: i * 0.2 }}
//                         className="flex flex-col items-center justify-center gap-4 p-6"
//                     >
//                         <div className="mb-2">{achieve.icon}</div>
//                         <span className="text-4xl md:text-5xl font-extrabold text-[#0068B4]">
//                             {counters[i]}
//                             {achieve.titleKey === 'yearsExperience' ? '+' : ''}
//                         </span>
//                         <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
//                             {t(achieve.titleKey)}
//                         </p>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* ===== كاروسل المشاريع ===== */}
//             <div className="relative max-w-6xl mx-auto overflow-hidden">
//                 <motion.div
//                     key={currentIndex}
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -50 }}
//                     transition={{ duration: 0.6 }}
//                     className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//                 >
//                     {visibleProjects.map(project => (
//                         <div
//                             key={project.id}
//                             className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
//                         >
//                             <Image
//                                 src={project.image}
//                                 alt={project.title}
//                                 width={400}
//                                 height={250}
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-4 text-center">
//                                 <h3 className="text-xl font-bold text-[#0068B4] dark:text-white mb-2">
//                                     {project.title}
//                                 </h3>
//                                 <p className="text-gray-600 dark:text-gray-300 text-sm">{project.desc}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </motion.div>

//                 {/* نقاط التنقل */}
//                 <div className="flex justify-center gap-2 mt-6">
//                     {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, idx) => (
//                         <button
//                             key={idx}
//                             onClick={() => setCurrentIndex(idx)}
//                             className={`w-3 h-3 rounded-full transition-colors ${
//                                 currentIndex === idx
//                                     ? 'bg-[#0068B4]'
//                                     : 'bg-gray-300 dark:bg-gray-600'
//                             }`}
//                         ></button>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }



// الكود الاصلي في الاعلى  تصميم 1



// 'use client'

// import { motion } from 'framer-motion'
// import { useTranslation } from 'react-i18next'
// import { Trophy, Users, Briefcase, Star } from 'lucide-react'
// import { useEffect, useState } from 'react'
// import Image from 'next/image'

// export default function Achievements() {
//     const { t } = useTranslation('translation')

//     const achievements = [
//         { icon: <Trophy size={50} className="text-[#0068B4]" />, titleKey: 'projectsCompleted', count: 150 },
//         { icon: <Users size={50} className="text-[#0068B4]" />, titleKey: 'happyClients', count: 300 },
//         { icon: <Briefcase size={50} className="text-[#0068B4]" />, titleKey: 'yearsExperience', count: 20 },
//         { icon: <Star size={50} className="text-[#0068B4]" />, titleKey: 'awardsReceived', count: 12 },
//     ]

//     const projects = [
//         { id: 1, image: '/images/دار-مرعي-.jpg', title: 'برج دار مرعي', desc: 'محتوى المشروع حي الجامعة...' },
//         { id: 2, image: '/images/فندق-الحمد.jpg', title: 'فندق الحمد', desc: 'محتوى المشروع حي العزيزية...' },
//         { id: 3, image: '/images/فندق-سالم.jpg', title: 'فندق سالم', desc: 'محتوى المشروع العزيزية...' },
//         { id: 4, image: '/images/فندق-الجزيرة.jpg', title: 'فندق الجزيرة', desc: 'محتوى المشروع السليمانية...' },
//         { id: 5, image: '/images/برج-السيد.jpg', title: 'برج السيد عبدالله بن عايد', desc: 'محتوى المشروع الششة...' },
//         { id: 6, image: '/images/برج-السيد-خالد-عبدالله.jpg', title: 'برج السيد خالد عبدالله', desc: 'محتوى المشروع الششة...' },
//     ]

//     const [counters, setCounters] = useState(achievements.map(() => 0))
//     const [currentIndex, setCurrentIndex] = useState(0)

//     // تشغيل العدادات
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCounters(prev =>
//                 prev.map((val, i) => {
//                     if (val < achievements[i].count)
//                         return val + Math.ceil(achievements[i].count / 100)
//                     return achievements[i].count
//                 })
//             )
//         }, 30)
//         return () => clearInterval(interval)
//     }, [])

//     // تحريك الكاروسل كل 5 ثوانٍ
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex(prev => (prev + 1) % Math.ceil(projects.length / 2))
//         }, 5000)
//         return () => clearInterval(interval)
//     }, [projects.length])

//     const visibleProjects = projects.slice(currentIndex * 2, currentIndex * 2 + 2)

//     return (
//         <section
//             id="achievements"
//             className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
//         >
//             {/* ===== عنوان القسم ===== */}
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

//             <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
//                 {/* ===== كاروسل المشاريع ===== */}
//                 <div className="md:w-1/2 overflow-hidden">
//                     <motion.div
//                         key={currentIndex}
//                         initial={{ opacity: 0, x: 50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -50 }}
//                         transition={{ duration: 0.6 }}
//                         className="grid grid-cols-1 gap-8"
//                     >
//                         {visibleProjects.map(project => (
//                             <div
//                                 key={project.id}
//                                 className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
//                             >
//                                 <Image
//                                     src={project.image}
//                                     alt={project.title}
//                                     width={400}
//                                     height={250}
//                                     className="w-full h-48 object-cover"
//                                 />
//                                 <div className="p-4 text-center">
//                                     <h3 className="text-xl font-bold text-[#0068B4] dark:text-white mb-2">
//                                         {project.title}
//                                     </h3>
//                                     <p className="text-gray-600 dark:text-gray-300 text-sm">{project.desc}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </motion.div>

//                     {/* نقاط التنقل */}
//                     <div className="flex justify-center gap-2 mt-6">
//                         {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, idx) => (
//                             <button
//                                 key={idx}
//                                 onClick={() => setCurrentIndex(idx)}
//                                 className={`w-3 h-3 rounded-full transition-colors ${currentIndex === idx
//                                         ? 'bg-[#0068B4]'
//                                         : 'bg-gray-300 dark:bg-gray-600'
//                                     }`}
//                             ></button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* ===== الإنجازات على شكل 2x2 ===== */}
//                 <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-6">
//                     {achievements.map((achieve, i) => (
//                         <motion.div
//                             key={achieve.titleKey}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, delay: i * 0.2 }}
//                             className="flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
//                         >
//                             <div className="mb-2">{achieve.icon}</div>
//                             <span className="text-4xl md:text-5xl font-extrabold text-[#0068B4]">
//                                 {counters[i]}{achieve.titleKey === 'yearsExperience' ? '+' : ''}
//                             </span>
//                             <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
//                                 {t(achieve.titleKey)}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }


// تصميم 2


'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Trophy, Users, Briefcase, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Achievements() {
    const { t } = useTranslation('translation')

    const achievements = [
        { icon: <Trophy size={50} className="text-[#0068B4]" />, titleKey: 'projectsCompleted', count: 150 },
        { icon: <Users size={50} className="text-[#0068B4]" />, titleKey: 'happyClients', count: 300 },
        { icon: <Briefcase size={50} className="text-[#0068B4]" />, titleKey: 'yearsExperience', count: 20 },
        { icon: <Star size={50} className="text-[#0068B4]" />, titleKey: 'awardsReceived', count: 12 },
    ]

    const projects = [
        { id: 1, image: '/images/دار-مرعي-.jpg', title: 'برج دار مرعي', desc: 'محتوى المشروع حي الجامعة...' },
        { id: 2, image: '/images/فندق-الحمد.jpg', title: 'فندق الحمد', desc: 'محتوى المشروع حي العزيزية...' },
        { id: 3, image: '/images/فندق-سالم.jpg', title: 'فندق سالم', desc: 'محتوى المشروع العزيزية...' },
        { id: 4, image: '/images/فندق-الجزيرة.jpg', title: 'فندق الجزيرة', desc: 'محتوى المشروع السليمانية...' },
        { id: 5, image: '/images/برج-السيد.jpg', title: 'برج السيد عبدالله بن عايد', desc: 'محتوى المشروع الششة...' },
        { id: 6, image: '/images/برج-السيد-خالد-عبدالله.jpg', title: 'برج السيد خالد عبدالله', desc: 'محتوى المشروع الششة...' },
    ]

    const [counters, setCounters] = useState(achievements.map(() => 0))
    const [currentIndex, setCurrentIndex] = useState(0)

    // تشغيل العدادات
    useEffect(() => {
        const interval = setInterval(() => {
            setCounters(prev =>
                prev.map((val, i) => {
                    if (val < achievements[i].count)
                        return val + Math.ceil(achievements[i].count / 100)
                    return achievements[i].count
                })
            )
        }, 30)
        return () => clearInterval(interval)
    }, [])

    // تحريك الكاروسل كل 5 ثوانٍ
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % Math.ceil(projects.length / 2))
        }, 5000)
        return () => clearInterval(interval)
    }, [projects.length])

    const visibleProjects = projects.slice(currentIndex * 2, currentIndex * 2 + 2)

    return (
        <section
            id="achievements"
            className="relative py-20 px-6 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden"
        >
            {/* خلفية متدرجة ناعمة */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#E8F3FB] to-white dark:from-gray-950 dark:to-gray-900 opacity-95 z-0"></div>

            {/* محتوى القسم */}
            <div className="relative z-10">
                {/* ===== عنوان القسم ===== */}
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

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
                    {/* ===== كاروسل المشاريع ===== */}
                    <div className="md:w-1/2 overflow-hidden">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 gap-8"
                        >
                            {visibleProjects.map(project => (
                                <div
                                    key={project.id}
                                    className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 text-center">
                                        <h3 className="text-xl font-bold text-[#0068B4] dark:text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">{project.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* نقاط التنقل */}
                        <div className="flex justify-center gap-2 mt-6">
                            {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        currentIndex === idx
                                            ? 'bg-[#0068B4]'
                                            : 'bg-gray-300 dark:bg-gray-600'
                                    }`}
                                ></button>
                            ))}
                        </div>
                    </div>

                    {/* ===== الإنجازات على شكل 2x2 ===== */}
                    <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-6">
                        {achievements.map((achieve, i) => (
                            <motion.div
                                key={achieve.titleKey}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                            >
                                <div className="mb-2">{achieve.icon}</div>
                                <span className="text-4xl md:text-5xl font-extrabold text-[#0068B4]">
                                    {counters[i]}{achieve.titleKey === 'yearsExperience' ? '+' : ''}
                                </span>
                                <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
                                    {t(achieve.titleKey)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
