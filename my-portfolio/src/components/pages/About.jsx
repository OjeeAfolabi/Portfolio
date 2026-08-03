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
    "NextJs",
    "Tailwind CSS",
    "Shadcn UI",
    "Framer Motion",
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
      className="min-h-screen flex flex-col items-center justify-start gap-3 py-"
    >
      <Scroll>
        <div className="max-w-3xl w-full mx-auto px-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2 bg-linear-to-r  from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        <div className="rounded-xl p-4 border-white/10 border hover:-translate-y-1 transition-all w-full max-w-3xl mx-auto">
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
                <strong>Ordinary National Diploma in Computer Science</strong>
              </li>
              <li>
                Relevant Courses: GoMyCode - Fullstack Javascript Web
                Development Certification Course
              </li>
              <li>
                HSK Confucius Institute : UNILAG - Chinese Language Proficiency
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <Briefcase className="text-[#FCA311]" /> Work Experience
            </h3>
            <div className="space-y-4 text-gray-300 ">
              <div className="bg-blue-500/10 rounded-md p-6">
                <h4 className="font-semibold">
                  Frontend Developer at TMS (Ministry Of Finance, Budget and
                  Public Portfolio) (Dec. 2025 - Apr. 2026)
                  <span className="text-[#FCA311]"> United kingdom</span>
                </h4>
                <p className="text-blue-500">
                  Developed and optimized responsive, mobile-first frontend
                  interfaces for the TMS portal by designing intuitive taxpayer
                  and administrative dashboards, building reusable UI
                  components, integrating backend APIs for dynamic
                  functionality, and collaborating with cross-functional teams
                  to enhance usability, accessibility, performance, and
                  interface consistency across devices.
                </p>
              </div>
              <div className="bg-blue-500/10 rounded-md p-6">
                <h4 className="font-semibold">
                  FrontEnd Developer at DITCOSOFT (Apr. 2025 - Oct. 2025)
                  <span className="text-[#FCA311]"> Lagos, Nigeria</span>
                </h4>
                <p className="text-blue-500">
                  Assisted in developing responsive, mobile‑friendly frontend
                  interfaces for a recharge card printing and wallet management
                  platform by building optimized dashboard components,
                  integrating APIs for dynamic transaction data, and
                  collaborating with backend developers to ensure usability
                  across devices.
                </p>
              </div>
              <div className="bg-blue-500/10 rounded-md p-6">
                <h4 className="font-semibold">
                  Fullstack Developer at GOMYCODE (Sep. 2024 - Feb. 2025)
                  <span className="text-[#FCA311]"> Lagos, Nigeria</span>
                </h4>
                <p className="text-blue-500">
                  Built full‑stack projects using React, Node.js, Express, and
                  MongoDB, gaining practical experience in API integration,
                  authentication systems, and responsive UI development
                </p>
              </div>
              <div className="bg-blue-500/10 rounded-md p-6">
                <h4 className="font-semibold">
                  Graphics Designer at CHOPNATION (Jan 2024 - June 2024)
                  <span className="text-[#FCA311]">Texas, USA</span>
                </h4>
                <p className="text-blue-500">
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
