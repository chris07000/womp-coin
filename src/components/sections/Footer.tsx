import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 border-6 border-purple-500 inline-block px-6 py-3 bg-purple-500/20 rounded-2xl">
          JOIN THE WOMP
        </h2>
        
        {/* Social Links - Only Twitter */}
        <div className="flex justify-center mb-12">
          <a 
            href="https://x.com/WOMPTHEBLOB" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 font-bold text-lg transition-colors bg-white/10 px-6 py-3 rounded-lg border-2 border-white/20 flex items-center"
          >
            <span className="mr-2 text-xl">𝕏</span>
            @WOMPTHEBLOB
          </a>
        </div>
        
        {/* Copyright - Updated to 2025 */}
        <p className="text-white/70 text-sm font-bold">
          © 2025 WOMP TOKEN. ALL RIGHTS RESERVED.
        </p>
        
        {/* Disclaimer */}
        <p className="text-white/50 text-xs mt-4 max-w-2xl mx-auto">
          WOMP IS A MEME TOKEN FOR ENTERTAINMENT. ALWAYS DYOR AND NEVER INVEST MORE THAN YOU CAN AFFORD TO LOSE!
        </p>
      </div>
    </footer>
  );
} 