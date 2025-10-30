import React, { useState } from "react";
import Scroll from "../Scroll";
import emailjs from "emailjs-com";
import { Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const SERVICE_ID = "service_ugzhu9q";
  const TEMPLATE_ID = "template_q9rjqx4";
  const PUBLIC_KEY = "tFg7jhuTOf80F_wMj";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message sent succesfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("An error occurred, please try again"));
  };
  return (
    <div
      id="contacts"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <Scroll>
        <div className="px-4 w-150">
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-3xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent p-2">
              Get In Touch
            </h2>
            <Mail size={28} className="text-[#FCA311]" />
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                className="w-full bg-white/5 border border-white/10 rounded px-4 text-xl py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                className="w-full bg-white/5 border border-white/10 rounded px-4 text-xl py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded px-4 text-xl py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
                id="message"
                name="message"
                rows={5}
                placeholder="Your message..."
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow:[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </Scroll>
    </div>
  );
};

export default Contact;
