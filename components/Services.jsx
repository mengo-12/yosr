import { Wrench, ShoppingBag, ShieldCheck } from 'lucide-react'

const services = [
    { icon: Wrench, title: 'المقاولات', desc: 'تنفيذ مشاريع البناء بأعلى المعايير الهندسية.' },
    { icon: ShoppingBag, title: 'التجارة', desc: 'توريد المواد والمعدات الهندسية المعتمدة.' },
    { icon: ShieldCheck, title: 'الأمن والسلامة', desc: 'تركيب أنظمة المراقبة والحماية المتقدمة.' },
]

export default function Services() {
    return (
        <section className="py-20 bg-white text-center">
            <h2 className="text-3xl font-bold mb-10 text-blue-900">خدماتنا</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {services.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="bg-gray-100 shadow-lg rounded-xl p-8 hover:shadow-xl transition">
                        <Icon size={48} className="mx-auto text-blue-500 mb-4" />
                        <h3 className="font-bold text-xl mb-3">{title}</h3>
                        <p className="text-gray-700">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
