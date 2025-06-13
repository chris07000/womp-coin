'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBubble, setCurrentBubble] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const speechBubbles = [
    "WOMP WOMP! 🎺",
    "OR WOMP OR DIE! 💀",
    "MUCH BLOB, VERY ROUND! 🟣",
    "TO THE MOON! 🚀",
    "JIGGLE JIGGLE! 🤹",
    "WOMP IS LIFE! ✨",
    "MAXIMUM BLOBNESS! 💜",
    "VIBES ONLY! 😎"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Change speech bubble every 3 seconds
    const interval = setInterval(() => {
      setCurrentBubble(prev => (prev + 1) % speechBubbles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [speechBubbles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgroundblob.png"
          alt="Background Blob"
          fill
          className="object-cover"
          priority
        />
        {/* CSS Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 via-purple-500/30 to-orange-500/40"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Navigation */}
          <div className="flex justify-between items-center mb-12">
            {/* Dropdown Menu */}
            <div className="relative">
              <Button 
                variant="outline" 
                size="medium" 
                className="text-white border-white font-black hover:bg-black hover:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                MENU
              </Button>
              
              {/* Dropdown Content */}
              {isMenuOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl border-4 border-black shadow-lg min-w-[250px] z-50">
                  <div className="p-2">
                    <Link href="/blobpaper" onClick={() => setIsMenuOpen(false)}>
                      <div className="block px-4 py-3 text-black font-bold hover:bg-purple-100 rounded-lg transition-colors cursor-pointer">
                        📄 READ FULL BLOBPAPER
                      </div>
                    </Link>
                    <Link href="/blob-memes" onClick={() => setIsMenuOpen(false)}>
                      <div className="block px-4 py-3 text-black font-bold hover:bg-orange-100 rounded-lg transition-colors cursor-pointer">
                        🎨 BLOB MEME GENERATOR
                      </div>
                    </Link>
                    <div className="block px-4 py-3 text-gray-400 font-bold rounded-lg cursor-not-allowed">
                      🚀 BUY WOMP (COMING SOON)
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Image
                src="/images/blob.png"
                alt="WOMP"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </div>
            {/* BUY WOMP button removed - coin not launched yet */}
            <div className="w-24"></div> {/* Spacer for layout balance */}
          </div>

          {/* Main Title - Better contrast against green background */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 leading-none tracking-tight border-8 border-purple-600 inline-block px-8 py-4 bg-purple-600 rounded-3xl">
            WOMP
          </h1>

          {/* Slogan - Better readable styling */}
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 leading-tight bg-black/50 rounded-2xl p-6 border-4 border-white">
            THE BLOB THAT ATE THE BLOCKCHAIN<br />
            <span className="text-2xl md:text-3xl text-orange-300">(OR WOMP, OR DIE)</span>
          </h2>

          {/* WOMP Mascot with Speech Bubbles */}
          <div className="mb-12 relative">
            <div className="w-80 h-80 mx-auto relative">
              <Image
                src="/images/blob.png"
                alt="WOMP - The Ultimate Blob Mascot"
                width={320}
                height={320}
                className="w-full h-full object-contain animate-bounce-slow"
                priority
              />
              
              {/* Speech Bubbles */}
              <div className="absolute -top-16 -left-20 animate-pulse">
                <div className="bg-white rounded-2xl px-4 py-2 border-4 border-black relative transform -rotate-12">
                  <p className="text-black font-black text-lg whitespace-nowrap">
                    {speechBubbles[currentBubble]}
                  </p>
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
                  <div className="absolute -bottom-1 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-black"></div>
                </div>
              </div>

              {/* Second speech bubble (opposite side) */}
              <div className="absolute -top-20 -right-16 animate-pulse animation-delay-1000">
                <div className="bg-purple-300 rounded-2xl px-4 py-2 border-4 border-black relative transform rotate-6">
                  <p className="text-black font-black text-sm whitespace-nowrap">
                    BLOB POWER! 💪
                  </p>
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-purple-300"></div>
                  <div className="absolute -bottom-1 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-black"></div>
                </div>
              </div>

              {/* Third speech bubble (bottom) */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-pulse animation-delay-2000">
                <div className="bg-orange-300 rounded-2xl px-4 py-2 border-4 border-black relative">
                  <p className="text-black font-black text-sm whitespace-nowrap">
                    MUCH WOW! 🤯
                  </p>
                  {/* Speech bubble tail */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-orange-300"></div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-t-black"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats - Updated */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="text-center bg-white/20 rounded-xl p-4 border-2 border-white">
              <div className="text-3xl font-black text-white">1B</div>
              <div className="text-white font-bold text-sm">TOTAL SUPPLY</div>
            </div>
            <div className="text-center bg-white/20 rounded-xl p-4 border-2 border-white">
              <div className="text-3xl font-black text-white">100%</div>
              <div className="text-white font-bold text-sm">COMMUNITY</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 