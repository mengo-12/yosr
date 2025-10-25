'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useTranslation } from 'react-i18next'

export default function Hero() {
    const { t, i18n } = useTranslation('translation')

    const slides = [
        '/images/cccc.png',
        '/images/dd.jpg',
        '/images/dddd.png'
    ]

    // 🔹 مرجع لضمان إعادة تشغيل KeenSlider عند تغيير اللغة
    const keenRef = useRef(null)

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            slides: { perView: 1 },
            created: () => {
                // console.log('✅ Slider initialized')
            },
        },
        []
    )

    // 🔹 تشغيل السلايدر تلقائيًا
    useEffect(() => {
        if (!instanceRef.current) return
        const interval = setInterval(() => {
            instanceRef.current.next()
        }, 3500)
        return () => clearInterval(interval)
    }, [instanceRef])

    // 🔹 تحديث الاتجاه عند تغيير اللغة
    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'

        // إعادة تشغيل السلايدر عند تغيير اللغة (يُعيد ترتيب الشرائح)
        if (instanceRef.current) {
            instanceRef.current.update()
        }
    }, [i18n.language])

    return (
        <div
            dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
            ref={(node) => {
                sliderRef(node)
                keenRef.current = node
            }}
            className="keen-slider relative h-[75vh] w-full overflow-hidden bg-black"
        >
            {slides.map((src, i) => (
                <div key={i} className="keen-slider__slide relative w-full h-full">
                    {/* الصورة */}
                    <Image
                        src={src}
                        alt={`Slide ${i + 1}`}
                        fill
                        className="object-cover"
                        priority={i === 0}
                    />

                    {/* النصوص فوق الصورة */}
                    <div className="absolute inset-0 z-10 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                            {t('title')}
                        </h1>
                        <p className="text-lg md:text-2xl text-white max-w-2xl drop-shadow-md">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
