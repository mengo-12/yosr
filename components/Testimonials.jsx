'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const testimonials = [
    { name: 'عبدالله القحطاني', text: 'شركة احترافية وملتزمة بالمواعيد وجودة التنفيذ.' },
    { name: 'سارة العتيبي', text: 'خدمة عملاء ممتازة ومشاريع بجودة عالية.' },
    { name: 'محمد الغامدي', text: 'فريق عمل متعاون وملتزم بكل التفاصيل.' },
]

export default function Testimonials() {
    const [sliderRef] = useKeenSlider({ loop: true, slides: { perView: 1, spacing: 15 } })

    return (
        <section className="py-20 bg-white text-center">
            <h2 className="text-3xl font-bold mb-10 text-blue-900">آراء عملائنا</h2>
            <div ref={sliderRef} className="keen-slider max-w-2xl mx-auto">
                {testimonials.map((t, i) => (
                    <div key={i} className="keen-slider__slide bg-gray-100 p-8 rounded-xl shadow-lg">
                        <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                        <h4 className="font-bold text-blue-800">{t.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}
