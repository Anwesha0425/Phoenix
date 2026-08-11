import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import CodeEditor from '../../Components/IDE/CodeEditor';
import AIAssistant from '../../Components/IDE/AIAssistant';
import { BsPlayFill } from 'react-icons/bs';
import { FaRobot } from 'react-icons/fa';

const defaultCode = {
  python: `print("Hello from Phoenix IDE!")`,
  javascript: `console.log("Hello from Phoenix IDE!");`,
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Phoenix IDE!");
    }
}`,
  cpp: `#include <iostream>

int main() {
    std::cout << "Hello from Phoenix IDE!" << std::endl;
    return 0;
}`
};

export default function IDE() {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState(defaultCode['python']);
  const [output, setOutput] = useState('');
  const [customInput, setCustomInput] = useState('');
  const [activeTab, setActiveTab] = useState('output'); // 'input' or 'output'
  const [isExecuting, setIsExecuting] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [customApiKey, setCustomApiKey] = useState('');
  const [llmProvider, setLlmProvider] = useState('gemini');

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    setCode(defaultCode[lang]);
  };

  // Using '*' for version tells Piston to use the latest available version
  const getPistonLanguageVersion = (lang) => {
    switch (lang) {
      case 'python': return { language: 'python', version: '*' };
      case 'javascript': return { language: 'javascript', version: '*' };
      case 'java': return { language: 'java', version: '*' };
      case 'cpp': return { language: 'c++', version: '*' };
      default: return { language: 'python', version: '*' };
    }
  };

  const runCode = async () => {
    setIsExecuting(true);
    setActiveTab('output');
    setOutput('Executing...');
    try {
      const { language: pLang, version: pVer } = getPistonLanguageVersion(language);
      const res = await axios.post('/api/execute', {
        language: pLang,
        version: pVer,
        files: [{ name: 'main', content: code }],
        stdin: customInput,
        apiKey: customApiKey
      });

      if (res.data.message) { // Sometimes piston returns a direct error message
        setOutput('Error: ' + res.data.message);
      } else if (res.data.compile && res.data.compile.stderr) {
        setOutput(res.data.compile.stderr);
      } else if (res.data.run && res.data.run.stderr) {
         setOutput(res.data.run.stderr + '\n' + res.data.run.stdout);
      } else if (res.data.run) {
        setOutput(res.data.run.stdout);
      } else {
        setOutput('Execution finished with no output.');
      }
    } catch (error) {
      setOutput('Error: ' + (error.response?.data?.message || error.message));
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Head>
        <title>Phoenix IDE</title>
      </Head>
      
      <Navbar />

      <div className="flex-grow flex flex-col p-4 mt-20 max-w-7xl mx-auto w-full gap-4">
        <div className="flex justify-between items-center bg-gray-900 p-4 rounded-lg border border-gray-700 shadow-md">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Phoenix IDE
            </h1>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-gray-800 border border-gray-600 text-white p-2 rounded focus:outline-none focus:border-blue-500 transition"
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowAI(!showAI)}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-4 py-2 rounded font-semibold transition transform hover:scale-105 shadow-lg"
            >
              <FaRobot />
              Ask AI
            </button>
            <button
              onClick={runCode}
              disabled={isExecuting}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded font-bold transition disabled:opacity-50"
            >
              <BsPlayFill size={20}/>
              {isExecuting ? 'Running...' : 'Run'}
            </button>
            <div className="flex items-center gap-2 ml-4 border-l border-gray-600 pl-4">
              <input 
                type="password" 
                placeholder="Custom API Key (Optional)" 
                value={customApiKey}
                onChange={(e) => setCustomApiKey(e.target.value)}
                className="bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded focus:outline-none focus:border-blue-500 text-sm w-48 placeholder-gray-500"
              />
              <select
                value={llmProvider}
                onChange={(e) => setLlmProvider(e.target.value)}
                className="bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded focus:outline-none focus:border-blue-500 text-sm"
              >
                <option value="gemini">Gemini</option>
                <option value="groq">Groq (Llama 3)</option>
                <option value="cohere">Cohere</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex-grow flex gap-4 h-[70vh]">
          {/* Main Editor Area */}
          <div className={`flex flex-col gap-4 ${showAI ? 'w-2/3' : 'w-full'} transition-all duration-300`}>
            <div className="flex-grow rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <CodeEditor code={code} setCode={setCode} language={language} />
            </div>
            
            <div className="h-1/3 bg-gray-900 rounded-lg border border-gray-700 shadow-lg flex flex-col">
              <div className="flex bg-gray-800 border-b border-gray-700 rounded-t-lg">
                <button 
                  onClick={() => setActiveTab('input')}
                  className={`px-4 py-2 font-semibold transition rounded-tl-lg ${activeTab === 'input' ? 'text-white border-b-2 border-blue-500 bg-gray-700' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
                >
                  Custom Input
                </button>
                <button 
                  onClick={() => setActiveTab('output')}
                  className={`px-4 py-2 font-semibold transition ${activeTab === 'output' ? 'text-white border-b-2 border-blue-500 bg-gray-700' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
                >
                  Output
                </button>
              </div>
              
              <div className="flex-grow p-0 overflow-hidden relative">
                {activeTab === 'input' ? (
                  <textarea
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Enter custom standard input (stdin) here..."
                    className="absolute inset-0 w-full h-full p-4 bg-gray-900 text-white font-mono text-sm resize-none focus:outline-none"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full p-4 overflow-auto font-mono text-sm whitespace-pre-wrap text-green-400">
                    {output}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* AI Assistant Sidebar */}
          {showAI && (
            <div className="w-1/3 transition-all duration-300">
              <AIAssistant code={code} language={language} apiKey={customApiKey} llmProvider={llmProvider} onClose={() => setShowAI(false)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
