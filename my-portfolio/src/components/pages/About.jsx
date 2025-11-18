import React from "react";
import {
  Briefcase,
  GraduationCap,
  Image,
  Monitor,
  Server,
  Shield,
} from "lucide-react";
import Scroll from "../Scroll";

const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Tailwind CSS",
  ];
  const backendSkills = ["Node.js", "Express", "MongoDB", "Firebase"];
  const graphicDesignSkills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Canva",
  ];
  const others = ["Git", "GitHub", "REST APIs", "JWT", "OAuth"];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-start gap-3 py-8"
    >
      <Scroll>
        <div className="max-w-3xl w-full mx-auto px-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2  from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all w-full max-w-3xl mx-auto">
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                <Monitor className="text-[#FCA311]" />
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                <Server className="text-[#FCA311]" />
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                <Image className="text-[#FCA311]" />
                Graphics Design and UI
              </h3>
              <div className="flex flex-wrap gap-2">
                {graphicDesignSkills.map((tech, key) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                <Shield className="text-[#FCA311]" />
                Security & Others
              </h3>
              <div className="flex flex-wrap gap-2">
                {others.map((tech, key) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full mx-auto md:px-32">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
              <GraduationCap className="text-[#FCA311]" /> Education
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ">
              <li>
                <strong>Higher National Diploma in Computer Science</strong>
              </li>
              <li>
                Relevant Courses: Fullstack Javascript Web Development
                Certification Course
              </li>
              <li>HSK Confucius Institute : Chinese Language Proficiency</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <Briefcase className="text-[#FCA311]" /> Work Experience
            </h3>
            <div className="space-y-4 text-gray-300 ">
              <div>
                <h4 className="font-semibold">
                  Fullstack Web Developer at GOMYCODE (Dec. 2023 - Jun. 2024)
                  <span className="text-[#FCA311]"> Ikeja, Lagos</span>
                </h4>
                <p>
                  Developed and Deployed a Fullstack E-commerce web application.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  Intern FrontEnd Developer at DITCOSOFT (Apr. 2025 - Sep. 2025)
                  <span className="text-[#FCA311]"> United Kingdom</span>
                </h4>
                <p>
                  Collaborated on building responsive web interfaces using React
                  and Tailwind CSS, assisted in building frontend components and
                  REST API integration
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  Fullstack Developer at QUICKGRADE (Apr. 2025 - Sep. 2025)
                  <span className="text-[#FCA311]"> Lagos, Nigeria</span>
                </h4>
                <p>
                  Design and develop a full-stack web application for managing
                  student grades and assessments, utilizing React for the
                  frontend and Node.js with Express for the backend.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  FrontEnd Developer at TRAIDR (Apr. 2025 - Sep. 2025)
                  <span className="text-[#FCA311]"> Lagos, Nigeria </span>
                </h4>
                <p>
                  Developed user-friendly web interfaces for a trading platform,
                  ensuring seamless user experience and responsiveness across
                  devices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  Graphics Designer at CHOPNATION (Nov. 2024 - March. 2025)
                  <span className="text-[#FCA311]">Texas, USA</span>
                </h4>
                <p>
                  Created visually appealing graphics and marketing materials,
                  enhancing brand identity and customer engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Scroll>
    </section>
  );
};

export default About;
