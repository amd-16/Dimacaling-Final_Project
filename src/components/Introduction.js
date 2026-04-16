import React from 'react';

const Introduction = () => {
  return (
    <section
      id="Introduction"
      className="min-h-screen flex items-center px-5 pt-24 relative transition-all duration-700"
      style={{
        fontFamily: "'Orbitron', sans-serif",
        background:
          `linear-gradient(180deg, rgba(26,26,26,0.65), rgba(17,17,17,0.95)), url(${process.env.PUBLIC_URL}/images/background-image.jpg) no-repeat center center / cover`,
      }}
    >

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto gap-12">

        <div className="flex-1">

          {/* Name */}
          <h1 className="font-bold text-white text-4xl md:text-5xl">
            ALIHAKIM M. DIMACALING
          </h1>

          {/* Subtitle */}
          <p className="italic text-lg mt-3 text-gray-300">
            University Student | Game Enthusiast | Aspiring IT Professional
          </p>

          {/* Description */}
          <p className="mt-4 text-base text-gray-400">
            Hi! I am currently pursuing a Bachelor's Degree in Information Technology majoring in Web Technology.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            {[
              { label: 'Projects', href: '#Projects' },
              { label: 'Contact', href: '#Contact' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="
                  font-bold text-sm px-5 py-2 rounded
                  bg-[#0d6efd] text-white
                  transition-all duration-300 ease-out
                  hover:-translate-y-2
                  hover:shadow-lg
                  hover:shadow-blue-500/30
                "
                style={{
                  textDecoration: 'none',
                  letterSpacing: '1px',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div style={{ position: 'relative' }}>

            {/* Glow ring */}
            <div
              style={{
                position: 'absolute',
                inset: '-10px',
                borderRadius: '50%',
                border: '2px solid #0d6efd',
                boxShadow: '0 0 30px rgba(13,110,253,0.6)',
              }}
            />

            <img
              src={process.env.PUBLIC_URL + "/images/portrait-image.png"}
              alt="Portrait"
              className="rounded-full object-cover"
              style={{
                width: '250px',
                height: '250px',
                border: '4px solid #0d6efd',
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Introduction;
