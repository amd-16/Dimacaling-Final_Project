import React from 'react';

const entries = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    duration: '2026 – Present',
    description: 'Built and deployed an Ibaloi and Kankanaey dictionary using HTML, CSS, and JavaScript.',
    links: [
      {
        href: 'https://cordidialect.vercel.app/',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAZ0lEQVR4AWMYwkBICI/krCm45eQ/ftfCKbnp//9FuOTsfv3//98Fh+TB/0BwELtc8H8wiMMqeRUieRWbXPF/KCjGIvkYJvkYU27KfzjoxAi4jwjJ7/KY/keA1ahy3E2dSKCJm2FEAQAD1l2xzdeQ1AAAAABJRU5ErkJggg==',
        label: 'CordiDialect',
      },
      {
        href: 'https://github.com/amd-16',
        img: '/images/github-logo.png',
        label: 'GitHub',
      },
    ],
  },
];

const Experience = () => (
  <section
    id="Experience"
    className="min-h-screen flex flex-col justify-center items-center px-5 py-24"
    style={{
      fontFamily: "'Orbitron', sans-serif",
      background:
        'linear-gradient(180deg, rgba(15,15,15,0.88), rgba(26,26,26,0.92)), url(/images/background-image.jpg) no-repeat center center / cover',
      backgroundAttachment: 'fixed',
    }}
  >
    <h1 className="font-bold text-4xl text-white text-center mb-12">
      Experience
    </h1>

    <div className="w-full max-w-2xl flex flex-col gap-5">
      {entries.map((e, i) => (
        <div
          key={i}
          className="rounded-xl p-6 shadow-md"
          style={{
            background: 'rgba(13,36,71,0.75)',
            borderLeft: '5px solid #0d6efd',
            backdropFilter: 'blur(6px)',
          }}
        >
          <h3 className="font-bold text-lg text-white">{e.role}</h3>

          <p className="italic text-sm mt-1" style={{ color: '#b8c7e6' }}>
            {e.company}
          </p>

          <p className="text-xs mt-1" style={{ color: '#9fb3d9' }}>
            {e.duration}
          </p>

          <p className="text-sm mt-3" style={{ color: '#b8c7e6' }}>
            {e.description}
          </p>

          {/* Clickable icon links */}
          <div className="flex gap-3 mt-4 flex-wrap items-center">
            {e.links.map((link, j) => (
              <a
                key={j}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                title={link.label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px 4px 6px',
                  borderRadius: '8px',
                  border: '1.5px solid #0d6efd55',
                  background: 'rgba(13,110,253,0.12)',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={ev => {
                  ev.currentTarget.style.transform = 'translateY(-2px)';
                  ev.currentTarget.style.boxShadow = '0 4px 12px rgba(13,110,253,0.3)';
                }}
                onMouseLeave={ev => {
                  ev.currentTarget.style.transform = 'translateY(0)';
                  ev.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img
                  src={link.img}
                  alt={link.label}
                  style={{ width: '22px', height: '22px', objectFit: 'contain', borderRadius: '4px' }}
                />
                <span style={{ fontSize: '11px', color: '#4da3ff', fontWeight: 'bold', letterSpacing: '0.5px' }}>
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
