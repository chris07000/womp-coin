import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Tokenomics() {
  return (
    <div>
      {/* Blobmap Section with Background */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/blobmap.png"
            alt="Blobmap Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-black mb-12 leading-none border-8 border-purple-600 inline-block px-8 py-4 bg-white rounded-3xl">
            BLOBMAP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-purple-400 rounded-3xl p-6 md:p-8 border-4 border-black relative">
              <div className="text-4xl md:text-6xl mb-4">1️⃣</div>
              <h3 className="text-xl md:text-2xl font-black text-black mb-4">BLOB EXISTS</h3>
              <p className="text-black font-bold text-sm md:text-base">The most important milestone already achieved!</p>
              <div className="absolute top-2 right-2">
                <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-black">DONE</span>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-6 md:p-8 border-4 border-black">
              <div className="text-4xl md:text-6xl mb-4">2️⃣</div>
              <h3 className="text-xl md:text-2xl font-black text-black mb-4">BLOB LEARNS TO DANCE</h3>
              <p className="text-black font-bold text-sm md:text-base">Teaching blob the ancient art of wiggling</p>
            </div>
            
            <div className="bg-purple-300 rounded-3xl p-6 md:p-8 border-4 border-black">
              <div className="text-4xl md:text-6xl mb-4">3️⃣</div>
              <h3 className="text-xl md:text-2xl font-black text-black mb-4">BLOB TAKES OVER TWITTER</h3>
              <p className="text-black font-bold text-sm md:text-base">World domination through memes</p>
            </div>
            
            <div className="bg-orange-400 rounded-3xl p-6 md:p-8 border-4 border-black">
              <div className="text-4xl md:text-6xl mb-4">4️⃣</div>
              <h3 className="text-xl md:text-2xl font-black text-black mb-4">CEX LISTING OR BLOB TANTRUM</h3>
              <p className="text-black font-bold text-sm md:text-base">We moon or we throw biggest tantrum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black text-black mb-12 leading-none border-8 border-purple-600 inline-block px-8 py-4 bg-purple-600/20 rounded-3xl">
            TOKENOMICS
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Token Distribution */}
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-black mb-8">TOKEN DISTRIBUTION 📊</h3>
              
              {/* Distribution Cards */}
              <div className="space-y-4">
                <div className="bg-blue-500 rounded-2xl p-6 border-4 border-black">
                  <div className="flex justify-between items-center text-white">
                    <span className="text-2xl font-black">85% LP</span>
                    <span className="text-lg font-bold">LIQUIDITY POOL</span>
                  </div>
                </div>
                
                <div className="bg-pink-500 rounded-2xl p-6 border-4 border-black">
                  <div className="flex justify-between items-center text-white">
                    <span className="text-2xl font-black">10% TREASURY</span>
                    <span className="text-lg font-bold">DEVELOPMENT FUND</span>
                  </div>
                </div>
                
                <div className="bg-cyan-400 rounded-2xl p-6 border-4 border-black">
                  <div className="flex justify-between items-center text-black">
                    <span className="text-2xl font-black">5% CEX WALLET</span>
                    <span className="text-lg font-bold">EXCHANGE LISTINGS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-black mb-8">SECURITY FEATURES 🔒</h3>
              
              <div className="space-y-4">
                <div className="bg-green-400 rounded-2xl p-8 border-4 border-black">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <h4 className="text-2xl font-black text-black mb-2">FAIR LAUNCH</h4>
                    <p className="text-black font-bold">No presale, no insider allocation!</p>
                  </div>
                </div>
                
                <div className="bg-orange-400 rounded-2xl p-8 border-4 border-black">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔐</div>
                    <h4 className="text-2xl font-black text-black mb-2">LP WILL BE LOCKED</h4>
                    <p className="text-black font-bold">Liquidity will be secured for safety!</p>
                  </div>
                </div>
                
                <div className="bg-purple-300 rounded-2xl p-8 border-4 border-black">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🟣</div>
                    <h4 className="text-2xl font-black text-black mb-2">TOTAL SUPPLY</h4>
                    <p className="text-2xl font-black text-black">1,000,000,000 WOMP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-black/90 rounded-3xl p-8 border-4 border-purple-600">
            <h3 className="text-3xl font-black text-white mb-4">WOMP ECONOMICS 💰</h3>
            <p className="text-white font-bold text-lg leading-relaxed">
              Fair launch with maximum transparency! No presale, no team allocation, just pure community-driven blob power. 
              The majority goes straight to liquidity to ensure stable trading for all blob enthusiasts! 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Blobpaper Section */}
      <section className="py-20 px-4 bg-purple-400">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black text-black mb-12 leading-none border-8 border-orange-400 inline-block px-8 py-4 bg-orange-400/20 rounded-3xl">
            BLOBPAPER
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-12 border-4 border-black">
              <h3 className="text-4xl font-black text-black mb-8">WOMP IS A STATE OF MIND 🧠</h3>
              <p className="text-xl text-black font-bold leading-relaxed mb-6">
                Not just a token, not just a meme, WOMP transcends the boundaries of traditional cryptocurrency to become a philosophical movement.
              </p>
              <p className="text-lg text-black font-bold leading-relaxed">
                When you hold WOMP, you don&apos;t just hold tokens - you hold the essence of blob consciousness itself.
              </p>
            </div>
            
            <div className="bg-orange-300 rounded-3xl p-12 border-4 border-black">
              <h3 className="text-4xl font-black text-black mb-8">PROOF OF BLOB (POB) 🟣</h3>
              <p className="text-xl text-black font-bold leading-relaxed mb-6">
                Revolutionary consensus mechanism based entirely on slime viscosity and wobble frequency.
              </p>
              <p className="text-lg text-black font-bold leading-relaxed">
                Instead of mining or staking, validators must prove their blobness through rigorous jiggle tests.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/blobpaper">
              <Button variant="outline" size="large" className="text-black border-black hover:bg-black hover:text-white font-black">
                <span className="flex items-center">
                  <span className="mr-2">📄</span>
                  READ FULL BLOBPAPER
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 