'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const projects = [
    { title: 'مبنى إداري', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7' },
    { title: 'مستودع تجاري', image: 'https://images.unsplash.com/photo-1581092334703-fc8a6e08fdf1' },
    { title: 'نظام مراقبة ذكي', image: 'https://images.unsplash.com/photo-1581091870622-72e8d9f6e8f3' },
]

export default function Projects() {
    const [sliderRef] = useKeenSlider({ loop: true, slides: { perView: 1, spacing: 15 } })

    return (
        <section className="py-20 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold mb-10 text-blue-900">مشاريعنا</h2>
            <div ref={sliderRef} className="keen-slider max-w-3xl mx-auto">
                {projects.map((p, i) => (
                    <div key={i} className="keen-slider__slide">
                        <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                            <img src={p.image} alt={p.title} className="w-full h-64 object-cover" />
                            <h3 className="text-xl font-semibold py-4 text-blue-800">{p.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
