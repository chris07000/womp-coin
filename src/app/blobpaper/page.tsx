import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function BlobpaperPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-400 to-orange-400 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-8">
            <Button variant="outline" size="medium" className="text-white border-white font-black">
              ← BACK TO WOMP
            </Button>
          </Link>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 border-8 border-black inline-block px-8 py-4 bg-black/20 rounded-3xl">
            OFFICIAL BLOBPAPER
          </h1>
          
          <p className="text-2xl font-black text-white bg-black/30 rounded-xl p-4 max-w-2xl mx-auto">
            EXTREMELY SERIOUS TECHNICAL DOCUMENTATION
          </p>
        </div>

        {/* Giant Blob */}
        <div className="text-center mb-16">
          <div className="w-96 h-96 mx-auto relative bg-white/20 rounded-full p-8 border-8 border-black">
            <Image
              src="/images/blob.png"
              alt="The Ultimate WOMP Blob - Technical Specimen"
              width={320}
              height={320}
              className="w-full h-full object-contain animate-blob-pulse"
              priority
            />
          </div>
          <p className="text-lg font-bold text-white mt-4 bg-black/30 rounded-lg p-3 max-w-md mx-auto">
            Fig. 1: WOMP in its natural habitat (very round)
          </p>
        </div>

        {/* Absurd Technical Content */}
        <div className="space-y-12">
          {/* Abstract */}
          <div className="bg-white rounded-3xl p-8 border-4 border-black">
            <h2 className="text-4xl font-black text-black mb-6">ABSTRACT 🤓</h2>
            <p className="text-lg text-black font-bold leading-relaxed mb-4">
              WOMP represents a paradigm-shifting approach to blockchain technology by completely ignoring all best practices and embracing maximum chaos. This paper presents our groundbreaking "Proof of Blob" consensus mechanism, which operates on the fundamental principle that if it jiggles, it's valid.
            </p>
            <p className="text-lg text-black font-bold leading-relaxed">
              Through extensive research (5 minutes on Google), we have determined that WOMP is indeed a blob, and blobs are scientifically proven to be round-ish.
            </p>
          </div>

          {/* Technical Specs */}
          <div className="bg-orange-300 rounded-3xl p-8 border-4 border-black">
            <h2 className="text-4xl font-black text-black mb-6">TECHNICAL SPECIFICATIONS 🔬</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-black text-black mb-3">BLOB PROPERTIES:</h3>
                <ul className="text-black font-bold space-y-2">
                  <li>• Roundness Level: Maximum</li>
                  <li>• Jiggle Factor: 9000+</li>
                  <li>• Wobble Frequency: 420 Hz</li>
                  <li>• Meme Density: Infinite</li>
                  <li>• Brain Cells Required: 0</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-black text-black mb-3">NETWORK STATS:</h3>
                <ul className="text-black font-bold space-y-2">
                  <li>• Transactions Per Womp: 69</li>
                  <li>• Block Time: When blob feels like it</li>
                  <li>• Energy Consumption: 1 donut</li>
                  <li>• Security Level: Trust me bro</li>
                  <li>• Scalability: Goes up sometimes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Proof of Blob */}
          <div className="bg-purple-300 rounded-3xl p-8 border-4 border-black">
            <h2 className="text-4xl font-black text-black mb-6">PROOF OF BLOB (POB) ALGORITHM 🟣</h2>
            <div className="bg-black/20 rounded-2xl p-6 mb-6">
              <code className="text-black font-bold text-lg block whitespace-pre-wrap">
{`function validateBlob(blob) {
  if (blob.isRound() && blob.canWobble()) {
    return "VERY BLOB, MUCH VALID";
  }
  return "NOT BLOB ENOUGH, TRY HARDER";
}

// Advanced jiggle detection
if (blob.jiggleLevel > 9000) {
  mintWompTokens(1000000);
  sendToMoon();
}`}
              </code>
            </div>
            <p className="text-lg text-black font-bold">
              The POB algorithm ensures maximum decentralization by requiring validators to prove their blobness through rigorous scientific testing involving jiggling, wobbling, and making "womp womp" sounds.
            </p>
          </div>

          {/* Tokenomics Section */}
          <div className="bg-cyan-300 rounded-3xl p-8 border-4 border-black">
            <h2 className="text-4xl font-black text-black mb-6">BLOBONOMICS 📊</h2>
            <p className="text-lg text-black font-bold leading-relaxed mb-4">
              After careful consideration by our team of highly qualified blob economists (who are actually just blobs that learned to count), we have determined the optimal distribution strategy:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-400 rounded-xl p-4 border-2 border-black">
                <div className="text-2xl font-black text-black mb-2">85%</div>
                <div className="text-black font-bold">LIQUIDITY POOL</div>
                <div className="text-sm text-black">For maximum slippage reduction</div>
              </div>
              <div className="bg-pink-400 rounded-xl p-4 border-2 border-black">
                <div className="text-2xl font-black text-black mb-2">10%</div>
                <div className="text-black font-bold">TREASURY</div>
                <div className="text-sm text-black">For emergency blob food</div>
              </div>
              <div className="bg-yellow-400 rounded-xl p-4 border-2 border-black">
                <div className="text-2xl font-black text-black mb-2">5%</div>
                <div className="text-black font-bold">CEX WALLET</div>
                <div className="text-sm text-black">For bribing exchanges</div>
              </div>
            </div>
            <p className="text-lg text-black font-bold leading-relaxed">
              This distribution ensures maximum fairness while maintaining optimal blob-to-human ratio. No presale because we forgot how to make one. No team allocation because we are all blobs and blobs don't need money, just vibes.
            </p>
          </div>

          {/* Economic Model */}
          <div className="bg-white rounded-3xl p-8 border-4 border-black">
            <h2 className="text-4xl font-black text-black mb-6">ECONOMIC MODEL 💰</h2>
            <p className="text-lg text-black font-bold leading-relaxed mb-4">
              WOMP operates on a revolutionary economic principle we call "Vibes-Based Economics" (VBE). The token value is directly correlated to how much the community believes in the blob.
            </p>
            <div className="bg-orange-100 rounded-xl p-4 border-2 border-orange-400">
              <p className="text-black font-black text-center text-xl">
                TOKEN VALUE = GOOD VIBES × MEME MAGIC ÷ BRAIN CELLS USED
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-orange-400 rounded-3xl p-8 border-4 border-black">
            <h2 className="text-4xl font-black text-black mb-6">CONCLUSION 🎯</h2>
            <p className="text-xl text-black font-bold leading-relaxed">
              In conclusion, WOMP is a blob. Blobs are round. Round things roll. Therefore, WOMP will roll to the moon. This is not financial advice, this is blob science.
            </p>
            <p className="text-lg text-black font-bold mt-4 text-center">
              WOMP WOMP! 🚀🟣
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-16">
          <Link href="/">
            <Button variant="primary" size="large" className="font-black">
              BACK TO THE BLOB
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 