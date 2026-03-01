// app/page.tsx
import Hero from "@/components/hero";
import Works from "@/components/works";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function Top() {
  return (
    <>
      {/* フル幅 Hero */}
      <Hero />
      {/* ここから下は .container でセンター寄せ */}
      <main className="container">
        <Works />
        <About /> 
      </main>
      <Footer />
    </>
  );
}