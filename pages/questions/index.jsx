import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaRobot, FaSpinner } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const Questions = ({ hideHead = false }) => {
  const [activeTab, setActiveTab] = useState('latest');
  const [activePlatform, setActivePlatform] = useState('codeforces'); // 'codeforces' or 'leetcode'
  const [cfProblems, setCfProblems] = useState([]);
  const [lcProblems, setLcProblems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [loading, setLoading] = useState(false);

  // AI Problem Generator State
  const [aiTopic, setAiTopic] = useState('');
  const [aiDifficulty, setAiDifficulty] = useState('Medium');
  const [aiPlatform, setAiPlatform] = useState('LeetCode');
  const [aiProvider, setAiProvider] = useState('gemini');
  const [aiProblem, setAiProblem] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const generateProblem = async () => {
    if (!aiTopic) return;
    setAiLoading(true);
    setAiProblem('');
    try {
      const res = await fetch('/api/crew', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          endpoint: '/api/problem',
          payload: { topic: aiTopic, difficulty: aiDifficulty, platform_style: aiPlatform, llm_provider: aiProvider }
        })
      });
      const data = await res.json();
      if (res.ok) {
        setAiProblem(data.problem);
      } else {
        setAiProblem('Error generating problem.');
      }
    } catch (err) {
      setAiProblem('Error generating problem.');
    }
    setAiLoading(false);
  };

  useEffect(() => {
    if (activeTab === 'latest') {
      if (activePlatform === 'codeforces' && cfProblems.length === 0) {
        setLoading(true);
        fetch('https://codeforces.com/api/problemset.problems')
          .then(res => res.json())
          .then(data => {
            if (data.status === 'OK') {
              setCfProblems(data.result.problems);
            }
            setLoading(false);
          })
          .catch(err => {
            console.error(err);
            setLoading(false);
          });
      } else if (activePlatform === 'leetcode' && lcProblems.length === 0) {
        setLoading(true);
        fetch('https://alfa-leetcode-api.onrender.com/problems?limit=100')
          .then(res => res.json())
          .then(data => {
            if (data && data.problemsetQuestionList) {
              setLcProblems(data.problemsetQuestionList.reverse());
            }
            setLoading(false);
          })
          .catch(err => {
            console.error(err);
            setLoading(false);
          });
      }
    }
  }, [activeTab, activePlatform, cfProblems.length, lcProblems.length]);

  const loadMore = () => setVisibleCount(prev => prev + 20);

  return (
    <>
      {!hideHead && (
        <Head>
          <title>Questions | Phoenix</title>
        </Head>
      )}
      <div className="w-full flex flex-col items-center p-6 sm:p-2 min-h-screen pb-20">
        <h1 className="text-4xl sm:text-3xl font-bold gradient-text mb-8 mt-4 text-center">
          Practice Questions
        </h1>

        {/* Tab Switcher */}
        <div className="flex gap-4 mb-8 bg-black/20 p-1 rounded-full border border-[rgba(162,61,237,0.2)] sm:flex-col sm:rounded-2xl">
          <button
            onClick={() => setActiveTab('latest')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 sm:rounded-xl ${activeTab === 'latest'
                ? 'bg-main text-[#090a0f] shadow-[0_0_15px_rgba(162,61,237,0.5)]'
                : 'text-white/60 hover:text-white'
              }`}
          >
            Latest Contest Problems
          </button>
          <button
            onClick={() => setActiveTab('aigenerated')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 sm:rounded-xl flex items-center justify-center gap-2 ${activeTab === 'aigenerated'
                ? 'bg-[#00ffcc] text-[#090a0f] shadow-[0_0_15px_rgba(0,255,204,0.5)]'
                : 'text-white/60 hover:text-white'
              }`}
          >
            <FaRobot /> AI Custom Problems
          </button>
        </div>

        {/* Content Area */}
        <div className="w-full max-w-6xl">
          {activeTab === 'latest' ? (
            <div className="flex flex-col gap-4 w-full">

              {/* Platform Switcher */}
              <div className="flex justify-center gap-4 mb-4">
                <button
                  onClick={() => { setActivePlatform('codeforces'); setVisibleCount(20); }}
                  className={`px-4 py-1 rounded-md font-bold text-sm transition-all duration-300 border ${activePlatform === 'codeforces'
                      ? 'bg-main text-[#090a0f] border-main'
                      : 'text-main/60 border-main/30 hover:border-main/60 hover:text-main'
                    }`}
                >
                  Codeforces
                </button>
                <button
                  onClick={() => { setActivePlatform('leetcode'); setVisibleCount(20); }}
                  className={`px-4 py-1 rounded-md font-bold text-sm transition-all duration-300 border ${activePlatform === 'leetcode'
                      ? 'bg-[#f89f1b] text-[#090a0f] border-[#f89f1b]'
                      : 'text-[#f89f1b]/60 border-[#f89f1b]/30 hover:border-[#f89f1b]/60 hover:text-[#f89f1b]'
                    }`}
                >
                  LeetCode
                </button>
              </div>

              {loading ? (
                <div className="text-center text-main animate-pulse py-10 font-bold">Loading latest problems from {activePlatform === 'codeforces' ? 'Codeforces' : 'LeetCode'}...</div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activePlatform === 'codeforces' ? (
                      cfProblems.slice(0, visibleCount).map((p, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-xl border border-[rgba(162,61,237,0.2)] bg-[rgba(13,15,28,0.6)] backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_4px_20px_rgba(162,61,237,0.15)] flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <span className="text-xs font-bold px-2 py-1 bg-main/10 text-main rounded-md">
                                {p.contestId}{p.index}
                              </span>
                              {p.rating && (
                                <span className="text-xs font-bold px-2 py-1 bg-[#00ffcc]/10 text-[#00ffcc] rounded-md">
                                  Rating: {p.rating}
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{p.name}</h3>
                            <div className="flex flex-wrap gap-1 mb-4">
                              {p.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-[10px] text-white/50 bg-white/5 px-2 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                              {p.tags.length > 3 && <span className="text-[10px] text-white/50 px-1">+{p.tags.length - 3}</span>}
                            </div>
                          </div>
                          <a
                            href={`https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-main text-main hover:bg-main hover:text-[#090a0f] font-semibold transition-colors"
                          >
                            Solve <BsBoxArrowUpRight />
                          </a>
                        </div>
                      ))
                    ) : (
                      lcProblems.slice(0, visibleCount).map((p, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-xl border border-[rgba(248,159,27,0.2)] bg-[rgba(13,15,28,0.6)] backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_4px_20px_rgba(248,159,27,0.15)] flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <span className="text-xs font-bold px-2 py-1 bg-[#f89f1b]/10 text-[#f89f1b] rounded-md">
                                {p.frontendQuestionId}
                              </span>
                              {p.difficulty && (
                                <span className={`text-xs font-bold px-2 py-1 rounded-md ${p.difficulty === 'Easy' ? 'bg-[#00ffcc]/10 text-[#00ffcc]' :
                                    p.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' :
                                      'bg-red-500/10 text-red-400'
                                  }`}>
                                  {p.difficulty}
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{p.title}</h3>
                            <div className="flex flex-wrap gap-1 mb-4">
                              {p.topicTags?.slice(0, 3).map(tag => (
                                <span key={tag.slug} className="text-[10px] text-white/50 bg-white/5 px-2 py-1 rounded-full">
                                  {tag.name}
                                </span>
                              ))}
                              {p.topicTags?.length > 3 && <span className="text-[10px] text-white/50 px-1">+{p.topicTags.length - 3}</span>}
                            </div>
                          </div>
                          <a
                            href={`https://leetcode.com/problems/${p.titleSlug}/`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-[#f89f1b] text-[#f89f1b] hover:bg-[#f89f1b] hover:text-[#090a0f] font-semibold transition-colors"
                          >
                            Solve <BsBoxArrowUpRight />
                          </a>
                        </div>
                      ))
                    )}
                  </div>
                  {(activePlatform === 'codeforces' ? visibleCount < cfProblems.length : visibleCount < lcProblems.length) && (
                    <button
                      onClick={loadMore}
                      className="mx-auto mt-6 block px-8 py-3 rounded-full bg-[rgba(162,61,237,0.1)] border border-[rgba(162,61,237,0.3)] text-main font-semibold hover:bg-[rgba(162,61,237,0.2)] transition-colors"
                    >
                      Load More Questions
                    </button>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
              <div className="bg-[#0d0f1c] border border-[rgba(0,255,204,0.3)] rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-[#00ffcc] flex items-center gap-2">
                  <FaRobot /> Generate a Coding Problem
                </h2>
                <p className="text-white/60 text-sm">
                  Want to practice something specific? Our AI will generate a brand new problem tailored to your needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <input 
                    type="text"
                    placeholder="Topic (e.g., Dynamic Programming, Graphs)"
                    value={aiTopic}
                    onChange={(e) => setAiTopic(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ffcc] transition-colors"
                  />
                  
                  <div className="flex gap-2">
                    <select 
                      value={aiDifficulty}
                      onChange={(e) => setAiDifficulty(e.target.value)}
                      className="w-1/3 bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ffcc] transition-colors"
                    >
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </select>
                    
                    <select 
                      value={aiPlatform}
                      onChange={(e) => setAiPlatform(e.target.value)}
                      className="w-1/3 bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ffcc] transition-colors"
                    >
                      <option>LeetCode</option>
                      <option>Codeforces</option>
                      <option>CSES</option>
                      <option>CodeChef</option>
                      <option>GeeksforGeeks</option>
                    </select>

                    <select 
                      value={aiProvider}
                      onChange={(e) => setAiProvider(e.target.value)}
                      className="w-1/3 bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ffcc] transition-colors"
                      title="Select AI Model"
                    >
                      <option value="gemini">Gemini</option>
                      <option value="groq">Groq (Llama 3)</option>
                      <option value="cohere">Cohere</option>
                    </select>
                  </div>
                </div>

                <button 
                  onClick={generateProblem}
                  disabled={aiLoading || !aiTopic}
                  className="w-full py-3 mt-2 rounded-lg bg-[#00ffcc] text-[#090a0f] font-bold disabled:opacity-50 hover:bg-[#00ffcc]/80 transition-colors flex justify-center items-center gap-2"
                >
                  {aiLoading ? <><FaSpinner className="animate-spin" /> Generating...</> : 'Generate Problem'}
                </button>
              </div>

              {aiProblem && (
                <div className="bg-black/40 border border-white/10 rounded-2xl p-6 custom-scrollbar text-white/90 leading-relaxed shadow-lg prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown>
                    {aiProblem}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Questions;
