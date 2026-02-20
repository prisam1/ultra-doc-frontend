import React from 'react';
import { Upload, Table } from 'lucide-react';

const Sidebar = ({ file, setFile, onUpload, uploading, extraction, onExtract }) => (
  <aside style={{ width: '400px', backgroundColor: 'white', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', padding: '24px', gap: '24px' }}>
    {/* Upload Section */}
    <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
      <h4 style={{ marginTop: 0, marginBottom: '16px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: "gray" }}>
        <Upload size={16}/> Upload Document
      </h4>
      <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: 'none' }} />
      <label htmlFor="file" style={{ display: 'block', padding: '16px', border: '2px dashed #cbd5e1', borderRadius: '8px', textAlign: 'center', cursor: 'pointer', color: '#64748b', fontSize: '13px' }}>
        {file ? file.name : "Choose PDF/Docx"}
      </label>
      <button onClick={onUpload} disabled={uploading || !file} style={{ width: '100%', marginTop: '12px', padding: '12px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', opacity: uploading ? 0.7 : 1 }}>
        {uploading ? "Processing..." : "Process Document"}
      </button>
    </div>

    {/* Extraction Section */}
    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: "gray" }}>
          <Table size={16}/> Extraction
        </h4>
        <button onClick={onExtract} style={{ color: '#16a34a', cursor: 'pointer', background: '#f1f5f9', fontWeight: 'bold', fontSize: '12px', border: '1px solid #16a34a', padding: '4px 10px', borderRadius: '8px' }}>
          Run Extraction
        </button>
      </div>
      <div style={{ backgroundColor: '#0f172a', borderRadius: '12px', padding: '16px', overflowY: 'auto', flexGrow: 1 }}>
        {extraction ? (
          Object.entries(extraction).map(([k, v]) => (
            <div key={k} style={{ marginBottom: '12px', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
              <div style={{ fontSize: '10px', color: '#6366f1', textTransform: 'uppercase', fontWeight: 'bold' }}>{k}</div>
              <div style={{ fontSize: '13px', color: '#f8fafc' }}>{v || "null"}</div>
            </div>
          ))
        ) : (
          <p style={{ color: '#475569', fontSize: '13px', textAlign: 'center' }}>No data extracted yet.</p>
        )}
      </div>
    </div>
  </aside>
);

export default Sidebar;