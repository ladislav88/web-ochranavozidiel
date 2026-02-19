'use client';

import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Dot {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speedX: number;
  speedY: number;
  color: string;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number>(0);
  const isMobile = useIsMobile();
  const frameCountRef = useRef(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Store responsive values in a ref to avoid recalculation on each frame
    const responsiveValuesRef = {
      dotCount: 0,
      dotRadius: [0, 0],
      speedFactor: 0,
      connectionDistance: 0,
      lineWidth: 0,
      opacity: 0
    };

    const calculateResponsiveValues = () => {
      const width = window.innerWidth;
      
      if (width < 640) { // Small mobile
        responsiveValuesRef.dotCount = Math.min(15, Math.floor(width / 100));
        responsiveValuesRef.dotRadius = [0.8, 2];
        responsiveValuesRef.speedFactor = 0.15;
        responsiveValuesRef.connectionDistance = 90;
        responsiveValuesRef.lineWidth = 0.6;
        responsiveValuesRef.opacity = 0.25;
      } else if (width < 768) { // Mobile
        responsiveValuesRef.dotCount = Math.min(20, Math.floor(width / 80));
        responsiveValuesRef.dotRadius = [1, 2];
        responsiveValuesRef.speedFactor = 0.2;
        responsiveValuesRef.connectionDistance = 100;
        responsiveValuesRef.lineWidth = 0.8;
        responsiveValuesRef.opacity = 0.3;
      } else if (width < 1024) { // Tablet
        responsiveValuesRef.dotCount = Math.min(25, Math.floor(width / 70));
        responsiveValuesRef.dotRadius = [1.2, 2.5];
        responsiveValuesRef.speedFactor = 0.25;
        responsiveValuesRef.connectionDistance = 120;
        responsiveValuesRef.lineWidth = 0.9;
        responsiveValuesRef.opacity = 0.35;
      } else if (width < 1280) { // Small desktop
        responsiveValuesRef.dotCount = Math.min(30, Math.floor(width / 60));
        responsiveValuesRef.dotRadius = [1.5, 3];
        responsiveValuesRef.speedFactor = 0.25;
        responsiveValuesRef.connectionDistance = 130;
        responsiveValuesRef.lineWidth = 1;
        responsiveValuesRef.opacity = 0.4;
      } else { // Large desktop
        responsiveValuesRef.dotCount = Math.min(40, Math.floor(width / 50));
        responsiveValuesRef.dotRadius = [1.5, 3.5];
        responsiveValuesRef.speedFactor = 0.3;
        responsiveValuesRef.connectionDistance = 150;
        responsiveValuesRef.lineWidth = 1;
        responsiveValuesRef.opacity = 0.4;
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      calculateResponsiveValues();
      initDots();
    };

    const initDots = () => {
      dotsRef.current = [];
      const { dotCount, dotRadius, speedFactor } = responsiveValuesRef;

      for (let i = 0; i < dotCount; i++) {
        const radius = dotRadius[0] + Math.random() * (dotRadius[1] - dotRadius[0]);
        dotsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          opacity: 0.2 + Math.random() * 0.3,
          speedX: (Math.random() - 0.5) * speedFactor,
          speedY: (Math.random() - 0.5) * speedFactor,
          color: '#9F9EA1' // Silver gray color
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const dots = dotsRef.current;
      const { connectionDistance, lineWidth, opacity } = responsiveValuesRef;
      
      // Update dots position
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        
        // Move the dot
        dot.x += dot.speedX;
        dot.y += dot.speedY;
        
        // Boundary check with bounce
        if (dot.x < dot.radius) {
          dot.x = dot.radius;
          dot.speedX *= -1;
        }
        if (dot.x > canvas.width - dot.radius) {
          dot.x = canvas.width - dot.radius;
          dot.speedX *= -1;
        }
        if (dot.y < dot.radius) {
          dot.y = dot.radius;
          dot.speedY *= -1;
        }
        if (dot.y > canvas.height - dot.radius) {
          dot.y = canvas.height - dot.radius;
          dot.speedY *= -1;
        }
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = dot.opacity;
        ctx.fill();
      }
      
      // Only update lines every few frames for better performance
      frameCountRef.current++;
      if (frameCountRef.current % 3 === 0) { // Only draw lines every 3 frames
        // Optimized line drawing - limit max connections
        for (let i = 0; i < dots.length; i++) {
          let connectionsDrawn = 0;
          const dot1 = dots[i];
          
          for (let j = i + 1; j < dots.length && connectionsDrawn < 2; j++) {
            const dot2 = dots[j];
            
            const dx = dot2.x - dot1.x;
            const dy = dot2.y - dot1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectionDistance) {
              const lineOpacity = opacity * (1 - distance / connectionDistance);
              
              ctx.beginPath();
              ctx.moveTo(dot1.x, dot1.y);
              ctx.lineTo(dot2.x, dot2.y);
              ctx.strokeStyle = '#C8C8C9'; // Lighter gray for lines
              ctx.globalAlpha = lineOpacity;
              ctx.lineWidth = lineWidth;
              ctx.stroke();
              
              connectionsDrawn++;
            }
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Set up canvas and start animation
    handleResize();
    animate();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 1 }}
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
