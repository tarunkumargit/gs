import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import { videos, photos } from '../../data';
function VideoElement({ src }) {
  return (
    <div className="hero-element">
      <video
        className="collage-element"
        autoPlay
        muted
        loop
        src={src}
      ></video>
    </div>
  );
}
function ImageElement({ src }) {
  return (
    <div className="hero-element">
      <img src={src} className="collage-element" alt="" />
    </div>
  );
}

const HeroCollage = () => {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);
  const [leftVideo, rightVideo] = videos;

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5,
    });
    tl.fromTo(
      '.hero-element',
      { y: 300 },
      {
        duration: 1,
        y: 0,
        delay: function (i) {
          return 0.2 * i;
        },
      }
    );
  }, []);

  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImages.map((src) => (
          <ImageElement key={src} src={src} />
        ))}
        <VideoElement src={leftVideo} />
      </div>
      <div className="right-column">
        <VideoElement src={rightVideo} />
        {rightImages.map((src) => (
          <ImageElement key={src} src={src} />
        ))}
      </div>
    </div>
  );
};

export default HeroCollage;
