// 'use client'

// import { motion } from 'framer-motion'
// import { MapPin, Phone, Mail, Building2 } from 'lucide-react'
// import { useTranslation } from 'react-i18next'

// export default function ContactSection() {
//     const { t } = useTranslation()

//     return (
//         <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
//             <div className="max-w-6xl mx-auto text-center mb-16">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-3xl md:text-4xl font-bold text-[#0068B4] dark:text-white"
//                 >
//                     <div className="max-w-7xl mx-auto text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-[#0068B4] dark:text-white">
//                             {t('titlecontact')}
//                         </h2>
//                         <div className="w-20 h-1 bg-[#0068B4] mx-auto rounded-full mt-3"></div>
//                     </div>
//                 </motion.h2>
//                 <p className="text-gray-500 dark:text-gray-300">
//                     {t('subtitlecontact')}
//                 </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//                 {/* نموذج التواصل */}
//                 <motion.form
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-5"
//                 >
//                     {/* الاسم */}
//                     <div className="flex flex-col">
//                         <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
//                             <Building2 className="text-blue-500" />
//                             {t('name')}
//                         </label>
//                         <input
//                             type="text"
//                             placeholder={t('name')}
//                             className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* البريد الإلكتروني */}
//                     <div className="flex flex-col">
//                         <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
//                             <Mail className="text-blue-500" />
//                             {t('email')}
//                         </label>
//                         <input
//                             type="email"
//                             placeholder={t('email')}
//                             className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* رقم الهاتف */}
//                     <div className="flex flex-col">
//                         <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
//                             <Phone className="text-blue-500" />
//                             {t('phone')}
//                         </label>
//                         <input
//                             type="tel"
//                             placeholder={t('phone')}
//                             className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* الرسالة */}
//                     <div className="flex flex-col">
//                         <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
//                             <MapPin className="text-blue-500" />
//                             {t('message')}
//                         </label>
//                         <textarea
//                             placeholder={t('message')}
//                             rows="5"
//                             className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         ></textarea>
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all"
//                     >
//                         {t('send')}
//                     </button>
//                 </motion.form>

//                 {/* معلومات التواصل + الخريطة */}
//                 <motion.div
//                     initial={{ opacity: 0, x: 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="space-y-8"
//                 >
//                     <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-4 text-gray-700 dark:text-gray-300">
//                         <div className="flex items-start gap-3">
//                             <Building2 className="text-blue-500 mt-1" />
//                             <div>
//                                 <p>{t('addressLine1')}</p>
//                                 <p>{t('addressLine2')}</p>
//                                 <p>{t('addressLine3')}</p>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-3">
//                             <Phone className="text-blue-500" />
//                             <span>{t('telefax')}</span>
//                         </div>

//                         <div className="flex items-center gap-3">
//                             <Phone className="text-blue-500" />
//                             <span>{t('unified')}</span>
//                         </div>

//                         <div className="flex items-center gap-3">
//                             <Mail className="text-blue-500" />
//                             <span>info@yosr.com.sa</span>
//                         </div>
//                     </div>

//                     {/* الخريطة */}
//                     <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[350px]">
//                         <iframe
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.906512713352!2d39.856745700000005!3d21.432919299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c203a09e5063c1%3A0xadfca9b884ea37f6!2z2LTYsdmD2Kkg2YrYs9ix!5e0!3m2!1sar!2ssa!4v1761568242509!5m2!1sar!2ssa"
//                             width="100%"
//                             height="100%"
//                             style={{ border: 0 }}
//                             allowFullScreen=""
//                             loading="lazy"
//                             referrerPolicy="no-referrer-when-downgrade"
//                             title={t('mapTitle')}
//                         ></iframe>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     )
// }


// تصميم 1


'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ContactSection() {
    const { t } = useTranslation()


    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            const data = await res.json()
            if (data.success) {
                alert("تم إرسال رسالتك بنجاح!")
                e.target.reset()
            } else {
                alert(data.error || "حدث خطأ")
            }
        } catch (err) {
            alert("حدث خطأ: " + err.message)
        }
    }


    return (
        <section
            id="contact"
            className="
                py-20 px-6
                bg-gradient-to-b from-gray-100 via-white to-gray-50
                dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-800
                transition-colors duration-500
            "
        >
            {/* العنوان */}
            <div className="max-w-6xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-[#0068B4] dark:text-white"
                >
                    {t('titlecontact')}
                </motion.h2>
                <div className="w-24 h-1 bg-[#0068B4] mx-auto rounded-full mt-4"></div>
                <p className="text-gray-600 dark:text-gray-300 mt-4 text-base md:text-lg">
                    {t('subtitlecontact')}
                </p>
            </div>

            {/* المحتوى */}
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* نموذج التواصل */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
                        bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg 
                        shadow-lg hover:shadow-2xl 
                        rounded-2xl p-8 space-y-5 
                        border border-gray-200 dark:border-gray-700
                        transition-all duration-300
                    "
                >
                    {/* الاسم */}
                    <div className="flex flex-col">
                        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-200 mb-1 font-medium">
                            <User className="text-blue-500 w-5 h-5" />
                            {t('name')}
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder={t('name')}
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    {/* البريد الإلكتروني */}
                    <div className="flex flex-col">
                        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-200 mb-1 font-medium">
                            <Mail className="text-blue-500 w-5 h-5" />
                            {t('email')}
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder={t('email')}
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    {/* رقم الهاتف */}
                    <div className="flex flex-col">
                        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-200 mb-1 font-medium">
                            <Phone className="text-blue-500 w-5 h-5" />
                            {t('phone')}
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder={t('phone')}
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    {/* الرسالة */}
                    <div className="flex flex-col">
                        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-200 mb-1 font-medium">
                            <MapPin className="text-blue-500 w-5 h-5" />
                            {t('message')}
                        </label>
                        <textarea
                            name="message"
                            placeholder={t('message')}
                            rows={5}
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        ></textarea>
                    </div>

                    {/* زر الإرسال */}
                    <button
                        type="submit"
                        className="w-full bg-[#0068B4] hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                        {t('send')}
                    </button>
                </motion.form>

                {/* معلومات التواصل + الخريطة */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* معلومات الشركة */}
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg rounded-2xl p-8 space-y-4 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-start gap-3">
                            <MapPin className="text-blue-500 mt-1 w-5 h-5" />
                            <div>
                                <p>{t('addressLine1')}</p>
                                <p>{t('addressLine2')}</p>
                                <p>{t('addressLine3')}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone className="text-blue-500 w-5 h-5" />
                            <span>{t('telefax')}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone className="text-blue-500 w-5 h-5" />
                            <span>{t('unified')}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail className="text-blue-500 w-5 h-5" />
                            <span>info@yosr.com.sa</span>
                        </div>
                    </div>

                    {/* الخريطة */}
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-[300px] md:h-[350px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.906512713352!2d39.856745700000005!3d21.432919299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c203a09e5063c1%3A0xadfca9b884ea37f6!2z2LTYsdmD2Kkg2YrYs9ix!5e0!3m2!1sar!2ssa!4v1761568242509!5m2!1sar!2ssa"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={t('mapTitle')}
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
