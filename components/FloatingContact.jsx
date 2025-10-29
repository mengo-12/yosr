'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MessageCircle, Twitter, Mail } from 'lucide-react'

export default function FloatingContact() {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => setOpen(!open)

    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center space-y-3">
            {/* أزرار التواصل */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-start space-y-3 mb-3"
                    >
                        {/* زر تويتر (X) */}
                        <a
                            href="https://x.com/yosrksa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-2 rounded-full bg-black hover:bg-gray-800 text-white shadow-lg transition-transform hover:scale-105"
                        >
                            <Twitter size={20} />
                            <span className="text-sm font-medium hidden sm:inline">Twitter</span>
                        </a>

                        {/* زر واتساب */}
                        <a
                            href="https://wa.me/966500000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-transform hover:scale-105"
                        >
                            <MessageCircle size={20} />
                            <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
                        </a>

                        {/* زر الهاتف مع رقم */}
                        <a
                            href="tel:920004000"
                            className="flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-transform hover:scale-105"
                        >
                            <Phone size={20} />
                            <span className="text-sm font-medium hidden sm:inline">
                                920004000
                            </span>
                        </a>

                        {/* البريد الإلكتروني */}
                        <a
                            href="mailto:info@yosr.sa"
                            className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#0068B4] hover:bg-blue-700 text-white shadow-lg transition-transform hover:scale-105"
                        >
                            <Mail size={20} />
                            <span className="text-sm font-medium hidden sm:inline">
                                info@yosr.sa
                            </span>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* زر الفتح والإغلاق */}
            <button
                onClick={toggleMenu}
                className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${open
                        ? 'bg-red-600 hover:bg-red-700 rotate-45'
                        : 'bg-[#0068B4] hover:bg-blue-700'
                    } text-white`}
            >
                <X size={26} />
            </button>
        </div>
    )
}
