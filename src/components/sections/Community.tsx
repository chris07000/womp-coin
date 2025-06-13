import Button from '@/components/ui/Button';

export default function Community() {
  const socialPlatforms = [
    {
      name: "Twitter",
      icon: "🐦",
      followers: "25.5K",
      description: "Daily updates & community content",
      color: "from-purple-400 to-purple-600",
      link: "#"
    },
    {
      name: "Telegram",
      icon: "💬", 
      followers: "18.2K",
      description: "Active community chat",
      color: "from-orange-400 to-orange-600",
      link: "#"
    },
    {
      name: "Discord",
      icon: "🎮",
      followers: "12.8K",
      description: "Gaming & discussions",
      color: "from-purple-500 to-orange-500", 
      link: "#"
    },
    {
      name: "Reddit",
      icon: "📱",
      followers: "8.5K",
      description: "Community discussions",
      color: "from-orange-500 to-purple-500",
      link: "#"
    }
  ];

  const communityStats = [
    { label: "Total Members", value: "65K+", icon: "👥" },
    { label: "Daily Messages", value: "2.5K", icon: "💬" },
    { label: "Countries", value: "89", icon: "🌍" },
    { label: "Community Score", value: "98%", icon: "⭐" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join the <span className="bg-gradient-to-r from-purple-300 to-orange-300 bg-clip-text text-transparent">WOMP</span> Community
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Connect with fellow WOMP enthusiasts from around the world. Share ideas, strategies, and be part of something special!
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center bg-white/20 rounded-xl p-6 border-2 border-purple-300 hover:border-orange-300 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-orange-300 mb-1">{stat.value}</div>
              <div className="text-purple-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => (
            <div 
              key={index}
              className="bg-white/20 rounded-2xl p-8 border-2 border-purple-300 hover:border-orange-300 transition-all duration-300 hover:transform hover:scale-105 text-center group cursor-pointer"
            >
              <div className="text-6xl mb-4 group-hover:animate-bounce">{platform.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${platform.color} text-white font-bold text-sm mb-3`}>
                {platform.followers} followers
              </div>
              <p className="text-purple-100 text-sm mb-6">{platform.description}</p>
              <Button 
                variant="outline" 
                size="small" 
                className="w-full group-hover:bg-white group-hover:text-purple-900"
              >
                Join Now
              </Button>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600/30 to-orange-600/30 rounded-2xl p-8 border-2 border-purple-300 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-purple-100 mb-6">
              Get the latest WOMP news, updates, and exclusive content delivered to your inbox!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/20 border-2 border-purple-300 text-white placeholder-purple-300 focus:outline-none focus:border-orange-400"
              />
              <Button variant="primary" className="sm:px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-purple-300 text-sm mt-4">
              No spam, just pure WOMP energy! Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold text-white mb-6">Community Guidelines</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 border-2 border-purple-300 hover:border-purple-400 transition-all duration-300">
              <div className="text-3xl mb-3">💜</div>
              <h5 className="text-lg font-semibold text-white mb-2">Be Respectful</h5>
              <p className="text-purple-200 text-sm">Treat all community members with respect and kindness</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border-2 border-purple-300 hover:border-purple-400 transition-all duration-300">
              <div className="text-3xl mb-3">🤝</div>
              <h5 className="text-lg font-semibold text-white mb-2">Help Others</h5>
              <p className="text-purple-200 text-sm">Share knowledge and help newcomers join the community</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border-2 border-purple-300 hover:border-purple-400 transition-all duration-300">
              <div className="text-3xl mb-3">🧡</div>
              <h5 className="text-lg font-semibold text-white mb-2">Have Fun</h5>
              <p className="text-purple-200 text-sm">Enjoy the journey and embrace the WOMP lifestyle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 