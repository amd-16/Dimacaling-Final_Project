import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.message.trim()) e.message = 'Message cannot be empty.';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setSubmitted(true);
  };

  const socialLinks = [
    { href: 'https://www.facebook.com/alihakim.dimacaling15', img: '/images/facebook-logo.png', alt: 'Facebook' },
    { href: 'https://github.com/amd-16', img: '/images/github-logo.png', alt: 'GitHub' },
    { href: 'https://mail.google.com/mail/', img: '/images/gmail-logo.png', alt: 'Gmail' },
  ];

  return (
    <footer
      id="Contact"
      className="text-center pt-12 pb-10 px-4"
      style={{
        background: '#fff',
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      {/* TITLE */}
      <h5
        className="font-bold mb-6 text-sm tracking-widest"
        style={{
          color: '#0d6efd',
          letterSpacing: '3px',
        }}
      >
        CONTACT ME
      </h5>

      {/* SOCIALS + PHONE */}
      <div className="flex justify-center items-center gap-5 mb-6 flex-wrap">
        <p className="text-sm text-gray-600">
          +639090909
        </p>

        {socialLinks.map(({ href, img, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full transition duration-300 hover:scale-110"
            style={{
              border: '1px solid #0d6efd33',
              background: '#f9f9f9',
            }}
          >
            <img
              src={img}
              alt={alt}
              className="w-6 h-6 object-contain"
            />
          </a>
        ))}
      </div>

      {/* FORM */}
      <div className="max-w-md mx-auto text-left mt-6">
        {submitted ? (
          <p className="text-center font-semibold text-green-500">
            Thanks, {form.name}! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded border border-gray-300"
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}

            <input
              type="text"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 text-sm rounded border border-gray-300"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}

            <textarea
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 text-sm rounded border border-gray-300"
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}

            <button
              type="submit"
              className="py-2 rounded text-sm font-bold text-white"
              style={{
                background: '#0d6efd',
                letterSpacing: '2px',
              }}
            >
              SEND
            </button>
          </form>
        )}
      </div>

      {/* COPYRIGHT */}
      <p className="text-xs mt-6 text-gray-400">
        © {new Date().getFullYear()} ALIHAKIM M. DIMACALING
      </p>
    </footer>
  );
};

export default Contact;