export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "The Blob Awakening",
      status: "completed",
      items: [
        "WOMP Token Launch",
        "Community Building", 
        "Initial Marketing Push",
        "Website & Socials Launch"
      ],
      emoji: "🎉"
    },
    {
      phase: "Phase 2", 
      title: "Growing the Ecosystem",
      status: "current",
      items: [
        "DEX Listings",
        "Partnerships with Influencers",
        "WOMP Staking Platform",
        "Mobile App Development"
      ],
      emoji: "🚀"
    },
    {
      phase: "Phase 3",
      title: "Blob Domination",
      status: "upcoming",
      items: [
        "NFT Marketplace",
        "WOMP Gaming Platform", 
        "Major Exchange Listings",
        "Metaverse Integration"
      ],
      emoji: "👑"
    },
    {
      phase: "Phase 4",
      title: "The Ultimate Womp",
      status: "future",
      items: [
        "Cross-chain Bridge",
        "DAO Governance",
        "WOMP University",
        "Global Expansion"
      ],
      emoji: "🌍"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-purple-400 to-purple-600';
      case 'current':
        return 'from-orange-400 to-orange-600';
      case 'upcoming':
        return 'from-purple-500 to-orange-500';
      default:
        return 'from-orange-500 to-purple-500';
    }
  };

  const getStatusBorder = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-purple-400';
      case 'current':
        return 'border-orange-400';
      case 'upcoming':
        return 'border-purple-400';
      default:
        return 'border-orange-400';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-300 to-orange-300 bg-clip-text text-transparent">WOMP</span> Roadmap
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Our journey to become the most beloved blob in the crypto universe!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`relative bg-white/20 rounded-2xl p-6 border-4 ${getStatusBorder(phase.status)} ${
                phase.status === 'current' ? 'animate-pulse' : ''
              } transition-all duration-300 hover:transform hover:scale-105`}
            >
              {/* Phase Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{phase.emoji}</div>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)} text-white font-bold text-sm mb-2`}>
                  {phase.phase}
                </div>
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
              </div>

              {/* Phase Items */}
              <div className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-2">
                    <div className="text-sm text-purple-100 leading-relaxed">{item}</div>
                  </div>
                ))}
              </div>

              {/* Status Indicator */}
              {phase.status === 'current' && (
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                  CURRENT
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-white/10 rounded-2xl p-8 border-2 border-purple-300">
          <h3 className="text-3xl font-bold text-white mb-4">
            Join the Journey!
          </h3>
          <p className="text-purple-100 text-lg mb-6">
            Every great adventure starts with a single womp. Be part of our story!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 text-orange-300">
              <span className="font-semibold">Join 5000+ WOMP holders</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-purple-300">
              <span className="font-semibold">Be an early adopter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 