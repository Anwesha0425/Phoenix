import React, { useState } from 'react';
import Head from 'next/head';
import { BsBoxArrowUpRight, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaBook, FaGlobe, FaDatabase, FaCode, FaServer } from 'react-icons/fa';
import { csFundamentalsData } from '../../data/csFundamentals';

const getIcon = (iconStr) => {
  switch(iconStr) {
    case 'architecture': return <FaServer className="text-xl" />;
    case 'cpu': return <FaCode className="text-xl" />;
    case 'globe': return <FaGlobe className="text-xl" />;
    case 'database': return <FaDatabase className="text-xl" />;
    case 'code': return <FaBook className="text-xl" />;
    default: return <FaBook className="text-xl" />;
  }
}

const CSFundamentals = ({ hideHead = false }) => {
  const [openSubject, setOpenSubject] = useState(null);
  const [openChapter, setOpenChapter] = useState(null);
  const [openTopic, setOpenTopic] = useState(null);

  const toggleSubject = (idx) => {
    setOpenSubject(openSubject === idx ? null : idx);
    setOpenChapter(null);
    setOpenTopic(null);
  };

  const toggleChapter = (idx) => {
    setOpenChapter(openChapter === idx ? null : idx);
    setOpenTopic(null);
  };

  const toggleTopic = (idx) => {
    setOpenTopic(openTopic === idx ? null : idx);
  };

  return (
    <>
      {!hideHead && (
        <Head>
          <title>CS Fundamentals | Phoenix</title>
        </Head>
      )}
      <div className="w-full flex flex-col items-center p-6 sm:p-2 min-h-screen pb-20">
        <h1 className="text-4xl sm:text-3xl font-bold gradient-text mb-4 mt-4 text-center">
          CS Fundamentals & System Design
        </h1>
        <p className="text-white/60 mb-8 text-center max-w-2xl text-sm">
          Deep-dive into the core of Computer Science and System Architecture. Curated topic-wise from the best GitHub repositories and blogs.
        </p>

        <div className="w-full max-w-4xl flex flex-col gap-4">
          {csFundamentalsData.map((subject, sIdx) => (
            <div key={subject.id} className="w-full border border-[rgba(162,61,237,0.3)] rounded-xl bg-[rgba(13,15,28,0.7)] backdrop-blur-md overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <button 
                onClick={() => toggleSubject(sIdx)}
                className="w-full flex justify-between items-center p-5 bg-black/20 hover:bg-main/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-main/20 text-main shadow-[0_0_15px_rgba(162,61,237,0.2)]">
                    {getIcon(subject.icon)}
                  </div>
                  <h2 className="text-2xl sm:text-xl font-bold text-white text-left">{subject.subject}</h2>
                </div>
                <div className="text-main">
                  {openSubject === sIdx ? <BsChevronUp size={24} /> : <BsChevronDown size={24} />}
                </div>
              </button>

              {openSubject === sIdx && (
                <div className="p-4 flex flex-col gap-4 bg-black/40 border-t border-[rgba(162,61,237,0.1)]">
                  {subject.chapters.map((chapter, cIdx) => (
                    <div key={cIdx} className="w-full border border-[rgba(0,255,204,0.2)] rounded-lg overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
                      <button 
                        onClick={() => toggleChapter(cIdx)}
                        className="w-full flex justify-between items-center p-4 bg-[rgba(0,255,204,0.05)] hover:bg-[rgba(0,255,204,0.1)] transition-colors"
                      >
                        <div className="flex flex-col items-start">
                          <h3 className="text-xl sm:text-lg font-bold text-[#00ffcc] text-left">{chapter.title}</h3>
                          <span className="text-xs font-semibold text-[#00ffcc]/60 mt-1 uppercase tracking-wider">Source: {chapter.source}</span>
                        </div>
                        <div className="text-[#00ffcc] ml-4">
                          {openChapter === cIdx ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
                        </div>
                      </button>

                      {openChapter === cIdx && (
                        <div className="p-3 flex flex-col gap-2 bg-black/20 border-t border-[rgba(0,255,204,0.1)]">
                          {chapter.topics.map((topic, tIdx) => (
                            <div key={tIdx} className="w-full bg-[rgba(255,255,255,0.02)] rounded-md border border-white/5 overflow-hidden transition-colors">
                              {topic.subtopics ? (
                                <>
                                  <button 
                                    onClick={() => toggleTopic(tIdx)}
                                    className="w-full flex justify-between items-center p-3 hover:bg-white/5 transition-colors"
                                  >
                                    <h4 className="text-md sm:text-sm font-semibold text-white/90 text-left">{topic.name}</h4>
                                    <div className="text-white/50 ml-2">
                                      {openTopic === tIdx ? <BsChevronUp size={16} /> : <BsChevronDown size={16} />}
                                    </div>
                                  </button>
                                  {openTopic === tIdx && (
                                    <div className="p-2 flex flex-col gap-2 bg-black/30 border-t border-white/5 pl-4 sm:pl-2">
                                      {topic.subtopics.map((sub, subIdx) => (
                                        <a 
                                          key={subIdx} 
                                          href={sub.link} 
                                          target="_blank" 
                                          rel="noreferrer"
                                          className="flex justify-between items-center p-2 rounded-md hover:bg-main/20 text-white/70 hover:text-white transition-colors group"
                                        >
                                          <span className="text-sm font-medium flex items-center gap-2 text-left">
                                            <span className="min-w-[6px] w-[6px] h-[6px] rounded-full bg-main group-hover:shadow-[0_0_8px_rgba(162,61,237,0.8)]"></span>
                                            {sub.name}
                                          </span>
                                          <BsBoxArrowUpRight className="text-main/50 group-hover:text-main ml-2 flex-shrink-0" size={14} />
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <a 
                                  href={topic.link} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="w-full flex justify-between items-center p-3 hover:bg-main/10 transition-colors group"
                                >
                                  <h4 className="text-md sm:text-sm font-semibold text-white/90 group-hover:text-white transition-colors text-left">{topic.name}</h4>
                                  <BsBoxArrowUpRight className="text-main/50 group-hover:text-main ml-2 flex-shrink-0" size={16} />
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CSFundamentals;
