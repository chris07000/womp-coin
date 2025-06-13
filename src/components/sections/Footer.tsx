import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Section - Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
                <Image
                  src="/images/blob.png"
                  alt="WOMP Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-black">WOMP</h3>
            </div>
            <p className="text-gray-300 font-bold">
              The blob that ate the blockchain! Join the WOMP community for maximum chaos and minimum brain cells.
            </p>
          </div>

          {/* Right Section - Social */}
          <div className="space-y-4">
            <h4 className="text-xl font-black text-orange-400">FOLLOW THE BLOB</h4>
            <div className="space-y-2">
              <a 
                href="https://twitter.com/WOMPTHEBLOB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-300 hover:text-orange-400 font-bold transition-colors text-2xl"
              >
                𝕏
              </a>
              <p className="text-gray-400 font-bold text-sm">
                More social links coming soon...
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-bold">
            © 2025 WOMP. All rights reserved. WOMP WOMP! 🟣
          </p>
          <p className="text-gray-500 text-sm mt-2">
            This is not financial advice. WOMP is a meme coin with no utility. DYOR!
          </p>
        </div>
      </div>
    </footer>
  );
} 