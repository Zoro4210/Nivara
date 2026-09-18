"use client";

import { useEffect, useRef } from "react";

export function FooterVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!video) return;

    const updatePlayback = () => {
      if (motionQuery.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      void video.play().catch(() => {
        // Browsers may defer autoplay until the media is visible.
      });
    };

    updatePlayback();
    motionQuery.addEventListener("change", updatePlayback);

    return () => motionQuery.removeEventListener("change", updatePlayback);
  }, []);

  return (
    <div className="footer-media" aria-hidden="true">
      <video
        ref={videoRef}
        className="footer-media__video"
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/nivara-footer-poster.jpg"
        tabIndex={-1}
      >
        <source src="/media/nivara-footer.mp4" type="video/mp4" />
      </video>
      <p className="eyebrow eyebrow--light footer-media__label">NIVĀRA Developments</p>
    </div>
  );
}
