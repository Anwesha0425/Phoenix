import React, { useState } from 'react';
import Head from 'next/head';
import { BsBoxArrowUpRight, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaBook, FaGlobe, FaDatabase, FaCode, FaServer } from 'react-icons/fa';
import { csFundamentalsData } from '../../data/csFundamentals';
import { FaRobot, FaTimes, FaSpinner } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

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

  const [tutorOpen, setTutorOpen] = useState(false);
  const [tutorTopic, setTutorTopic] = useState('');
  const [tutorQuestion, setTutorQuestion] = useState('');
  const [tutorProvider, setTutorProvider] = useState('gemini');
  const [tutorResponse, setTutorResponse] = useState('');
  const [tutorLoading, setTutorLoading] = useState(false);

  const askTutor = async () => {
    if (!tutorTopic || !tutorQuestion) return;
    setTutorLoading(true);
    setTutorResponse('');
    try {
      const res = await fetch('/api/crew', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          endpoint: '/api/cstutor',
          payload: { topic: tutorTopic, question: tutorQuestion, llm_provider: tutorProvider }
        })
      });
      const data = await res.json();
      if (res.ok) {
        setTutorResponse(data.response);
      } else {
        setTutorResponse('Sorry, there was an error connecting to the AI Tutor.');
      }
    } catch (e) {
      setTutorResponse('Sorry, there was an error connecting to the AI Tutor.');
    }
    setTutorLoading(false);
  };

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
        <p className="text-white/60 mb-6 text-center max-w-2xl text-sm">
          Deep-dive into the core of Computer Science and System Architecture. Curated topic-wise from the best GitHub repositories and blogs.
        </p>
        
        <button 
          onClick={() => setTutorOpen(true)}
          className="mb-8 flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-main to-purple-600 text-white font-bold shadow-[0_0_20px_rgba(162,61,237,0.5)] hover:scale-105 transition-all"
        >
          <FaRobot size={20} />
          Ask AI CS Tutor
        </button>

        {tutorOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-2xl bg-[#0d0f1c] border border-main/50 rounded-2xl p-6 shadow-2xl relative flex flex-col max-h-[90vh]">
              <button 
                onClick={() => setTutorOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
              
              <h2 className="text-2xl font-bold text-main mb-2 flex items-center gap-2">
                <FaRobot /> AI CS Tutor
              </h2>
              <p className="text-white/60 text-sm mb-6">
                Ask a question about OS, DBMS, Computer Networks, or System Architecture. The AI will use our curriculum to teach you!
              </p>

              <div className="flex flex-col gap-4 mb-6">
                <div className="flex gap-2">
                  <input 
                    type="text"
                    placeholder="Topic (e.g. Virtual Memory, TCP/IP, Indexing)"
                    value={tutorTopic}
                    onChange={(e) => setTutorTopic(e.target.value)}
                    className="w-2/3 bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-main transition-colors"
                  />
                  <select 
                    value={tutorProvider}
                    onChange={(e) => setTutorProvider(e.target.value)}
                    className="w-1/3 bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-main transition-colors"
                    title="Select AI Model"
                  >
                    <option value="gemini">Gemini</option>
                    <option value="groq">Groq (Llama 3)</option>
                    <option value="cohere">Cohere</option>
                  </select>
                </div>
                <textarea 
                  placeholder="Your question... (e.g. Can you explain how paging works with an analogy?)"
                  value={tutorQuestion}
                  onChange={(e) => setTutorQuestion(e.target.value)}
                  rows={3}
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-main transition-colors resize-none"
                />
                <button 
                  onClick={askTutor}
                  disabled={tutorLoading || !tutorTopic || !tutorQuestion}
                  className="w-full py-3 rounded-lg bg-main text-white font-bold disabled:opacity-50 hover:bg-main/80 transition-colors flex justify-center items-center gap-2"
                >
                  {tutorLoading ? <FaSpinner className="animate-spin" /> : 'Ask Question'}
                </button>
              </div>

              {tutorResponse && (
                <div className="flex-1 overflow-y-auto bg-black/40 border border-white/5 rounded-lg p-4 custom-scrollbar text-white/90 text-sm leading-relaxed prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown>
                    {tutorResponse}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        )}


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
