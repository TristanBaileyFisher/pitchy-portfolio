import React from "react";
import MetaBalls from "@/ReactBits/MetaBalls";
import Iridescence from "@/ReactBits/Iridescence";
import MagicBento from "@/ReactBits/Bento";
import { SignInButton, UserButton } from '@clerk/nextjs'

const HomePageHub: React.FC = () => {
    return (
        <main className="h-screen w-full relative overflow-hidden">
            {/* Navigation Bar Overlay */}
            <nav className="absolute top-0 left-0 w-full z-50 p-6">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="text-white font-bold text-xl" style={{ fontFamily: 'Molgan, sans-serif' }}>
                        SP
                    </div>
                    
                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#work" className="text-white/80 hover:text-white transition-colors text-sm tracking-wider uppercase">
                            Work
                        </a>
                        <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm tracking-wider uppercase">
                            About
                        </a>
                        <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm tracking-wider uppercase">
                            Services
                        </a>
                        <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm tracking-wider uppercase">
                            Contact
                        </a>
                    </div>
                    
                    {/* Auth / CTA */}
                    <div className="flex items-center space-x-4">
                        <SignInButton />
                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

          

            {/* Black background for base contrast */}
            <div className="absolute inset-0 z-0 bg-black"></div>

            {/* Iridescence background */}
            <div className="absolute inset-0 z-10">
                <Iridescence
                    color={[0.5, 1, 1]}
                    mouseReact={true}
                    amplitude={6}
                    speed={1.0}
                />
            </div>
            
            {/* MetaBalls as mask using blend mode */}
            <div 
                className="absolute inset-0 z-20"
                style={{ mixBlendMode: 'multiply' }}
            >
                <MetaBalls
                    color="#ffffff"
                    cursorBallColor="#ffffff"
                    cursorBallSize={1}
                    ballCount={20}
                    animationSize={10}
                    enableMouseInteraction={true}
                    enableTransparency={false}
                    hoverSmoothness={0.05}
                    clumpFactor={1}
                    speed={0.1}
                />
            </div>

            {/* Studio Pitchy Title with Smart Color Switching */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
                <h1 
                    className="text-6xl md:text-8xl font-bold tracking-widest pb-42"
                    style={{ 
                        fontFamily: 'Molgan, sans-serif',
                        color: 'white',
                        mixBlendMode: 'exclusion'
                    }}
                >
                    STUDIO PITCHY
                </h1>
                
                {/* Service Links - Styled to match theme */}
                <div className=" space-y-6 pointer-events-auto flex">
                    <a 
                        href="#graphic-design" 
                        className="block text-2xl md:text-3xl font-bold text-white/80 hover:text-white transition-all duration-300 tracking-wider uppercase backdrop-blur-sm bg-white/5 px-6 py-3 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 hover:scale-105 transform"
                        style={{ fontFamily: 'Molgan, sans-serif', mixBlendMode: 'exclusion' }}
                    >
                        GRAPHIC DESIGN
                    </a>
                    
                    <a 
                        href="#music-production" 
                        className="block text-2xl md:text-3xl font-bold text-white/80 hover:text-white transition-all duration-300 tracking-wider uppercase backdrop-blur-sm bg-white/5 px-6 py-3 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 hover:scale-105 transform"
                        style={{ fontFamily: 'Molgan, sans-serif', mixBlendMode: 'exclusion' }}
                    >
                        MUSIC PRODUCTION
                    </a>
                    
                    <a 
                        href="#web-development" 
                        className="block text-2xl md:text-3xl font-bold text-white/80 hover:text-white transition-all duration-300 tracking-wider uppercase backdrop-blur-sm bg-white/5 px-6 py-3 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 hover:scale-105 transform"
                        style={{ fontFamily: 'Molgan, sans-serif', mixBlendMode: 'exclusion' }}
                    >
                        WEB DEVELOPMENT
                    </a>
                </div>
            </div>
        </main>
    );
};

export default HomePageHub;
