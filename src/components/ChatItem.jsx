import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

const ChatItem = ({ item }) => {
  const isSystem = item.q === "System";

  return (
    <div style={{ alignSelf: isSystem ? 'center' : 'flex-start', maxWidth: '85%' }}>
      <div style={{ backgroundColor: isSystem ? '#f1f5f9' : '#eff6ff', padding: '20px', borderRadius: '16px', border: '1px solid #dbeafe' }}>
        <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#2563eb', marginBottom: '8px' }}>
          {item.q.toUpperCase()}
        </div>
        <p style={{ margin: 0, fontSize: '15px', color: '#1e3a8a', lineHeight: '1.6' }}>
          {item.a}
        </p>
        
        {!isSystem && (
          <div style={{ marginTop: '16px', borderTop: '1px solid #dbeafe', paddingTop: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 'bold', color: item.conf > 0.6 ? '#16a34a' : '#dc2626' }}>
              {item.conf > 0.6 ? <ShieldCheck size={14}/> : <AlertCircle size={14}/>}
              CONFIDENCE: {(item.conf * 100).toFixed(0)}%
            </div>
            {item.source && item.source !== "N/A" && (
              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '8px', background: 'white', padding: '8px', borderRadius: '4px' }}>
                <strong>Source:</strong> {item.source}...
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatItem;