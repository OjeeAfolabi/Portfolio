import { ArrowRight } from "lucide-react";
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2">Oward E-commerce</h3>
            <p className="text-gray-400 mb-4">
              Full e-commerce web application with real-time amazon api
              integration
            </p>
            <div>
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Realtime Amazon API",
              ].map((tech, key) => (
                <span
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all "
                  key={key}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center text-blue-400 hover:text-blue-300 transition-colors my-4">
                <a href="">View Project </a>
                <span>
                  <ArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
