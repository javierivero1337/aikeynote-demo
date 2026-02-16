"use client";

import React from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  children, 
  className = '',
  enableOnHover = false 
}) => {
  return (
    <span className={`glitch-wrapper inline-block relative ${className} ${enableOnHover ? 'hover-trigger' : ''}`}>
      <span className="glitch-content relative inline-block" data-text={children}>
        {children}
      </span>
      <style jsx>{`
        .glitch-content {
          position: relative;
        }
        
        .glitch-content::before,
        .glitch-content::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: inherit; 
          opacity: 0.8;
        }

        .glitch-content::before {
          left: 2px;
          text-shadow: -1px 0 #ff00c1;
          clip-path: inset(44% 0 61% 0);
        }

        .glitch-content::after {
          left: -2px;
          text-shadow: -1px 0 #00fff9;
          clip-path: inset(50% 0 30% 0);
        }

        /* Animation logic */
        .glitch-wrapper:not(.hover-trigger) .glitch-content::before {
          animation: glitch-anim-1 3s infinite linear alternate-reverse;
        }
        .glitch-wrapper:not(.hover-trigger) .glitch-content::after {
          animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
        }

        .hover-trigger:hover .glitch-content::before {
          animation: glitch-anim-1 0.4s infinite linear alternate-reverse;
        }
        .hover-trigger:hover .glitch-content::after {
          animation: glitch-anim-2 0.4s infinite linear alternate-reverse;
        }

        /* Hide pseudo-elements when not animating/hovering if enableOnHover is true */
        .hover-trigger:not(:hover) .glitch-content::before,
        .hover-trigger:not(:hover) .glitch-content::after {
          display: none;
        }

        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-1px, 1px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(1px, -1px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-1px, 1px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(1px, -1px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
          100% { clip-path: inset(30% 0 20% 0); transform: translate(1px, -1px); }
        }

        @keyframes glitch-anim-2 {
          0% { clip-path: inset(10% 0 60% 0); transform: translate(1px, -1px); }
          20% { clip-path: inset(80% 0 5% 0); transform: translate(-1px, 1px); }
          40% { clip-path: inset(30% 0 20% 0); transform: translate(1px, -1px); }
          60% { clip-path: inset(10% 0 80% 0); transform: translate(-1px, 1px); }
          80% { clip-path: inset(50% 0 30% 0); transform: translate(1px, -1px); }
          100% { clip-path: inset(20% 0 70% 0); transform: translate(-1px, 1px); }
        }
      `}</style>
    </span>
  );
};

export default GlitchText;
