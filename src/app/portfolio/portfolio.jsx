"use client";

import { useState } from "react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: "CHAPTER 01",
      title: "STREAM CENTRAL",
      subtitle: "API-Driven Entertainment Hub",
      description:
        "A high-octane media platform fetching real-time show and movie data with zero loading latency.",
      tags: ["React", "API Integration", "CSS3"],
      link: "https://github.com/NekoBeast",
    },
    {
      id: "CHAPTER 02",
      title: "PERSONAL DOMAIN",
      subtitle: "Custom Portfolio Engine",
      description:
        "An interactive web space designed with custom layout architecture to showcase code & design paths.",
      tags: ["Next.js", "Tailwind CSS", "JavaScript"],
      link: "https://github.com/NekoBeast",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-mono selection:bg-black selection:text-white">
      {/* Halftone / Comic Dot Background Pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10 z-0"
        style={{
          backgroundImage: `radial-gradient(black 2px, transparent 2px)`,
          backgroundSize: "16px 16px",
        }}
      />

      {/* Top Bar / Comic Header */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-black px-6 py-4 flex justify-between items-center shadow-[0_4px_0_0_rgba(0,0,0,1)]">
        <a
          href="#"
          className="text-2xl font-black tracking-tighter uppercase italic border-2 border-black px-3 py-1 bg-black text-white transform -rotate-1 hover:rotate-0 transition-transform"
        >
          SUSHIL RAI // DEV
        </a>

        <nav className="hidden md:flex gap-6 font-extrabold text-sm uppercase tracking-wider">
          <a href="#hero" className="hover:underline decoration-4">
            Origin
          </a>
          <a href="#work" className="hover:underline decoration-4">
            Chapters (Work)
          </a>
          <a href="#stats" className="hover:underline decoration-4">
            Power Levels
          </a>
          <a href="#contact" className="hover:underline decoration-4">
            Signal
          </a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden font-black text-xl border-2 border-black px-2 py-1"
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b-4 border-black bg-white p-6 flex flex-col gap-4 font-black uppercase text-lg">
          <a href="#hero" onClick={() => setIsMenuOpen(false)}>
            Origin
          </a>
          <a href="#work" onClick={() => setIsMenuOpen(false)}>
            Chapters (Work)
          </a>
          <a href="#stats" onClick={() => setIsMenuOpen(false)}>
            Power Levels
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Signal
          </a>
        </div>
      )}

      {/* Hero / Cover Panel */}
      <section
        id="hero"
        className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-20 border-b-4 border-black"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Text Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block border-2 border-black bg-black text-white px-3 py-1 text-xs font-black uppercase tracking-widest">
              Issue #01 • Kathmandu, Nepal[cite: 1]
            </div>

            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none italic">
              FRONTEND <br />
              <span className="bg-black text-white px-2">DEVELOPER</span>
            </h1>

            {/* Comic Speech Bubble */}
            <div className="relative border-4 border-black p-6 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <p className="text-base sm:text-lg font-bold leading-snug">
                "I craft web applications with tight responsive architecture!
                Currently pushing front-end code at Pagoda Labs[cite: 1] &
                exploring AI/IoT frontiers![cite: 1]"
              </p>
              {/* Speech bubble pointer */}
              <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-black"></div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#work"
                className="border-4 border-black bg-black text-white px-8 py-4 font-black uppercase tracking-wider text-sm shadow-[6px_6px_0_0_rgba(200,200,200,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                Read Stories (Work)
              </a>
              <a
                href="https://github.com/NekoBeast"
                target="_blank"
                rel="noreferrer"
                className="border-4 border-black bg-white text-black px-8 py-4 font-black uppercase tracking-wider text-sm shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                GitHub Profile[cite: 1]
              </a>
            </div>
          </div>

          {/* Image Frame Placeholder (Manga/Comic Panel Style) */}
          <div className="lg:col-span-5 relative">
            <div className="border-4 border-black p-3 bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform rotate-1">
              {/* Placeholder image container */}
              <div className="aspect-[4/5] bg-slate-100 border-2 border-black flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                {/* Comic Speed Lines Pattern */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `repeating-conic-gradient(black 0% 5%, transparent 5% 10%)`,
                  }}
                />

                <div className="border-2 border-black bg-white px-4 py-2 font-black uppercase text-xs z-10 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                  [ IMAGE PANEL PLACEHOLDER ]
                </div>
                <p className="text-xs font-bold text-slate-500 mt-3 z-10 max-w-[200px]">
                  Insert main portrait, artwork, or avatar here later.
                </p>
              </div>
              <div className="text-right text-xs font-black uppercase mt-2 tracking-widest">
                FIG 1.0 — SUSHIL RAI[cite: 1]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters / Featured Projects */}
      <section
        id="work"
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 border-b-4 border-black"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-4 border-black pb-4">
          <div>
            <span className="font-black text-xs uppercase bg-black text-white px-2 py-1">
              ARCHIVES
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mt-2">
              FEATURED CHAPTERS
            </h2>
          </div>
          <p className="font-bold text-sm text-slate-600 max-w-xs mt-2 md:mt-0">
            ACTION-PACKED WEB APPLICATIONS AND UI EXPERIMENTS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="border-4 border-black p-6 bg-white shadow-[10px_10px_0_0_rgba(0,0,0,1)] flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                {/* Image Placeholder Panel for Project */}
                <div className="aspect-video bg-slate-100 border-2 border-black mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="border-2 border-black bg-white px-3 py-1 font-black text-xs shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                    PROJECT PREVIEW IMAGE
                  </div>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="font-black text-xs bg-black text-white px-2 py-0.5">
                    {proj.id}
                  </span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-black text-xs underline"
                  >
                    VIEW SOURCE ↗
                  </a>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase mb-4">
                  {proj.subtitle}
                </p>
                <p className="font-bold text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-black">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="border-2 border-black px-2 py-0.5 text-xs font-black uppercase"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Stats (Power Levels) */}
      <section
        id="stats"
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 border-b-4 border-black"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Experience Arc */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter border-b-4 border-black pb-2">
              CURRENT ARC: PAGODA LABS[cite: 1]
            </h2>

            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <div className="flex justify-between items-start mb-4 border-b-2 border-black pb-2">
                <div>
                  <h3 className="text-xl font-black uppercase">
                    WEB DEVELOPMENT INTERN[cite: 1]
                  </h3>
                  <p className="text-xs font-bold text-slate-600">
                    PAGODA LABS • KATHMANDU, NEPAL[cite: 1]
                  </p>
                </div>
                <span className="font-black text-xs border-2 border-black px-2 py-1 bg-black text-white">
                  2024 - PRESENT[cite: 1]
                </span>
              </div>

              <ul className="space-y-3 text-sm font-bold list-disc list-inside">
                <li>
                  Translating wireframe concepts into fully functional,
                  responsive client interfaces.[cite: 1]
                </li>
                <li>
                  Collaborating in daily agile stand-ups for sprint planning and
                  feature improvements.[cite: 1]
                </li>
                <li>
                  Debugging critical UI issues to increase speed and user
                  retention.[cite: 1]
                </li>
              </ul>
            </div>

            {/* Education Panel */}
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
              <span className="font-black text-xs bg-black text-white px-2 py-0.5">
                ACADEMICS
              </span>
              <h3 className="text-lg font-black uppercase mt-1">
                BACHELOR OF INFORMATION TECHNOLOGY (BIT)[cite: 1]
              </h3>
              <p className="text-xs font-bold text-slate-600">
                TEXAS INTERNATIONAL COLLEGE • GOKARNESHWOR[cite: 1]
              </p>
            </div>
          </div>

          {/* Skill Inventory */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter border-b-4 border-black pb-2">
              TECH STACK
            </h2>

            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] space-y-4">
              <div>
                <h4 className="font-black text-xs uppercase bg-black text-white px-2 py-0.5 inline-block mb-2">
                  Primary Arsenal
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "JavaScript",
                    "HTML5",
                    "CSS3",
                    "Git",
                    "GitHub",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black">
                <h4 className="font-black text-xs uppercase bg-black text-white px-2 py-0.5 inline-block mb-2">
                  Side Interests
                </h4>
                <p className="text-xs font-bold">
                  AI LEARNING & INTERNET OF THINGS (IOT) DEVELOPMENT[cite: 1]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Action Callout */}
      <section
        id="contact"
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center"
      >
        <div className="border-4 border-black p-8 sm:p-12 bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 border-2 border-black bg-black text-white px-4 py-1 text-xs font-black uppercase">
            SEND A SIGNAL
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-4 italic">
            TO BE CONTINUED...
          </h2>
          <p className="font-bold text-sm sm:text-base max-w-md mx-auto mb-8 uppercase">
            HAVE A PROJECT, COLLABORATION, OR QUESTION? HIT MY INBOX!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:snarutorai@gmail.com"
              className="border-4 border-black bg-black text-white px-8 py-4 font-black uppercase text-sm shadow-[6px_6px_0_0_rgba(200,200,200,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              snarutorai@gmail.com[cite: 1]
            </a>
            <a
              href="tel:9716093439"
              className="border-4 border-black bg-white text-black px-8 py-4 font-black uppercase text-sm shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              +977 9716093439[cite: 1]
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black py-6 text-center font-black text-xs uppercase bg-white">
        © SUSHIL RAI • KATHMANDU, NEPAL[cite: 1]
      </footer>
    </div>
  );
}
