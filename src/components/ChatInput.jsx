import React from 'react';
import { Send, Loader2 } from 'lucide-react';

const ChatInput = ({ question, setQuestion, onSubmit, loading }) => (
  <div style={{ padding: '32px 40px', backgroundColor: 'white', borderTop: '1px solid #f1f5f9' }}>
    <form onSubmit={onSubmit} style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '16px' }}>
      <input 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask document questions (e.g. What is the rate?)"
        style={{ flexGrow: 1, padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', fontSize: '16px' }}
      />
      <button disabled={loading} style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: '#1e293b', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
        {loading ? <Loader2 className="animate-spin" color="white" /> : <Send color="white" />}
      </button>
    </form>
  </div>
);

export default ChatInput;