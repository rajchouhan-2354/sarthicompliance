import { Phone, Mail, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eixihob",
        "template_dhgx2w8",
        e.target,
        "_9HFgNha8Nt9TJdUf",
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="bg-white dark:bg-slate-900 rounded-[50px] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col lg:flex-row">
          {/* LEFT PANEL */}
          <div className="lg:w-2/5 bg-red-800 p-12 md:p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-black mb-8 leading-tight">
                Ready to <br /> scale?
              </h2>

              <p className="text-red-100/80 text-lg mb-12">
                Connect with our consultants to build a roadmap for your
                business compliance and digital future.
              </p>

              <div className="space-y-6">
                {/* PHONE */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <a href="tel:+917597657854" className="font-bold">
                    +91 7597 657 854
                  </a>
                </div>

                {/* EMAIL */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span className="font-bold">sarthicompliance@gmail.com</span>
                </div>
              </div>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/917597657854?text=Hello%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-16 w-full py-5 bg-emerald-500 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-emerald-600 transition-all"
            >
              <MessageSquare size={20} />
              Connect via WhatsApp
            </a>
          </div>

          {/* RIGHT PANEL (FORM) */}
          <div className="lg:w-3/5 p-12 md:p-16">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* NAME */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 outline-none"
                />
              </div>

              {/* PHONE */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="user_phone"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 outline-none"
                />
              </div>

              {/* SERVICE */}
              <div className="md:col-span-2 flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Service Interest
                </label>
                <select
                  name="service"
                  required
                  className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 outline-none"
                >
                  <option value="">Select Service</option>
                  <option value="GST Registration & Filing">
                    GST Registration & Filing
                  </option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Financial Consulting">
                    Financial Consulting
                  </option>
                  <option value="Legal Advisory">Legal Advisory</option>
                  <option value="MSME, BRN & FSSAI">MSME, BRN & FSSAI</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="md:col-span-2 flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your requirement..."
                  required
                  className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 outline-none resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="md:col-span-2 py-5 bg-red-800 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-red-900 transition-all"
              >
                Request Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
