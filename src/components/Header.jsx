import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Header = () => (
  <header style={{ height: '64px', backgroundColor: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', flexShrink: 0 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{ backgroundColor: '#2563eb', padding: '8px', borderRadius: '8px' }}>
        <ShieldCheck color="white" size={24} />
      </div>
      <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#1e293b', margin: 0 }}>ULTRA<span style={{ color: '#2563eb' }}>DOC</span></h1>
    </div>
    <div style={{ color: '#64748b', fontSize: '14px', fontWeight: '500' }}>POC TMS Auditor v2.1</div>
  </header>
);

export default Header;