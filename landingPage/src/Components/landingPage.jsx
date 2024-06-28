import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import logo from '../assets/Logo.png'; // adjust the path as necessary
import { PricingCard1 } from './pricingCard1';
import { PricingCard2 } from './pricingCard2';
import { MarqueeDemo } from './marquee';
import { ToastDemo } from './toast';
import { useMediaQuery } from 'react-responsive';

function LandingPage() {
  const pricingRef = useRef(null);
  const demoRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center" style={{height: "330vh", width: "100vw"}}>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 flex justify-start items-center py-4 px-8">
          <img src={logo} alt="Logo" className="logo rounded-lg"/>
          <div className="links flex gap-4">
            <button onClick={scrollToPricing} className="text-lg hover:text-blue-500">Pricing</button>
            <button onClick={scrollToDemo} className="text-lg hover:text-blue-500">Demo</button>
            <button onClick={scrollToDemo} className="text-lg hover:text-blue-500">Try it out</button>
          </div>
        </div>
        <h1 className={`font-bold text-center mb-4 px-4 ${isMobile ? 'text-5xl' : 'text-6xl '}`}>Book meetings in 1 click</h1>
        <p className="text-3xl text-center mb-8 px-4">are you tired of checking your calendar? us too.</p>
        <Button href="/home" className="text-2xl py-8 px-8 rounded-lg text-white hover:bg-blue-600">
            Get Started
        </Button>
      </div>
      <div ref={demoRef} className="h-screen w-screen bg-gray-100 flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-4">Demo</h2>
        <div className="w-3/4 h-3/4 bg-gray-500 flex justify-center items-center">
          <p className="text-2xl">Video Placeholder</p>
        </div>
      </div>
      <div className="bg-gray-100" style={{ height: "30vh", width: "100vw"}}>
        <MarqueeDemo/>
      </div>
      <div ref={pricingRef} className="h-screen w-screen bg-gray-100">
        
      <div className="flex flex-col justify-center items-center gap-10 h-full">
        <div className="flex justify-center items-center gap-10">
          <PricingCard1/>
          {!isMobile && <PricingCard2/>}
        </div>
      </div>
      </div>
      <ToastDemo/>
    </div>
  );
}

export default LandingPage;
