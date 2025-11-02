'use client'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, User, MessageSquare } from "lucide-react"

export default function AdminMessages() {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const messagesPerPage = 6 // عدد الرسائل في كل صفحة

    useEffect(() => {
        fetch("/api/admin/messages")
            .then(res => res.json())
            .then(data => {
                setMessages(data.messages || [])
                setLoading(false)
            })
            .catch(err => {
                console.error("Error fetching messages:", err)
                setLoading(false)
            })
    }, [])

    if (loading)
        return (
            <p className="text-center mt-8 text-gray-500 dark:text-gray-400 animate-pulse">
                جاري التحميل...
            </p>
        )

    // حساب حدود الصفحة الحالية
    const totalPages = Math.ceil(messages.length / messagesPerPage)
    const startIndex = (currentPage - 1) * messagesPerPage
    const currentMessages = messages.slice(startIndex, startIndex + messagesPerPage)

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page)
    }

    return (
        <section className="min-h-screen py-16 px-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
            <div className="max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-10 text-center text-[#0068B4] dark:text-white"
                >
                    📨 رسائل التواصل
                </motion.h1>

                {messages.length === 0 ? (
                    <p className="text-gray-600 dark:text-gray-400 text-center text-lg">
                        لا توجد رسائل بعد.
                    </p>
                ) : (
                    <>
                        {/* الكروت */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {currentMessages.map((msg, index) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 
                                               bg-white/80 dark:bg-gray-900/80 
                                               backdrop-blur-md shadow-md hover:shadow-xl 
                                               transition-all duration-300"
                                >
                                    <div className="flex items-center gap-2 text-[#0068B4] dark:text-blue-400 mb-2">
                                        <User className="w-5 h-5" />
                                        <p className="font-semibold">{msg.name}</p>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
                                        <Mail className="w-5 h-5 text-blue-500" />
                                        <p>{msg.email}</p>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2">
                                        <Phone className="w-5 h-5 text-blue-500" />
                                        <p>{msg.phone || "لا يوجد"}</p>
                                    </div>

                                    <div className="flex items-start gap-2 text-gray-800 dark:text-gray-200 mt-4">
                                        <MessageSquare className="w-5 h-5 text-blue-500 mt-1" />
                                        <p className="leading-relaxed">{msg.message}</p>
                                    </div>

                                    <p className="text-gray-400 text-xs mt-4 text-right">
                                        {new Date(msg.createdAt).toLocaleString()}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* أزرار التنقل */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-3 mt-10">
                                <button
                                    onClick={() => goToPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`px-4 py-2 rounded-lg font-medium transition ${
                                        currentPage === 1
                                            ? "bg-gray-300 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                                            : "bg-[#0068B4] hover:bg-blue-700 text-white"
                                    }`}
                                >
                                    السابق
                                </button>

                                <div className="flex items-center gap-2">
                                    {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => goToPage(i + 1)}
                                            className={`w-9 h-9 rounded-lg text-sm font-medium transition ${
                                                currentPage === i + 1
                                                    ? "bg-[#0068B4] text-white"
                                                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
                                            }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => goToPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={`px-4 py-2 rounded-lg font-medium transition ${
                                        currentPage === totalPages
                                            ? "bg-gray-300 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                                            : "bg-[#0068B4] hover:bg-blue-700 text-white"
                                    }`}
                                >
                                    التالي
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    )
}
