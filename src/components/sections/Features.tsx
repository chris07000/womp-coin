import Image from 'next/image';

export default function Features() {
  return (
    <section className="py-20 px-4 bg-purple-500">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-black mb-12 leading-none border-8 border-orange-600 inline-block px-8 py-4 bg-orange-600/80 rounded-3xl">
            WE DON&apos;T ASK WHY,<br />
            WE ASK WOMP?
          </h2>
          
          <p className="text-2xl md:text-4xl text-white font-black leading-relaxed mb-8 bg-black/30 rounded-2xl p-6 border-4 border-white">
            WOMP IS USELESS, STUPID, AND<br />
            PROBABLY GOING TO MARS 🚀
          </p>
          
          <div className="bg-white/20 rounded-3xl p-8 mb-8 border-4 border-black">
            <p className="text-xl md:text-2xl text-white font-bold leading-relaxed mb-6">
              NO UTILITY, NO PROMISES, JUST BLOB<br />
              BACKED BY PURE VIBES AND MEME MAGIC ✨
            </p>
            
            <div className="text-lg md:text-xl text-white font-bold">
              WE DON&apos;T ASK WHY,<br />
              <div className="inline-block mt-2">
                <span className="text-2xl md:text-3xl text-orange-300 bg-black/50 px-6 py-3 rounded-2xl border-2 border-orange-300">
                  WE ASK WOMP? 🤔
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-400 rounded-2xl p-6 border-4 border-black">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-xl font-black text-black mb-2">ZERO BRAIN CELLS</h3>
              <p className="text-black font-bold text-sm">Required to understand WOMP</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-4 border-black">
              <div className="text-4xl mb-3">💸</div>
              <h3 className="text-xl font-black text-black mb-2">MAXIMUM CHAOS</h3>
              <p className="text-black font-bold text-sm">Minimum effort, maximum womp</p>
            </div>
            <div className="bg-orange-300 rounded-2xl p-6 border-4 border-black">
              <div className="text-4xl mb-3">🌙</div>
              <h3 className="text-xl font-black text-black mb-2">MOON OR BLOB</h3>
              <p className="text-black font-bold text-sm">We go up or we stay blob</p>
            </div>
          </div>
        </div>

        {/* Rocket Blob decoration */}
        <div className="flex justify-center">
          <div className="w-48 h-48 relative">
            <Image
              src="/images/rocket.png"
              alt="Rocket Blob"
              width={192}
              height={192}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 