'use client'
import { useState } from 'react'

export default function AdminLogin() {
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        // كلمة المرور الثابتة (يمكنك تغييرها)
        if (password === 'yosr123') {
            document.cookie = "adminToken=VALID_ADMIN; path=/"
            window.location.href = '/admin/messages'
        } else {
            alert("كلمة المرور غير صحيحة ❌")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center text-[#0068B4] dark:text-white">
                    تسجيل دخول الإدارة
                </h2>
                <input
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-900 dark:text-white mb-4"
                />
                <button type="submit" className="w-full py-2 bg-[#0068B4] text-white rounded-lg hover:bg-[#00539E] transition">
                    دخول
                </button>
            </form>
        </div>
    )
}
