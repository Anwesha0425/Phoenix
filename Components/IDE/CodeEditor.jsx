import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, setCode, language }) => {
  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div className="h-full w-full border border-gray-700 rounded-md overflow-hidden">
      <Editor
        height="100%"
        width="100%"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          wordWrap: 'on',
        }}
      />
    </div>
  );
};

export default CodeEditor;
