import React, { useState } from 'react';
import axios from 'axios';

const AIAssistant = ({ code, language, apiKey, onClose }) => {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = { role: 'user', content: query };
    setChat((prev) => [...prev, userMessage]);
    setQuery('');
    setIsLoading(true);

    try {
      const response = await axios.post('/api/agent', {
        code,
        language,
        query: userMessage.content,
        apiKey
        // Optional: send history if you want context to persist
      });

      const aiMessage = { role: 'assistant', content: response.data.reply };
      setChat((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      setChat((prev) => [...prev, { role: 'assistant', content: 'Error: Could not get response from AI.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white rounded-md border border-gray-700 shadow-xl">
      <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-gray-800 rounded-t-md">
        <h2 className="text-lg font-bold flex items-center">
          <span className="mr-2">🤖</span> AI Assistant
        </h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition">
          ✕
        </button>
      </div>
      
      <div className="flex-grow p-4 overflow-y-auto bg-gray-900 space-y-4">
        {chat.length === 0 ? (
          <div className="text-gray-500 text-center mt-10">
            Ask me anything about your code!
          </div>
        ) : (
          chat.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-gray-700 text-gray-200 rounded-bl-none whitespace-pre-wrap'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-gray-700 p-3 rounded-lg rounded-bl-none text-gray-400 animate-pulse">
                Thinking...
             </div>
          </div>
        )}
      </div>

      <form onSubmit={handleAsk} className="p-4 border-t border-gray-700 bg-gray-800 flex gap-2 rounded-b-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question about the code..."
          className="flex-grow p-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500 transition"
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default AIAssistant;
