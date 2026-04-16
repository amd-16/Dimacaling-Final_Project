import React, { useState } from 'react';

const allProjects = [
  [
    { href: 'https://dimacalingtechnicaldocumentation.vercel.app/', img: process.env.PUBLIC_URL + '/images/technicaldocument.png', title: 'Technical Document Web Page', desc: 'A website in the form of a technical document.' },
    { href: 'https://dimacalingsurvey.vercel.app/', img: process.env.PUBLIC_URL + '/images/survey.png', title: 'Customer Satisfaction Survey', desc: 'A form that intakes customer feedback.' },
    { href: 'https://dimacalingtributepage.vercel.app/', img: process.env.PUBLIC_URL + '/images/tribute.png', title: 'Tribute Page', desc: 'A page that shows gratitude to my brother.' },
  ],
  [
    { href: 'https://dimacalingportfolio.vercel.app/', img: process.env.PUBLIC_URL + '/images/portfolio.png', title: 'Personal Portfolio', desc: 'A page showcasing my past works.' },
    { href: 'https://onlineportfoliocc1.vercel.app/', img: process.env.PUBLIC_URL + '/images/groupwebsite.png', title: 'Group Portfolio', desc: 'Simple web page we made in first-year of university.' },
  ],
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animating, setAnimating] = useState(false);

  const changePage = (newIndex) => {
    if (newIndex === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(newIndex);
      setAnimating(false);
    }, 250);
  };

  const prev = () =>
    changePage(current === 0 ? allProjects.length - 1 : current - 1);

  const next = () =>
    changePage(current === allProjects.length - 1 ? 0 : current + 1);

  return (
    <section
      id="Projects"
      className="flex flex-col items-center px-10 pt-24 pb-16"
      style={{
        fontFamily: "'Orbitron', sans-serif",
        background:
          `linear-gradient(180deg, rgba(11,31,63,0.88), rgba(15,15,15,0.93)), url(${process.env.PUBLIC_URL}/images/background-image.jpg) no-repeat center center / cover`,
        backgroundAttachment: 'fixed',
      }}
    >
      <h1 className="font-bold text-4xl text-white text-center mb-12">
        My Projects
      </h1>

      {/* WRAPPER */}
      <div className="relative w-full max-w-4xl flex items-center justify-center">

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-0 w-10 h-10 rounded-full text-white font-bold
          bg-[#0d6efd] transition-all duration-300
          hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
        >
          {'<'}
        </button>

        {/* PROJECTS */}
        <div
          className={`
            flex justify-center gap-6 flex-wrap transition-all duration-300 ease-in-out
            ${animating ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'}
          `}
        >
          {allProjects[current].map((project, i) => {
            const isHov = hoveredCard === i;

            return (
              <a
                key={i}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="no-underline"
              >
                <div
                  className="rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
                  style={{
                    width: '220px',
                    height: '340px',
                    background: 'rgba(13,36,71,0.80)',
                    borderLeft: '4px solid #0d6efd',
                    backdropFilter: 'blur(6px)',
                    boxShadow: isHov
                      ? '0 10px 25px rgba(0,0,0,0.4)'
                      : '0 4px 15px rgba(0,0,0,0.2)',
                    transform: isHov ? 'translateY(-6px)' : 'translateY(0)',
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={{ height: '170px', overflow: 'hidden' }}>
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1 text-center">
                    <h5 className="font-bold text-sm text-white line-clamp-2">
                      {project.title}
                    </h5>

                    <p className="text-xs mt-2 text-[#b8c7e6] line-clamp-3">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-0 w-10 h-10 rounded-full text-white font-bold
          bg-[#0d6efd] transition-all duration-300
          hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
        >
          {'>'}
        </button>
      </div>

      {/* DOTS */}
      <div className="flex gap-3 mt-8">
        {allProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => changePage(i)}
            className="transition-all duration-300"
            style={{
              width: i === current ? '24px' : '10px',
              height: '10px',
              borderRadius: '999px',
              background: i === current ? '#0d6efd' : 'rgba(43,63,102,0.8)',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
