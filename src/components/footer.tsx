import Image from "next/image"

export default function Footer() {
  return (
  <footer className="py-12 text-center text-sm text-neutral-600"
    style={{ backgroundColor: "var(--color-footer-bg)" }}
  >
    <div className="mb-4 flex justify-center gap-8">
      <a
        href="https://github.com/aobacreate"
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium transition hover:bg-blue-700"
      >
        GitHub
      </a>
      <a
        href="https://aobacreate.net"
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 rounded-full border border-neutral-400 text-neutral-700 hover:bg-neutral-100 transition"
      >
        Blog
      </a>

      <a
        href="https://twitter.com/emi_create"
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 rounded-full border border-neutral-400 text-neutral-700 hover:bg-neutral-100 transition"
      >
        X
      </a>
    </div>

    <p className="text-xs text-neutral-400">
      © {new Date().getFullYear()} Emi
    </p>
  </footer>
  )
}
