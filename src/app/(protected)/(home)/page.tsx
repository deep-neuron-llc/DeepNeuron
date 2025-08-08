import { MainNavigation } from "@/components/main-navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <main className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6 lg:px-8">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DN</span>
                </div>
                <span className="text-white font-semibold text-xl">Deep Neuron</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
                <MainNavigation />
            </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-purple-500/10 text-purple-300 ring-1 ring-inset ring-purple-500/20 mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Coming Soon - 2025
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Unlock the Power of AI to Transform Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI</span>
              <br />Business
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              We help companies like yours design, develop, and deploy cutting-edge AI solutions that drive results. From idea to production, we’re your partner in intelligent innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-lg">
                📅 Schedule a Free AI Consultation
              </button>
            </div>

            {/* Launch Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-400">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">3+</div>
                <div className="text-gray-400">Data Product</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">Ai Agents Developed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-32">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">We Deliver AI That Works – For Your Business</h2>
              <p className="text-gray-300 text-lg">Revolutionary features that will transform how you work with AI</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2"> End-to-End AI Strategy & Development</h3>
                <p className="text-gray-400">Revolutionary algorithms that will optimize neural networks like never before</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Scalable MLOps & Cloud Integration</h3>
                <p className="text-gray-400">Next-generation GPU acceleration with breakthrough distributed computing</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Success Across Industries</h3>
                <p className="text-gray-400">Built for scale with enterprise-grade security and reliability from day one</p>
              </div>
            </div>
            <div className="text-center mb-12 gap-8 mt-8">
              <h2 className="text-1xl md:text-1xl font-bold text-white mb-4">“Empowering Minds with AI Skills | Building Smart AI Solutions for Real-World Impact”</h2>
              <p className="text-gray-300 text-lg">— Co-Founder, Deep-Neuron</p>
            </div>
          </div>
        </div>
        {/* Industries We Serve */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-32">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-gray-300 text-lg">From predicting patient outcomes to optimizing supply chains, our solutions are tailored for your industry.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {/* Healthcare */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16M11 12h2M11 20h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Healthcare</h3>
              </div>

              {/* Finance */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8v4m0 4v4m-5.45-5.5a1.868 1.868 0 010-2.884m9.9 0a1.868 1.868 0 000 2.884M12 12a1.875 1.875 0 01-1.875-1.875M12 12a1.875 1.875 0 001.875-1.875M12 12a1.875 1.875 0 01-1.875 1.875M12 12a1.875 1.875 0 001.875 1.875m-5.32 5.32l-1.8-1.8C9.55 17.55 9 16.8 9 16a2 2 0 012-2h2a2 2 0 012 2c0 .8-.55 1.55-1.47 2.47l-1.8 1.8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Finance</h3>
              </div>

              {/* Retail */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l-2 2-2-2m5 0h6a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V6h0zm6 0h2a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V8a2 2 0 012-2h2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Retail</h3>
              </div>

              {/* Logistics */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.485 9.49 5 8 5a6 6 0 000 12h4m-4 5.253V20M8 12h4m9-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h4m3-12h12v4H12v-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Logistics</h3>
              </div>

              {/* Manufacturing */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-red-500/10 to-transparent border border-red-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Manufacturing</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pb-32">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay in the Loop</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Be the first to know when Deep Neuron launches. Get exclusive early access, updates, and behind-the-scenes content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all whitespace-nowrap">
                Join Waitlist
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Join 1,000+ developers already on our waitlist. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}