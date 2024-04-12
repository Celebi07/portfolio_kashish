import React, { useEffect } from 'react';
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

function Contact() {
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_t3ccgne', 'template_m23bgt8', form.current, 'IFsJuULL5im3Qan2H')
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="Contact" className="bg-white text-black dark:bg-slate-900 dark:text-white p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">
        Contact Me
      </h1>
      <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
        <div className="dark:text-slate-500 lg:flex flex-col gap-6">
          <input type="hidden" name="access_key" value="a3acc553-464c-4fc0-ab60-2ba7b134788f" />
          <div>
            <input
              type="text"
              name="user_name"
              className="w-full my-3 rounded-lg p-4 border-2 border-fuchsia-800 border-glow text-xl bg-white dark:bg-slate-800"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="user_email"
              className="w-full my-3 rounded-lg p-4 border-2 border-fuchsia-800 border-glow text-xl bg-white dark:bg-slate-800"
              placeholder="Your Email"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            className="w-full my-3 rounded-lg p-4 border-2 border-fuchsia-800 border-glow text-xl bg-white dark:bg-slate-800"
            placeholder="Subject"
            required
          />
        </div>
        <textarea
          name="message"
          className="w-full my-3 rounded-lg bg-white dark:bg-slate-800 p-4 border-2 border-fuchsia-800 border-glow text-xl"
          placeholder="Enter Your Message..."
          cols="20"
          rows="10"
          required
        ></textarea>
        <button
          className="nano-button my-3 shadow-xl hover:shadow-fuchsia-800/50 text-black dark:text-white  border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden border-glow"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} message="Email sent successfully!" severity="success" />
    </div>
  );
}

export default Contact;
