export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-6 text-xl sm:text-2xl font-semibold tracking-[0.25em]">Skills</h2>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="border px-3 py-1 rounded-full">Next.js</span>
          <span className="border px-3 py-1 rounded-full">React</span>
          <span className="border px-3 py-1 rounded-full">Framer Motion</span>
          <span className="border px-3 py-1 rounded-full">Tailwind CSS</span>
          <span className="border px-3 py-1 rounded-full">WordPress</span>
          <span className="border px-3 py-1 rounded-full">PHP</span>
        </div>
      </div>
    </section>
  )
}