export const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-12 lg:px-20">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="flex items-center justify-center">
            <div className="h-px bg-purple-500 w-16"></div>
            <p className="mx-4 text-gray-400">Who I am</p>
            <div className="h-px bg-purple-500 w-16"></div>
          </div>
        </div>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-500 mb-6">Get to know me!</h3>
            
            <p className="text-gray-300 mb-4">
              I'm a <span className="font-bold text-white">Frontend Web Developer</span> with a passion for building beautiful, 
              functional, and user-centered digital experiences. 
            </p>
            
            <p className="text-gray-300 mb-4">
              I have a wide range of skills that include back-end development (Node.js, PHP, 
              ExpressJs), design (working closely with designers), front-end development 
              (HTML5, CSS3, JS, React,), database management, and project 
              management.
            </p>
            
            <p className="text-gray-300 mb-8">
              I'm open to Job opportunities where I can contribute, learn and grow. If you 
              have a good opportunity that matches my skills and experience then don't 
              hesitate to contact me.
            </p>
            
            <a href="#contact" className="inline-block bg-[#9161e3] text-white py-3 px-8 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_4px_20px_#9161e3a0]">
              Contact Me
            </a>
          </div>
          
          {/* Right Column - Skills */}
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-500 mb-6">My Skills</h3>
            
            {/* Skill Bar - HTML/CSS */}
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">HTML/CSS</span>
                <span className="text-purple-400">90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            {/* Skill Bar - JavaScript */}
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">JavaScript</span>
                <span className="text-purple-400">85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            {/* Skill Bar - React.js */}
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">React.js</span>
                <span className="text-purple-400">88%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
            
            {/* Skill Bar - Node.js */}
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Node.js</span>
                <span className="text-purple-400">75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            {/* Skill Bar - UI/UX Design */}
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">UI/UX Design</span>
                <span className="text-purple-400">70%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            {/* Skill Bar - Responsive Design */}
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Responsive Design</span>
                <span className="text-purple-400">95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};