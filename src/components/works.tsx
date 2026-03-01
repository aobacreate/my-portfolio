"use client"

import { useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { works, Work } from "../lib/data"

export default function Works() {

  const nextWorks = works
    .filter((w) => w.type === "next")

  const wpWorks = works
    .filter((w) => w.type === "wp")

  return (
    <section id="works" className="pt-16 bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-6 text-xl sm:text-2xl font-bold tracking-[0.25em] text-neutral-800">
          WORKS
        </h2>

        <LayoutGroup>
          {/* Next.js / Frontend */}
          {nextWorks.length > 0 && (
            <div className="mb-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                NEXT.JS
              </p>
              <WorksList items={nextWorks} />
            </div>
          )}

          {/* WordPress */}
          {wpWorks.length > 0 && (
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-700">
                WORDPRESS
              </p>
              <WorksList items={wpWorks} />
            </div>
          )}
        </LayoutGroup>
      </div>
    </section>
  )
}

function WorksList({ items }: { items: Work[] }) {
  return (
    <motion.ul
      layout
      initial={{ borderRadius: 24 }}
      className="space-y-3 rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
    >
      {items.map((work) => (
        <WorkItem key={work.id} work={work} />
      ))}
    </motion.ul>
  )
}

function WorkItem({ work }: { work: Work }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen((prev) => !prev)

  const typeLabel = work.type === "next" ? "Next.js" : "WordPress"

  return (
    <motion.li
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 16 }}
      className="cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 transition-colors hover:bg-neutral-100"
    >
      {/* ヘッダー行 */}
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-neutral-900">
            {work.title}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-neutral-400 px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] text-neutral-800">
            {typeLabel}
          </span>
          <span className="text-xs text-neutral-500">
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </div>

      {/* 開閉コンテンツ */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-3 text-xs text-neutral-800">
              {/* description */}
              {work.description && (
                <p className="leading-relaxed text-neutral-700">
                  {work.description}
                </p>
              )}

              {/* 技術タグ */}
              {work.tech && work.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-neutral-400 px-2 py-0.5 text-[10px] text-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* リンクボタン群 */}
              <div className="flex flex-wrap gap-2">
                {work.demoUrl && (
                  <LinkPill href={work.demoUrl}>DEMO</LinkPill>
                )}
                {work.githubUrl && (
                  <LinkPill href={work.githubUrl}>GitHub</LinkPill>
                )}
                {work.detailUrl && (
                  <LinkPill href={work.detailUrl}>
                    DETAILS
                  </LinkPill>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

function LinkPill({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()} // 親のアコーディオンが閉じないように
      className="rounded-full border border-neutral-700 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-neutral-900 transition-colors hover:bg-neutral-200"
    >
      {children}
    </a>
  )
}