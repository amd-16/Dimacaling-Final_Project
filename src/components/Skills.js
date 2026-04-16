import React from 'react';

const skillsData = [
  {
    name: 'HTML & CSS',
    description: 'Experienced in building responsive webpages.',
    links: [
      {
        href: 'https://www.freecodecamp.org/certification/fcc24f43bed-64e2-4997-8f56-da08871698cf/responsive-web-design',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAh1BMVEUKCiMAABgAAA0JCSMAAA9XV2Obm6IAAB0AABRGRlP///+wsLcXFyo7O00AAAAnJzempqwEBCHr6+5zc3wAABHCwsfa2t47O0f09PZRUV5cXGgAABeBgYrT09cAABO2trwAABqXl58AAAUAACAVFSphYWlbW2E1NUKPj5cfHzLMzNBoaHQsLD//65ZnAAABT0lEQVR4AcRQBYKDQAwMTtM2FN/i7v9/32XZcvKCGyQycfgvaLrx12Ho2qWalq0pn3NF25apNPeGd/3kHk9SLv2ON1cqjocvOsv6jyCMVAl6oeew1OJE8+EMSwW+VQNfS2LNAC1DK/8UKxDLSs2WW5hpQHVCoGo1CaKwGmVRUhNUov2QXYGMQv+QrXDBE6ELEv0gEAMsSNV1Q+FBKsZGDXhHjAucCjjZZhQpzGLUzsiMG3qhuOOiS1sbxQyrKmvkG+JCC3dNwFdlVzBF28mOc8BespkM0l6O1woTKC5JkmmAe+SGkpwlSWVMEIU4y0MNiYDe0N57WfJpwJmRT+mvSd2xFS2Ja/AhqN5zju3iZPXZu+NO8pr1w2Dh2RELYmcEDJ5id9ntHD7/n5Lj3ra6mx/VZSW3UZYUVVmbPii78Xr4g95r/Es3Lu2Cyv8arQAAQJwXtvIxXO8AAAAASUVORK5CYII=',
        label: 'Certification',
      },
    ],
  },
  {
    name: 'JavaScript',
    level: 70,
    description: 'Strong understanding of core JavaScript concepts.',
    links: [
      {
        href: 'https://www.codecademy.com/users/mega9573136428/achievements',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEX///+OmqNxgItzg42utrxWangAM0sAHDsAID2MmKEkRlkAHTv19/jQ1dno6+0AFzgAEjVdcX7a3uGVoal/jZfFy887VWbV2t0ANkwPPFJFXWxOZXSgq7KEkZs0UGFpeoXo8stUAAAAdUlEQVR4Ac2QQwLEABRDU9v2/U85RpVuyrf9CHBJBFH6IsrjoaJqH3TVmAxNfLEWhvbmQ9tx6VDwPD8gQ8cKwkgkQ0F3uWas23y4eJlYkisLZAjJ87yUDREmGdiQF58XX1QDRlqWpYgvcaV8qWo0bZq2Ha7IHYsfB3MzPFfmAAAAAElFTkSuQmCC',
        label: 'Achievement',
      },
    ],
  },
  {
    name: 'React',
    level: 60,
    description: 'Able to learn React library used to build websites and web applications.',
    links: [
      {
        href: 'https://www.codecademy.com/users/mega9573136428/achievements',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEX///+OmqNxgItzg42utrxWangAM0sAHDsAID2MmKEkRlkAHTv19/jQ1dno6+0AFzgAEjVdcX7a3uGVoal/jZfFy887VWbV2t0ANkwPPFJFXWxOZXSgq7KEkZs0UGFpeoXo8stUAAAAdUlEQVR4Ac2QQwLEABRDU9v2/U85RpVuyrf9CHBJBFH6IsrjoaJqH3TVmAxNfLEWhvbmQ9tx6VDwPD8gQ8cKwkgkQ0F3uWas23y4eJlYkisLZAjJ87yUDREmGdiQF58XX1QDRlqWpYgvcaV8qWo0bZq2Ha7IHYsfB3MzPFfmAAAAAElFTkSuQmCC',
        label: 'Achievement',
      },
    ],
  },
];

const Skills = () => (
  <section
    id="Skills"
    className="min-h-screen flex flex-col justify-center items-center px-5 py-24"
    style={{
      fontFamily: "'Orbitron', sans-serif",
      background:
        `linear-gradient(180deg, rgba(26,26,26,0.85), rgba(11,31,63,0.90)), url(${process.env.PUBLIC_URL}/images/background-image.jpg) no-repeat center center / cover`,
      backgroundAttachment: 'fixed',
    }}
  >
    <h1 className="font-bold text-4xl text-white text-center mb-12">
      Skills
    </h1>

    <div className="w-full max-w-2xl flex flex-col gap-5">
      {skillsData.map((skill, i) => (
        <div
          key={i}
          className="rounded-xl p-6 shadow-md"
          style={{
            background: 'rgba(255,255,255,0.92)',
            borderLeft: '5px solid #0d6efd',
            backdropFilter: 'blur(6px)',
          }}
        >
          <h3 className="font-bold text-lg text-black">
            {skill.name}
          </h3>

          <p className="text-sm mt-2 text-gray-700">
            {skill.description}
          </p>

          {/* Clickable icon links */}
          <div className="flex gap-3 mt-4 flex-wrap items-center">
            {skill.links.map((link, j) => (
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
                  border: '1.5px solid #0d6efd44',
                  background: '#f0f6ff',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={ev => {
                  ev.currentTarget.style.transform = 'translateY(-2px)';
                  ev.currentTarget.style.boxShadow = '0 4px 12px rgba(13,110,253,0.2)';
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
                <span style={{ fontSize: '11px', color: '#0d6efd', fontWeight: 'bold', letterSpacing: '0.5px' }}>
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

export default Skills;
