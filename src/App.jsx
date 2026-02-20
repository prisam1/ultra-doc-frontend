import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatItem from './components/ChatItem';
import ChatInput from './components/ChatInput';
import { useUltraDoc } from './hooks/useUltraDoc';

function App() {
  const { file, setFile, uploading, loading, chatHistory, extraction, uploadFile, askQuestion, runExtraction } = useUltraDoc();
  const [question, setQuestion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await askQuestion(question)) setQuestion("");
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc', overflow: 'hidden', fontFamily: 'Inter, sans-serif' }}>
      <Header />
      <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <Sidebar 
          file={file} setFile={setFile} 
          onUpload={uploadFile} uploading={uploading} 
          extraction={extraction} onExtract={runExtraction} 
        />
        <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ flexGrow: 1, padding: '40px', overflowY: 'auto', display: 'flex', flexDirection: 'column-reverse', gap: '24px' }}>
            {chatHistory.map((item, i) => <ChatItem key={i} item={item} />)}
          </div>
          <ChatInput 
            question={question} setQuestion={setQuestion} 
            onSubmit={handleSubmit} loading={loading} 
          />
        </main>
      </div>
    </div>
  );
}
export default App;