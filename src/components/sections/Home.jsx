import { useState, useEffect } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Home = () => {
  // State for typing animation
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Frontend Developer";
  const typingSpeed = 200; // milliseconds per character
  const eraseSpeed = 100; // milliseconds per character
  const delayBeforeErase = 2000; // milliseconds to wait before erasing
  const delayBeforeTyping = 800; // milliseconds to wait before typing again

  // Handle typing effect
  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      if (text !== fullText) {
        // Still typing
        timeout = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Typing complete, wait before erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBeforeErase);
      }
    } else {
      if (text === "") {
        // Erasing complete, wait before typing again
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, delayBeforeTyping);
      } else {
        // Still erasing
        timeout = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, eraseSpeed);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <section id="home" className="min-h-screen flex items-center relative px-4 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="w-full md:w-1/2 text-left z-10 md:pr-8">
          <div className="flex items-center justify-start">
            <div className="h-px bg-purple-500 w-16"></div>
            <div className="mx-4 text-gray-400 relative h-6 overflow-hidden">
              {/* Typing animation container */}
              <span className="inline-block relative">
                {text}
                <span className="absolute top-0 right-[-4px] w-[2px] h-full bg-purple-500 animate-blink"></span>
              </span>
            </div>
            <div className="h-px bg-purple-500 w-16"></div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-left">
            <span className="text-gray-100">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Mercy Ndiritu
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's create something amazing together.
          </p>
          
          <div className="flex space-x-4 mb-12">
            <a href="#projects" className="bg-[#9161e3] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_4px_20px_#9161e3a0] animate-bounce-subtle">
              View Projects
            </a>
            <a href="#contact" className="border border-[#9161e3] text-[#9161e3] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_#9161e3a0] hover:bg-[#9161e3] hover:text-white">
              Contact Me
            </a>
          </div>
        
          {/* Social Media Icons */}
          <div className="flex mt-8 space-x-4">
            <a 
              href="https://www.linkedin.com/in/mercy-ndiritu/" 
              className="w-10 h-10 rounded-full border border-purple-400 flex items-center justify-center text-purple-400 hover:bg-purple-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/mercy-ndiritu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-purple-400 flex items-center justify-center text-purple-400 hover:bg-purple-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 
                1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 
                22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-purple-400 flex items-center justify-center text-purple-400 hover:bg-purple-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Right side image */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-100 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-spin-slow"></div>
            <img
              src="/profile.jpeg" 
              alt="Your Photo"
              className="w-full h-full object-cover rounded-full"
            />
            
            {/* Availability badge */}
            <div className="absolute -bottom-4 right-0 bg-white dark:bg-gray-800 py-2 px-4 rounded-lg shadow-md text-sm font-medium">
              Currently Available for Work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};