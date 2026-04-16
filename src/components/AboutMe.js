import React from 'react';

const AboutMe = () => {
  const items = [
    {
      label: 'Age',
      value: '19 years old',
    },
    {
      label: 'Hobbies',
      value: 'Watching anime, Working out, and Playing videogames',
      images: [
        { src: 'https://m.media-amazon.com/images/I/71aoeOhdNnL.jpg', alt: 'Anime' },
        { src: 'https://img.joomcdn.net/3951999955bde0c8ac0a989a3d481890d9b794cd_original.jpeg', alt: 'Bodybuilding' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0WSAO7K7N54BRF4t5rcez6eaZuHPYT88DMA&s', alt: 'Videogame' },
      ],
    },
    {
      label: 'Interest',
      value: 'Bodybuilding, Anime, Kdrama, and Alternative R&B',
      images: [
        { src: 'https://st2.depositphotos.com/5894210/11673/v/450/depositphotos_116738402-stock-illustration-vector-illustration-of-bodybuilder-on.jpg', alt: 'Bodybuilding' },
        { src: 'https://i.pinimg.com/736x/5a/24/d1/5a24d127cb460d7fc22754daf2c5db5f.jpg', alt: 'Anime' },
        { src: 'https://m.media-amazon.com/images/M/MV5BYWM2NTM4MTktNDFiNi00NTI3LThiZTgtZmJiZTQ2NzdhNDE3XkEyXkFqcGc@._V1_.jpg', alt: 'Kdrama' },
        { src: 'https://m.media-amazon.com/images/I/71LIeQ11qqL._AC_UF894,1000_QL80_.jpg', alt: 'R&B' },
      ],
    },
  ];

  return (
    <section
      id="About-Me"
      className="min-h-screen flex flex-col justify-center items-center px-5 py-24"
      style={{
        fontFamily: "'Orbitron', sans-serif",
        background:
          'linear-gradient(180deg, rgba(26,26,26,0.82), rgba(11,31,63,0.92)), url(/images/background-image.jpg) no-repeat center center / cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <h1 className="font-bold text-4xl text-white text-center mb-12">
        More About Me
      </h1>

      <div className="w-full max-w-3xl flex flex-col gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-6 shadow-md"
            style={{
              background: 'rgba(13,36,71,0.75)',
              borderLeft: '5px solid #0d6efd',
              backdropFilter: 'blur(6px)',
            }}
          >
            <p className="text-white text-base">
              <b style={{ color: '#4da3ff' }}>{item.label}:</b>{' '}
              <span style={{ color: '#b8c7e6' }}>{item.value}</span>
            </p>

            {item.images && (
              <div className="flex gap-4 mt-4 flex-wrap">
                {item.images.map((img, j) => (
                  <img
                    key={j}
                    src={img.src}
                    alt={img.alt}
                    width="140"
                    className="rounded-lg"
                    style={{
                      border: '2px solid #0d6efd55',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
