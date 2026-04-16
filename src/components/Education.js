import React from 'react';

const entries = [
  {
    degree: 'Bachelor of Science in Information Technology',
    major: 'Major in Web Technology - (University Distinction Awardee)',
    school: 'University of the Cordilleras',
    year: '2024 – Present',
    links: [
      {
        href: 'https://uc-bcf.edu.ph/',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAvVBMVEX69uf9+er/+uvu693//Ozi4NOYnpXQ0MKwtKl3gn+nqp/Z18lVYl1mc2/KxbmZoZwAFAAAIBNmb21odnNxfnrAvLAAAACFj4yEiH6RmZQAHhIEJhuAiYVwfHhnZ2AAGQkoPDRea2ZMW1VFVE4ZMilGTkn19vY8TkdRVU3M1tL+///a393p7eultK+DlI5bYVuzwLthdGwvTEFNal9uiX9DX1RvhHx7k4tZZ2MaQzUnTD47QjwADQB3dm1OXFnsqWivAAABPUlEQVR4AWKgHDAyMTIwMTOzgBloAEAGVSQoDENRqvDbpG6ZJlRxreLc/1iz5nf9/MmaPlcXAIY0100V6eZAqGU7rmf6JAjlX9CkUZywv5TrcSSWSKrGWSryoiQidf1QQplGlUJdAav/yErBhRaUcLZe82IjtjJeEvKS7vaHIw8AR85Ug5Wn/eFwPjN2kTDICrCvu6Zp/YJqCJWECOyuO3d9E3sWDhVsOO2uI9gBoQsMBkHT7dlwa+4FXaBGshBlZw/jaAfcwyeodgBDOzbDg/K7iUGD+80jGJ8VwGs2OYHSuunHMRd0qU7ve5O8zV3yFpcJaOTuuwAm3u7Gm9iCQ3iZOQSI46NCciiiYMnSGj5BBIn6K9QofEOWbzztDt9ERrbKx1BCSraKmejyJFSVZ7JiSdL/gAxcqZf4hA4AcEYeSXScg8cAAAAASUVORK5CYII=',
        label: 'UC',
      },
    ],
  },
  {
    degree: 'Senior High School',
    major: 'ICT Track - (With High Honors)',
    school: 'University of the Cordilleras - Senior High School',
    year: '2022 – 2024',
    links: [
      {
        href: 'https://uc-bcf.edu.ph/',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAvVBMVEX69uf9+er/+uvu693//Ozi4NOYnpXQ0MKwtKl3gn+nqp/Z18lVYl1mc2/KxbmZoZwAFAAAIBNmb21odnNxfnrAvLAAAACFj4yEiH6RmZQAHhIEJhuAiYVwfHhnZ2AAGQkoPDRea2ZMW1VFVE4ZMilGTkn19vY8TkdRVU3M1tL+///a393p7eultK+DlI5bYVuzwLthdGwvTEFNal9uiX9DX1RvhHx7k4tZZ2MaQzUnTD47QjwADQB3dm1OXFnsqWivAAABPUlEQVR4AWKgHDAyMTIwMTOzgBloAEAGVSQoDENRqvDbpG6ZJlRxreLc/1iz5nf9/MmaPlcXAIY0100V6eZAqGU7rmf6JAjlX9CkUZywv5TrcSSWSKrGWSryoiQidf1QQplGlUJdAav/yErBhRaUcLZe82IjtjJeEvKS7vaHIw8AR85Ug5Wn/eFwPjN2kTDICrCvu6Zp/YJqCJWECOyuO3d9E3sWDhVsOO2uI9gBoQsMBkHT7dlwa+4FXaBGshBlZw/jaAfcwyeodgBDOzbDg/K7iUGD+80jGJ8VwGs2OYHSuunHMRd0qU7ve5O8zV3yFpcJaOTuuwAm3u7Gm9iCQ3iZOQSI46NCciiiYMnSGj5BBIn6K9QofEOWbzztDt9ERrbKx1BCSraKmejyJFSVZ7JiSdL/gAxcqZf4hA4AcEYeSXScg8cAAAAASUVORK5CYII=',
        label: 'UC SHS',
      },
    ],
  },
];

const Education = () => (
  <section
    id="Education"
    className="min-h-screen flex flex-col justify-center items-center px-5 py-24"
    style={{
      fontFamily: "'Orbitron', sans-serif",
      background:
        `linear-gradient(180deg, rgba(11,31,63,0.88), rgba(15,15,15,0.93)), url(${process.env.PUBLIC_URL}/images/background-image.jpg) no-repeat center center / cover`,
      backgroundAttachment: 'fixed',
    }}
  >
    <h1 className="font-bold text-4xl text-white text-center mb-12">
      Education
    </h1>

    <div className="w-full max-w-2xl flex flex-col gap-5">
      {entries.map((e, i) => (
        <div
          key={i}
          className="rounded-xl p-6 shadow-md"
          style={{
            background: 'rgba(255,255,255,0.92)',
            borderLeft: '5px solid #0d6efd',
            backdropFilter: 'blur(6px)',
          }}
        >
          <h3 className="font-bold text-lg text-black">{e.degree}</h3>

          <p className="italic text-sm text-gray-600 mt-1">
            {e.major}
          </p>

          <p className="text-sm text-gray-700 mt-2">
            {e.school}
          </p>

          <p className="text-xs text-gray-500 mt-1">
            {e.year}
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
                  border: '1.5px solid #0d6efd44',
                  background: '#f0f6ff',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(13,110,253,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
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

export default Education;
