import { useState } from 'react';
import { docService } from '../services/api';

export const useUltraDoc = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [extraction, setExtraction] = useState(null);

  const uploadFile = async () => {
    if (!file) return;
    setUploading(true);
    try {
      await docService.upload(file);
      setChatHistory([{ q: "System", a: "Document indexed. Ready for questions.", conf: 1.0 }]);
    } catch (err) {
      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const askQuestion = async (question) => {
    setLoading(true);
    try {
      const res = await docService.ask(question);
      setChatHistory(prev => [{
        q: question,
        a: res.data.answer,
        conf: res.data.confidence,
        source: res.data.source
      }, ...prev]);
      return true;
    } catch (err) {
      alert(`Error: ${err.response?.data?.detail || "Request failed"}`);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const runExtraction = async () => {
    setLoading(true);
    try {
      const res = await docService.extract();
      setExtraction(res.data);
    } catch (err) {
      alert("Extraction failed.");
    } finally {
      setLoading(false);
    }
  };

  return {
    file, setFile, uploading, loading, 
    chatHistory, extraction, 
    uploadFile, askQuestion, runExtraction
  };
};