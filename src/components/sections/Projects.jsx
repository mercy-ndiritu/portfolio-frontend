import { useState } from "react";
import { ArrowRight } from 'lucide-react'
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A responsive e-commerce platform with cart functionality and payment integration.',
      image: '/local-bounty.png',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'Supabase'],
      link : 'https://local-bounty-mart.vercel.app/'
    },
    {
      id: 2,
      title: 'IAMIS',
      description: 'A full-stack microservice web application that streamlines the student industrial attachment process.',
      image: '/iamis.png',
      category: 'Web Apps',
      technologies: ['React ', 'ExpressJs', 'Docker','Supabase'],
      link : 'https://vimeo.com/1085697024/70b3e15a02?share=copy'
    },
    {
      id: 3,
      title: 'Company Website',
      description: 'A responsive company website built to present services, contact details, and business information with a clean, modern design.',
      image: '/intellicode.png',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link : 'https://portfolio-intellicode.vercel.app/'
    },
     {
      id: 4,
      title: 'TotalEnergies Rebrand',
      description: 'A modern rebranding of the TotalEnergies company website, featuring an intuitive UI, responsive layout, and CMS integration for dynamic content management.',
      image: '/total.png',
      category: 'Web Development',
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      link : 'https://totalenergies-399c0.web.app/'
    },
    {
      id: 4,
      title: 'WeatherWise',
      description: 'A sleek and user-friendly weather app that provides real-time weather updates, forecasts, and allows users to save their favorite cities for quick access.',
      image: '/weatherwise.png',
      category: 'Web Application',
      technologies: ['React', 'Tailwind CSS', 'OpenWeatherMap API'],
      link: 'https://weather-app-frontend-rose-six.vercel.app/'
    },

  ];
  return (
    <section id="projects" className="min-h-screen flex items-center relative px-4 md:px-12 lg:px-20">
    <RevealOnScroll>
     <main className="container mx-auto">
        {/* Projects Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="flex justify-center items-center">
            <div className="w-20 h-0.5 bg-purple-500 mr-4"></div>
            <p className="text-gray-400">What I've built</p>
            <div className="w-20 h-0.5 bg-purple-500 ml-4"></div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-sm px-3 py-1 bg-gray-700 rounded-full text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300"
                >
                  View Project <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      </RevealOnScroll>
    </section>
  );
}