import React, { useState } from 'react';
import { MessageCircle, ShieldCheck, Stethoscope, Activity, ArrowRight, Brain, Lock, UserRound, CheckCircle } from 'lucide-react';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [triageStatus, setTriageStatus] = useState('idle'); // idle, thinking, complete

  const handleTriage = () => {
    if (triageStatus === 'thinking' || triageStatus === 'complete') return;
    
    setTriageStatus('thinking');
    
    // Simulate reasoning step
    setTimeout(() => {
      setTriageStatus('complete');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#2DD4BF] selection:text-white">
      {/* Navigation / Header */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tighter flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#2DD4BF]"></span>
            mili
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#doctors" className="hover:text-slate-900 transition-colors">Safety</a>
            <a href="#doctors" className="hover:text-slate-900 transition-colors">Doctors</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="about" className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          World-Class Primary Care.<br />
          <span className="text-[#2DD4BF]">Free</span> <span className="text-slate-400">for Every Indian.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Mili is your AI doctor. Verified by top specialists. <br className="hidden md:block"/> 
          Always private. <span className="font-semibold text-slate-900">Always 100% Free.</span>
        </p>
        
        <button 
          onClick={() => setIsChatOpen(true)}
          className="bg-[#2DD4BF] hover:bg-[#26b8a5] text-white text-lg font-medium px-8 py-4 rounded-2xl shadow-lg shadow-[#2DD4BF]/20 transition-all hover:scale-[1.02] flex items-center gap-2 mx-auto cursor-pointer"
        >
          Start Free Care
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Lotus Trust Bar */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-6 font-semibold">Built with India's Health Stack</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-semibold text-sm">ABDM Sandbox</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              <span className="font-semibold text-sm">MedGemma 1.5</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              <span className="font-semibold text-sm">IndiaAI</span>
            </div>
          </div>
        </div>
      </main>

      {/* Doctor Handover Section */}
      <section id="doctors" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Stethoscope className="w-8 h-8 text-[#2DD4BF]" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Powered by Real Doctors</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Mili's diagnosis engine is supervised by India's top medical experts. <br/>
              Every clinical pathway is verified for safety and accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Anita Desai", title: "Chief Medical Officer", credential: "MBBS, MD (Internal Medicine)", sub: "Ex-AIIMS Delhi • 18 Years Exp." },
              { name: "Dr. Arjun Mehta", title: "General Physician", credential: "MBBS, DNB (Family Medicine)", sub: "Gold Medalist • 12 Years Exp." },
              { name: "Dr. Sarah Khan", title: "Emergency Specialist", credential: "MBBS, MEM (GWU, USA)", sub: "Apollo Hospitals • 9 Years Exp." }
            ].map((doc, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-400">
                  <UserRound className="w-8 h-8" />
                </div>
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                    {doc.name}
                    <CheckCircle className="w-4 h-4 text-[#2DD4BF] fill-[#2DD4BF]/10" />
                  </h3>
                  <p className="text-[#2DD4BF] font-medium text-sm">{doc.title}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-500 text-sm font-medium">{doc.credential}</p>
                  <p className="text-slate-400 text-xs uppercase tracking-wide">{doc.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-100 shadow-sm text-sm text-slate-600">
              <Lock className="w-4 h-4 text-[#2DD4BF]" />
              <span>All consultations are clinically reviewed & 256-bit encrypted.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://mili.nxtwaves.in" className="hover:text-slate-600">mili.nxtwaves.in</a>
          <a href="https://nxtwaves.in" className="hover:text-slate-600">NxtWaves.in</a>
        </div>
        <div className="inline-flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full text-xs font-medium text-slate-500">
          <ShieldCheck className="w-3 h-3" />
          Data Privacy First
        </div>
      </footer>

      {/* Chat Interface (Floating / Modal) */}
      {isChatOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-none p-4 sm:p-6">
          {/* Backdrop */}
          <div 
             className="absolute inset-0 bg-white/60 backdrop-blur-sm pointer-events-auto transition-opacity duration-300" 
             onClick={() => setIsChatOpen(false)}
          ></div>
          
          <div className="bg-white pointer-events-auto w-full max-w-lg h-[80vh] sm:h-[600px] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 border border-slate-100 relative">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-50 flex items-center justify-between bg-white z-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse"></div>
                <div>
                  <h3 className="font-semibold text-slate-900">Mili AI</h3>
                  <p className="text-xs text-slate-500">Medical Triage Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-2 hover:bg-slate-50 rounded-full text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-slate-50/50 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">M</div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[85%]">
                  <p className="text-slate-700 leading-relaxed">
                    Hello. I'm Mili. I can help assess your symptoms and guide you to the right care. <br/><br/>
                    Please tell me what brings you here today?
                  </p>
                </div>
              </div>

              {triageStatus === 'thinking' && (
                <div className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">M</div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-[#2DD4BF] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    <span className="text-xs text-slate-400 ml-2 font-medium animate-pulse">Reasoning...</span>
                  </div>
                </div>
              )}

              {triageStatus === 'complete' && (
                <div className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">M</div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[85%]">
                    <p className="text-slate-700 leading-relaxed">
                      Based on your input, I've prepared a preliminary triage summary. A doctor is available to review this immediately.
                    </p>
                    <button className="mt-4 text-sm text-[#2DD4BF] font-semibold hover:underline block cursor-pointer">
                      View Clinical Summary &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-50">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type your symptoms..." 
                  className="w-full pl-4 pr-12 py-3 bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-[#2DD4BF]/20 focus:outline-none text-slate-900 placeholder:text-slate-400 transition-all"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleTriage();
                  }}
                />
                <button 
                  onClick={handleTriage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-lg text-[#2DD4BF] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating Chat Button (Bottom Right) */}
      {!isChatOpen && (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#2DD4BF] hover:bg-[#26b8a5] text-white rounded-full shadow-lg shadow-[#2DD4BF]/30 flex items-center justify-center transition-transform hover:scale-110 z-40 cursor-pointer"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
