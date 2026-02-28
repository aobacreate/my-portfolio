export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/10">
      <div className="flex justify-center gap-8 py-6 text-sm tracking-widest text-white">
        <a href="#works">WORKS</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
      </div>
    </header>
  );
}