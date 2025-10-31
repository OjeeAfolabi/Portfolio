import React, { useEffect, useState } from "react";
import { Menu, Monitor } from "lucide-react";

const NavBar = ({ menuOpen, setMenuOpen }) => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  const menus = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contacts", label: "Contacts" },
  ];

    useEffect(() => {
      const sections = document.querySelectorAll("section[id]");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Update active link based on visible section
              setActive(entry.target.id);
            }
          });
        },
        {
          rootMargin: "0px 0px -50% 0px", // triggers roughly when section center is in view
          threshold: 0.3, // portion of section visible before activating
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }, []);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            <Monitor size={40} className="text-blue-500" />
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <Menu className="text-[#fca311] size-[28]" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {menus.map((menu) => (
              <a
                className={`relative text-2xl text-gray-300 hover:text-white transition-colors ${
                  active === menu.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                key={menu.id}
                href={`#${menu.id}`}
                onClick={() => setActive(menu.id)}
              >
                {menu.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] rounded-full transition-all duration-300  ${
                    active === menu.id
                      ? "w-full bg-[#fca321] opacity-100"
                      : "w-0 bg-[#fca321] opacity-0"
                  }`}
                ></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
