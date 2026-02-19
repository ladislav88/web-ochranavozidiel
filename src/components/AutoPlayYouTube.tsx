'use client';

import React, { useRef, useEffect, useState } from 'react';

function extractVideoId(urlOrId: string): string {
  if (!urlOrId) return '';
  const match = urlOrId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([\w-]{11})/);
  return match ? match[1] : urlOrId;
}

interface AutoPlayYouTubeProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function AutoPlayYouTube({
  videoId,
  title = 'YouTube video',
  className = '',
}: AutoPlayYouTubeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLIFrameElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [playFailed, setPlayFailed] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const id = extractVideoId(videoId);

  // Lazy load: start loading when within 200px of viewport
  useEffect(() => {
    const preObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setShouldLoad(true);
      },
      { rootMargin: '200px' }
    );
    if (containerRef.current) preObserver.observe(containerRef.current);
    return () => preObserver.disconnect();
  }, []);

  // Play/pause when 60% visible
  useEffect(() => {
    if (!shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.6;
        setIsVisible(visible);

        if (visible) {
          setPlayFailed(false);
          const iframe = playerRef.current;
          if (iframe?.contentWindow) {
            const play = () => {
              try {
                iframe?.contentWindow?.postMessage(
                  JSON.stringify({ event: 'command', func: 'playVideo' }),
                  'https://www.youtube-nocookie.com'
                );
              } catch {
                setPlayFailed(true);
              }
            };
            setTimeout(play, 300);
          }
        } else {
          const iframe = playerRef.current;
          if (iframe?.contentWindow) {
            iframe.contentWindow.postMessage(
              JSON.stringify({ event: 'command', func: 'pauseVideo' }),
              'https://www.youtube-nocookie.com'
            );
          }
        }
      },
      { threshold: 0.6, rootMargin: '0px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [shouldLoad]);

  const handleUnmute = () => {
    setIsMuted(false);
    const iframe = playerRef.current;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'unMute' }),
        'https://www.youtube-nocookie.com'
      );
    }
  };

  const handlePlayClick = () => {
    setPlayFailed(false);
    const iframe = playerRef.current;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo' }),
        'https://www.youtube-nocookie.com'
      );
    }
  };

  const embedUrl = `https://www.youtube-nocookie.com/embed/${id}?autoplay=0&mute=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`;

  return (
    <div
      ref={containerRef}
      className={`relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 ${className}`}
    >
      {!shouldLoad ? (
        <div className="flex h-full w-full items-center justify-center bg-zinc-800/50">
          <div className="h-12 w-12 animate-pulse rounded-full bg-zinc-700" />
        </div>
      ) : (
        <>
          <iframe
            ref={(el) => {
              playerRef.current = el;
              if (el) setIsLoaded(true);
            }}
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
          {isMuted && (
            <button
              type="button"
              onClick={handleUnmute}
              className="absolute bottom-3 left-3 rounded-lg bg-black/70 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-black/90"
              aria-label="Zapnúť zvuk"
            >
              Zapnúť zvuk
            </button>
          )}
          {playFailed && (
            <button
              type="button"
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-black/50 text-white"
            >
              <span className="rounded-lg bg-[#e06329] px-6 py-3 font-medium">
                Spustiť video
              </span>
            </button>
          )}
        </>
      )}
    </div>
  );
}
