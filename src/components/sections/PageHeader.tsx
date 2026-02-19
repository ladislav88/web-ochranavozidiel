import React from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { HERO_BACKGROUND_IMAGE, HERO_BACKGROUND_ALT } from '@/constants/hero';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

const PageHeader = ({ title, subtitle, imageSrc = HERO_BACKGROUND_IMAGE }: PageHeaderProps) => {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden w-full">
      {/* Header background image - WebP pre výkon */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imageSrc}
          alt={`${title} - ${HERO_BACKGROUND_ALT}`}
          className="w-full h-full object-cover object-center opacity-30"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <FadeIn direction="up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#3a86c9]">
            {title}
          </h1>
        </FadeIn>
        
        {subtitle && (
          <FadeIn direction="up" delay="0.1s">
            <p className="text-lg md:text-xl text-gray-300 max-w-prose mx-auto">
              {subtitle}
            </p>
          </FadeIn>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-32 -right-16 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
    </section>
  );
};

export default PageHeader;
