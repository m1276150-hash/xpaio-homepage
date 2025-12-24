// components/FeatureCards.tsx
export default function FeatureCards() {
  const features = [
    { title: "X = SYNERGY", desc: "파이와 결합하여 에너지가 배가되는 순간", color: "bg-[#4ECDC4]" },
    { title: "P = PARTNER", desc: "새로운 시대의 기준, 강력한 연대", color: "bg-[#FF6B6B]" },
    { title: "O = INFINITY", desc: "한계 없는 확장, 영원한 동반자", color: "bg-[#D4AF37]" },
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {features.map((f, i) => (
        <div key={i} className={`${f.color} p-6 rounded-lg shadow-lg text-black`}>
          <h2 className="text-2xl font-bold mb-2">{f.title}</h2>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  )
}