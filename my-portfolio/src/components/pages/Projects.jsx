import React from "react";
import { ArrowRight } from "lucide-react";
import Scroll from "../Scroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <Scroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Oward</h3>
              <p className="text-gray-400 mb-4">
                Fullstack e-commerce web application with real-time amazon api
                integration
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "MongoDB", "Amazon API"].map(
                  (tech, key) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all "
                      key={key}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center text-blue-400 hover:text-blue-300 transition-colors my-4">
                  <a
                    href="https://oward-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                  <span>
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">C-nema</h3>
              <p className="text-gray-400 mb-4">
                Fullstack Movie App, Web application. Sort Movies by popular movies, top rated, upcoming movies... Supporting and Playing Movie Trailer from the TMDB api. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "MongoDB"].map((tech, key) => (
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
                  <a
                    href="https://oward-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                  <span>
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Scroll>
    </section>
  );
};

export default Projects;
