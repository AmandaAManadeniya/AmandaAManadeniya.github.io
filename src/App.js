import React, { useState, useRef } from 'react';
import FlipCard from './components/FlipCard';
import enterDefault from './assets/enter-default.png';
import enterHover from './assets/enter-hover.png';
import enterActive from './assets/enter-active.png';
import eduDefault from './assets/education-default.png';
import eduHover from './assets/education-hover.png';
import eduActive from './assets/education-active.png';
import expDefault from './assets/experience-default.png';
import expHover from './assets/experience-hover.png';
import expActive from './assets/experience-active.png';
import certDefault from './assets/certifications-default.png';
import certHover from './assets/certifications-hover.png';
import certActive from './assets/certifications-active.png';
import aboutDefault from './assets/about-default.png';
import aboutHover from './assets/about-hover.png';
import aboutActive from './assets/about-active.png';
import bgVideo from './assets/background.mp4';
import './App.css';

export default function App() {
  const [open, setOpen] = useState(null);
  const [entered, setEntered] = useState(false);
  const [hoverEnter, setHE] = useState(false);
  const [activeEnter, setAE] = useState(false);
  const [hoverEdu, setHEdu] = useState(false);
  const [activeEdu, setAEdu] = useState(false);
  const [hoverExp, setHExp] = useState(false);
  const [activeExp, setAExp] = useState(false);
  const [hoverCert, setHCert] = useState(false);
  const [activeCert, setACert] = useState(false);
  const [hoverAbout, setHAbout] = useState(false);
  const [activeAbout, setAAbout] = useState(false);

  // 🔁 Video intro logic
  const [showVideo, setShowVideo] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);

  // audio 
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleClick = section => {
    setOpen(open === section ? null : section);
  };

  const enterSrc = activeEnter
    ? enterActive
    : hoverEnter
      ? enterHover
      : enterDefault;

  const eduSrc = activeEdu ? eduActive : hoverEdu ? eduHover : eduDefault;
  const expSrc = activeExp ? expActive : hoverExp ? expHover : expDefault;
  const certSrc = activeCert ? certActive : hoverCert ? certHover : certDefault;
  const aboutSrc = activeAbout ? aboutActive : hoverAbout ? aboutHover : aboutDefault;

  const educationData = [
    {
      logo: '/assets/mq_logo.png',
      title: 'Macquarie University',
      subtitle: 'Master of Data Science',
      date: 'Commencing Feb 2026'
    },
    {
      logo: '/assets/mq_logo.png',
      title: 'Macquarie University',
      subtitle: 'Bachelor of Information Technology, Data Science',
      date: 'Jan 2020 – Nov 2023'
    },
    {
      logo: '/assets/mq_logo.png',
      title: 'Macquarie University',
      subtitle: 'Bachelor of Commerce, Business Analytics',
      date: 'Jan 2020 – Nov 2023'
    }
  ];

  const experienceData = [
    {
      logo: '/assets/samurai_logo.png',
      role: 'Executive Assistant',
      meta: [
        'Skill Samurai (Australia & NZ) · Part-time',
        'July 2025 – Current · Ongoing',
        'Sydney, New South Wales, Australia'
      ],
      bullets: [
        'Built an automated communication pipeline for regular email correspondence and backlog tracking, improving engagement and reducing admin effort',
        'Provided high-level operational and executive support to the franchise owner, enabling strategic focus and smoother workflows',
        'Managed calendars, inboxes, meetings, and stakeholder correspondence, ensuring timely responses and clear priorities',
        'Triaged enquiries and proactively resolved issues, strengthening stakeholder relationships and reducing executive interruptions'
      ]
    },
    {
      logo: '/assets/nine_logo.png',
      role: 'Associate Data Scientist',
      meta: [
        'Nine · Full-time',
        'Mar 2025 – Jun 2025 · 4 mos',
        'Sydney, New South Wales, Australia · Hybrid'
      ],
      note: 'Role was made redundant in June 2025 due to organisational restructuring.',
      bullets: [
        'Forecasted daily audience demand across Metro TV, Regional TV and 9NOW using time-series and ML models to optimize ad yield.',
        'Built and maintained end-to-end data pipelines: cleaning, transformation, validation, and scheduling via automated ETL workflows.',
        'Collaborated across data scientists, engineers, and commercial teams to design AI-driven recommendation engines.',
        'Developed and deployed predictive models leveraging time-series and machine-learning techniques for daily audience forecasts.',
        'Created interactive Looker dashboards and clear visualizations for non-technical stakeholders and senior leadership.',
        'Championed media analytics best practices and data privacy compliance through team knowledge shares and training sessions.'
      ]
    },
    {
      logo: '/assets/transgrid_logo.png',
      role: 'IT and Cyber Graduate',
      meta: [
        'Transgrid · Full-time',
        'Jan 2024 – Mar 2025 · 1 yr 3 mos',
        'Sydney, New South Wales, Australia · Hybrid'
      ],
      bullets: [
        'Built models to optimise IT project portfolios and resource allocation.',
        'Created interactive dashboards (Power BI, Tableau) to track KPIs and engagement.',
        'Performed statistical analysis on workforce data and presented insights to leadership.',
        'Automated workflows using Python and VBA, improving speed and accuracy.',
        'Developed search algorithms for better internal data access.',
        'Supported documentation and training for internal tools and processes.'
      ]
    },
    {
      logo: '/assets/samurai_logo.png',
      role: 'Learning Coach',
      meta: [
        'Skill Samurai (Australia & NZ) · Part-time',
        'Oct 2021 – Nov 2023 · 2 yrs 2 mos',
        'Sydney, New South Wales, Australia'
      ],
      bullets: [
        'Taught coding fundamentals and advanced concepts in Python, JavaScript, and HTML/CSS to students of all ages.',
        'Simplified complex programming topics through tailored, student-focused teaching methods.',
        'Designed and led interactive coding projects, guiding students through debugging and optimisation.',
        'Assessed student progress and provided actionable feedback to support skill development.'
      ]
    },
    {
      logo: '/assets/fp_logo.png',
      role: 'Team Lead',
      meta: [
        'Francisco Partners · Internship',
        'Aug 2022 – Nov 2022 · 4 mos',
        'Remote'
      ],
      bullets: [
        'Led cross-functional team to design a privacy-preserving record linkage system.',
        'Managed project timelines, resources, and deliverables to ensure successful execution.',
        'Facilitated collaboration and problem-solving across technical and non-technical team members.',
        'Strengthened leadership through strategic decision-making and delivering under tight deadlines.'
      ]
    }
  ];

  const certificationsData = [
    {
      logo: '/assets/cognizant_logo.png',
      title: 'Artificial Intelligence Virtual Experience Program',
      subtitle: 'Cognizant',
      date: 'Issued Mar 2023'
    }
  ];

  const sections = [
    {
      title: 'Education',
      frontContent: (
        <img
          src={eduSrc}
          alt="Education"
          onMouseEnter={() => setHEdu(true)}
          onMouseLeave={() => setHEdu(false)}
          onClick={() => {
            setAEdu(true);
            handleClick('Education');
            setTimeout(() => setAEdu(false), 150);
          }}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            cursor: 'pointer'
          }}
        />
      ),
      wrapperClass: 'education',
      wrapperStyle: { width: 'auto', height: 'auto' },
      content: (
        <div className="education-details">
          {educationData.map(e => (
            <div className="degree" key={e.subtitle}>
              <img src={e.logo} alt={e.title} className="degree-logo" />
              <h3>{e.title}</h3>
              <p>{e.subtitle}</p>
              <span>{e.date}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'Experience',
      frontContent: (
        <img
          src={expSrc}
          alt="Experience"
          onMouseEnter={() => setHExp(true)}
          onMouseLeave={() => setHExp(false)}
          onClick={() => {
            setAExp(true);
            handleClick('Experience');
            setTimeout(() => setAExp(false), 150);
          }}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            cursor: 'pointer'
          }}
        />
      ),
      wrapperClass: 'experience',
      wrapperStyle: { width: 'auto', height: 'auto' },
      content: (
        <div className="experience-details">
          {experienceData.map(x => (
            <div className="experience-item" key={x.role}>
              <img src={x.logo} alt={x.role} className="experience-logo" />
              <h3>{x.role}</h3>
              <div className="meta">
                {x.meta.map((m, i) =>
                  i === x.meta.length - 1 ? (
                    <p key={m}>{m}</p>
                  ) : (
                    <span key={m}>{m}</span>
                  )
                )}
              </div>
              {x.note && (
                <p style={{ fontStyle: 'italic', textAlign: 'left', fontSize: '0.9rem' }}>
                  {x.note}
                </p>
              )}
              <ul>
                {x.bullets.map(b => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'Certifications',
      frontContent: (
        <img
          src={certSrc}
          alt="Certifications"
          onMouseEnter={() => setHCert(true)}
          onMouseLeave={() => setHCert(false)}
          onClick={() => {
            setACert(true);
            handleClick('Certifications');
            setTimeout(() => setACert(false), 150);
          }}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            cursor: 'pointer'
          }}
        />
      ),
      wrapperClass: 'certifications',
      wrapperStyle: { width: 'auto', height: 'auto' },
      content: (
        <div className="certifications-details">
          {certificationsData.map(c => (
            <div className="certification-item" key={c.title}>
              <img src={c.logo} alt={c.title} className="certification-logo" />
              <h3>{c.title}</h3>
              <p>{c.subtitle}</p>
              <span>{c.date}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'About Me',
      frontContent: (
        <img
          src={aboutSrc}
          alt="About Me"
          onMouseEnter={() => setHAbout(true)}
          onMouseLeave={() => setHAbout(false)}
          onClick={() => {
            setAAbout(true);
            handleClick('About Me');
            setTimeout(() => setAAbout(false), 150);
          }}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            cursor: 'pointer'
          }}
        />
      ),
      wrapperClass: 'about-me',
      content: (
        <div className="about-content">
          <p className="about-intro">
            I have always been a very creative person. I grew up playing instruments, being a theatre kid (unfortuately) and making art. 
            As I got older, I started looking for ways to combine my technical and creative sides. I love gaming and animation. So with a world 
            of resources before me, I decided to play around with it. 
          </p>

          <div className="about-section">
            <img src="/assets/gameCOVER.png" alt="Gaming and Game Development" className="about-image" />
            <p>
              I’m a huge fan of immersive, story-driven games. Baldurs Gate 3, Clair Obscur: Expedition 33, Detroit: Become Human, and my all time favourite - the Mass Effect Trilogy (which inspired the aesthetic of this website). 
              Over time, that passion grew into a genuine drive to create a game of my own. Although my skills are nowhere at this level (yet), 
              I enjoy experimenting with game development, world-building, and design, 
              and hopefully I'll have something to call my own one day. 
            </p>
          </div>

          <div className="about-section">
            <img src="/assets/modellingCOVER.png" alt="3D Modelling and Animation" className="about-image" />
            <p>
              Unfortunately, to my core, I am an animation nerd. Live-action? Couldn’t tell you the last time I watched one. 
              Animated movies have had such a hold on me for so long that eventually, 
              watching them wasn’t enough; I wanted to make something myself.
              I love creating 3D models, scenes, and animations, whether it’s environments, props, or visual effects. 
              Bringing ideas to life and evolving my style with each project is a process I genuinely enjoy.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (

    <>
    <audio
      ref={audioRef}
      src="/assets/sci-fi-theme.mp3"
      loop
      preload="auto"
      muted={isMuted}
    />

    <div className="container">
      <div className="scene-container">
        <button
          className="mute-button"
          onClick={() => setIsMuted(prev => !prev)}
        >
          {isMuted ? '🔇 Mute' : '🔊 Sound'}
        </button>
        {}

        <video
          className={`bg-video ${entered ? 'hidden' : ''}`}
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {!showVideo && !videoEnded && (
          <img
            src={enterSrc}
            alt="Enter the Experience"
            className="enter-image"
            onMouseEnter={() => setHE(true)}
            onMouseLeave={() => setHE(false)}
            onClick={() => {
              setAE(true);
              setShowVideo(true);

              const audio = audioRef.current;
              if (audio) {
                audio.currentTime = 102;
                audio.play().catch(err => console.warn('Audio play blocked:', err));
              }
              setTimeout(() => setAE(false), 150);
            }}
          />
        )}

        {showVideo && !videoEnded && (
          <div className="video-wrapper">
            <div className={`video-fade ${fadeIn ? 'fade-in' : ''}`} />
            <video
              src="/intro.mp4"
              autoPlay
              className="intro-video"
              onPlay={() => setTimeout(() => setFadeIn(false), 1000)}
              onEnded={() => {
                setVideoEnded(true);
                
              }}
            />
          </div>
        )}
      </div>


      <div className="sections">
        {sections.map(({ title, frontContent, wrapperClass, wrapperStyle, content }) => (
          <div
            className={`flip-card-wrapper ${wrapperClass || ''}`}
            style={wrapperStyle}
            key={title}
          >
            <FlipCard
              title={title}
              frontContent={frontContent}
              isFlipped={open === title}
              onClick={() => handleClick(title)}
            >
              {content}
            </FlipCard>
          </div>
        ))}
      </div>
      {}
    </div>
  </>
  );
}