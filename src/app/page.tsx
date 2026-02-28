// app/page.tsx
import Hero from "@/components/hero";
import SectionAbout from "@/components/section-about";
import SectionWorks from "@/components/section-works";
import Header from "@/components/header";

export default function Top() {
  return (
    <>
      <Header />
      {/* フル幅 Hero */}
      <Hero />
      {/* ここから下は .container でセンター寄せ */}
      <main className="container">
        <SectionAbout />
        <SectionWorks />
        {/* 他のセクションもここに */}
      </main>
    </>
  );
}