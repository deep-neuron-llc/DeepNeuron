import React from 'react';
import Link from 'next/link';
import {
  Brain,
  Cog,
  Rocket,
  BrickWall,
  MessageSquare,
  Eye,
  Compass,
  Wrench,
  TrendingUp,
} from 'lucide-react';
import { MainNavigation } from "@/components/main-navigation";

// This is the new ServicesPage component
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Main content container */}
      <main className="relative">
        {/* Background elements */}
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
        
        {/* Header section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-4">
              Our AI Services
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              We offer tailored AI solutions designed to solve real business problems—from strategy to production.
            </p>
        </div>

        {/* Our AI Services Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {/* AI Strategy Consulting */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Strategy Consulting</h3>
                <p className="text-gray-400">Identify impactful AI opportunities and design roadmaps that drive ROI.</p>
              </div>

              {/* ML Model Development */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Cog className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">ML Model Development</h3>
                <p className="text-gray-400">We develop machine learning models customized to your unique business needs.</p>
              </div>

              {/* MLOps & Deployment */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">MLOps & Deployment</h3>
                <p className="text-gray-400">Deploy, monitor, and scale models with robust CI/CD and cloud infrastructure.</p>
              </div>
              
              {/* Data Engineering */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <BrickWall className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Data Engineering</h3>
                <p className="text-gray-400">Build strong data pipelines and storage solutions for scalable analytics.</p>
              </div>

              {/* NLP Solutions */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-red-500/10 to-transparent border border-red-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">NLP Solutions</h3>
                <p className="text-gray-400">Extract insights and automate communication using cutting-edge NLP models.</p>
              </div>

              {/* Computer Vision */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-teal-500/10 to-transparent border border-teal-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Computer Vision</h3>
                <p className="text-gray-400">Enable visual understanding through image recognition and object detection.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* How We Work Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-32">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
              <p className="text-gray-300 text-lg">Our four-step process for successful AI projects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Discovery */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
                <p className="text-gray-400">We analyze your goals, processes, and challenges.</p>
              </div>

              {/* Solution Design */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Solution Design</h3>
                <p className="text-gray-400">Design tailored AI models or data workflows.</p>
              </div>

              {/* Implementation */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
                <p className="text-gray-400">Develop and deploy scalable AI solutions.</p>
              </div>

              {/* Support & Scale */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Support & Scale</h3>
                <p className="text-gray-400">Monitor, retrain, and continuously optimize.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
