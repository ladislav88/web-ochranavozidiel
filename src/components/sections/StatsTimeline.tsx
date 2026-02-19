'use client';

import React, { useState, useEffect, useRef } from 'react';
import FadeIn from '../animations/FadeIn';

const STATS = [
  { target: 0, label: 'Ukradnutých vozidiel', suffix: '', format: (n: number) => String(Math.floor(n)) },
  { target: 26, label: 'Nahlásených pokusov o krádež', suffix: '', format: (n: number) => String(Math.floor(n)) },
  {
    target: 4860,
    label: 'Montáží od roku 1999',
    suffix: '+',
    format: (n: number) => Math.floor(n).toLocaleString('sk-SK'),
  },
];

const MILESTONES = [
  { year: '1999', desc: 'Začiatok činnosti, prvé montáže' },
  { year: '2003', desc: 'Stovky inštalácií zabezpečenia' },
  { year: '2008', desc: 'Rozšírenie o systémy IGLA' },
  { year: '2012', desc: 'Vyše 1500 realizovaných montáží' },
  { year: '2016', desc: '3000+ chránených vozidiel' },
  { year: '2020', desc: '4000+ montáží, certifikovaná sieť' },
  { year: '2025', desc: 'Približne 4860 montáží' },
];

const DURATION = 2200;
const EASING = (t: number) => 1 - Math.pow(1 - t, 4);

export default function StatsTimeline() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const [displayValues, setDisplayValues] = useState<number[]>([0, 0, 0]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    const el = document.getElementById('stats-timeline');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const targets = STATS.map((s) => s.target);

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = EASING(progress);
      setDisplayValues(targets.map((t) => t * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isVisible]);

  return (
    <section id="stats-timeline" className="py-16 md:py-24 relative overflow-hidden bg-zinc-950/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e06329]/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <FadeIn direction="up" className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-balance mb-3 max-w-prose mx-auto">
            Náš rast v čase
          </h2>
          <p className="text-muted-foreground text-lg">
            Počet montáží a výsledky ochrany vozidiel od roku 1999
          </p>
        </FadeIn>

        {/* Štatistiky */}
        <FadeIn direction="up" delay="0.1s">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-[#e06329]/40 transition-all duration-300 hover:bg-zinc-900/70"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#e06329] mb-2 tabular-nums">
                  {stat.format(displayValues[i])}
                  {stat.suffix}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Časová os */}
        <FadeIn direction="up" delay="0.2s">
          <div className="relative max-w-5xl mx-auto">
            {/* Horizontálna čiara */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-zinc-700/60" />

            <div className="relative flex justify-between gap-2 overflow-x-auto pb-4 -mx-2">
              {MILESTONES.map((m, i) => (
                <div
                  key={m.year}
                  className="flex flex-col items-center min-w-[100px] md:min-w-[120px] group cursor-default"
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(-1)}
                >
                  {/* Bod na čiare */}
                  <div
                    className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      activeIndex === i || (activeIndex === -1 && isVisible)
                        ? 'bg-[#e06329] border-[#e06329] scale-125 shadow-[0_0_12px_rgba(224,99,41,0.5)]'
                        : 'bg-zinc-900 border-zinc-600 group-hover:bg-[#e06329]/80 group-hover:border-[#e06329]/80'
                    }`}
                  />
                  <div className="mt-3 text-center">
                    <div className="font-semibold text-white text-sm md:text-base">{m.year}</div>
                    <div
                      className={`text-xs md:text-sm text-muted-foreground mt-1 transition-all duration-300 ${
                        activeIndex === i ? 'text-[#e06329]' : ''
                      }`}
                    >
                      {m.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
