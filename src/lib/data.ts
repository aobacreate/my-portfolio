export type Work = {
  id: number
  title: string
  type: "next" | "wp"
  description?: string  
  tech?: string[]
  demoUrl?: string
  githubUrl?: string
  detailUrl?: string // Aoba Create（WordPress）の詳細ページ
}

export const works: Work[] = [
  {
    id: 1,
    title: "Portfolio Site",
    type: "next",
    description:
      "Framer Motionを活用したアニメーション中心のポートフォリオサイト。レイアウト設計と動きの表現に注力しました。",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    demoUrl: "https://my-portfolio-one-sandy-71.vercel.app",
    githubUrl: "https://github.com/aobacreate/my-portfolio",
    detailUrl: "https://note.com/emi_create/n/ncfaa20634028",
  },
  {
    id: 2,
    title: "京都レストラン | WordPress (Twenty Twenty One)",
    type: "wp",
    description:
      "架空のレストラン「京都レストラン」を想定し、Twenty Twenty Oneの子テーマを制作しました。",
    tech: ["WordPress", "PHP", "CSS"],
    demoUrl: "https://aobacreate.net/kyoto-restaurant/",
    githubUrl: "https://github.com/aobacreate/kyoto-restaurant-tt1",
    detailUrl: "https://aobacreate.net/kyoto-restaurant-tt1-project-detail/",
  },
    {
    id: 3,
    title: "Aoba Create | WordPress (Twenty Twenty Three)",
    type: "wp",
    description:
      "Twenty Twenty-Threeをベースに、本ブログ専用の子テーマをコードで制作しました。",
    tech: ["WordPress", "PHP", "CSS"],
    demoUrl: "https://aobacreate.net",
    githubUrl: "https://github.com/aobacreate/aobacreate-blog-tt3",
    detailUrl: "https://aobacreate.net/aobacreate-wordpress-tt3-project/",
  },
    {
    id: 4,
    title: "Aloha Goodies | WordPress (Twenty Twenty Three)",
    type: "wp",
    description:
      "Twenty Twenty-Three テーマをベースに、ブロックエディタによるノーコード構成で制作。",
    tech: ["WordPress"],
    demoUrl: "https://aobacreate.net/alohagoodies-tt3/",
    detailUrl: "https://aobacreate.net/alohagoodies-wordpress-tt3-project/",
  },
    {
    id: 5,
    title: "Aloha Goodies | WordPress Theme (Twenty Twenty-One Child)",
    type: "wp",
    description:
      "Next.js版で制作した構成をもとに、WordPressテーマとして再構築しました。",
    tech: ["WordPress", "PHP", "CSS"],
    demoUrl: "https://aobacreate.net/alohagoodies/",
    githubUrl: "https://github.com/aobacreate/alohagoodies-wordpress-twentytwentyone",
    detailUrl: "https://aobacreate.net/alohagoodies-twentytwentyone-project/"
  },
    {
    id: 6,
    title: "Aloha Goodies Next.js版",
    type: "next",
    description:
      "架空のハワイ雑貨店「Aloha Goodies」を想定し、Next.jsでモバイル向けEC風UIを実装しました。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://alohagoodies.vercel.app/",
    githubUrl: "https://github.com/aobacreate/alohagoodies",
    detailUrl: "https://aobacreate.net/alohagoodies-project/",
  },
    {
    id: 7,
    title: "Github Portfolio Mobile",
    type: "next",
    description:
      "個人制作のWebサイト・UI実装の制作実績一覧です。各カードから詳細（README）をご覧いただけます。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://github-portfolio-mobile.vercel.app/",
    githubUrl: "https://github.com/aobacreate/github-portfolio-mobile",
    detailUrl: "https://aobacreate.net/github-portfolio-mobile/",
  },
    {
    id: 8,
    title: "Hacker News | モバイル版",
    type: "next",
    description:
      "Hacker News APIを利用し、記事データを取得・表示するモバイル向けアプリケーションです。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://hackernews-mobile.vercel.app/",
    githubUrl: "https://github.com/aobacreate/hackernews-mobile",
    detailUrl: "https://aobacreate.net/hacker-news-project/",
  },
    {
    id: 9,
    title: "京都レストラン| Web実装(スマホ版)",
    type: "next",
    description:
      "架空のレストラン「京都レストラン」を想定し、Next.jsでモバイル向けUIを実装しました。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://kyoto-restaurant-mobile.vercel.app/",
    githubUrl: "https://github.com/aobacreate/kyoto-restaurant-mobile",
    detailUrl: "https://aobacreate.net/kyoto-restaurant-project/",
  },
]