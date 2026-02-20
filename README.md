# UltraDoc Frontend: TMS Audit Dashboard
This is the React-based interface for the UltraDoc POC. It provides a high-fidelity dashboard for logistics professionals to interact with document data, view automated extractions, and verify AI-generated answers with source attribution.

# Submission Links
  # Hosted UI: https://ultra-doc-frontend.vercel.app/
  # Frontend
  # GitHub Repository:  https://github.com/prisam1/ultra-doc-frontend.git
  # Backend
  # GitHub Repository:  https://github.com/prisam1/ultra-doc-backend.git 
 

 # Key Features
 Real-time Confidence Indicator: Visual feedback on AI certainty (Green for $>60\%$, Red for low confidence).
 Source Attribution: Displays the exact text snippet from the PDF used to generate the answer for instant auditing.Structured Data View: A dedicated sidebar that parses and displays JSON extractions (Shipment ID, Carrier, Rate, etc.).Responsive Chat Interface: A clean, professional workspace designed for high-volume document analysis.


  # Architecture
  The system utilizes a Modular RAG (Retrieval-Augmented Generation) architecture:
  Backend: FastAPI for high-performance, asynchronous API handling.
  Vector Database: FAISS (Facebook AI Similarity Search) for high-speed semantic retrieval.
  LLM: Gemini 2.5 Flash via LangChain for grounded reasoning and extraction.
  Frontend: React with a modern, full-viewport dashboard layout.
  
  # Chunking Strategy
  We employ a Recursive Character Text Splitting strategy:
  Chunk Size: 1,000 characters.
  Overlap: 100 characters.
  Reasoning: Logistics documents contain dense tables where context (like a Rate) can be separated from its label. Overlapping ensures that key-value pairs aren't lost if they fall on a split boundary.

  # Retrieval Method
  The system uses Similarity Search with Scores ($k=5$):
  Instead of looking at one part of the document, the system retrieves the 5 most relevant chunks.
  This is critical for logistics documents where a "Carrier Name" may appear in the header, body, and signature. By retrieving multiple chunks, the LLM can reconcile redundant information for higher accuracy.
  
  # Guardrails & Confidence Scoring
  Hallucination Guardrails
  The system implements a multi-layer guardrail approach:
  Context Strictness: The LLM is system-prompted to only use provided context.
  Fallback String: If the context is missing the specific data point, the system is programmed to return: "Not found in document."
  Heuristic Override: If the mathematical confidence score is below 0.35, the system automatically triggers the "Not Found" state to prevent guessing.
  # Confidence Scoring Logic
  Confidence is calculated using a Heuristic Similarity Score derived from the vector space:
 
  $$Confidence = 1 - (\text{FAISS L2 Distance} / 1.5)$$
  
  The raw distance is normalized into a percentage. 
  A score of 60-70% represents a strong semantic match in complex documents, while lower scores signal potential ambiguity.
  < 35%: Triggers the hallucination guardrail.

  # Failure Cases & Improvements
Failure Case: Non-selectable (Scanned/Image-only) PDFs.

Improvement: Integrate OCR (Tesseract/Google Vision) for image-based documents.

Failure Case: Complex nested tables across page breaks.

Improvement: Implement Layout-Aware Parsing (e.g., Unstructured.io) to maintain table row integrity.

Improvement Idea: Add Agentic Retrieval where the AI can decide to re-scan the document with different parameters if the first retrieval confidence is low.

 
# Tech Stack
  Framework: React.js
  Icons: Lucide-React
  HTTP Client: Axios
  Styling: Modern CSS-in-JS (Inter Font Family)
  
# Setup & Installation
  Install dependencies:
  Bash
  npm install

# Configure Backend URL:
Open src/App.js and update the API_BASE constant to Render URL:
 
const API_BASE = "https://ultra-doc-backend-evt7.onrender.com";
# Run locally:

Bash
npm start

# UI Components
1. The Confidence Guardrail
The UI dynamically interprets the backend's heuristic score. If the score is high, it displays a ShieldCheck icon. If the score is low or the "Not found" guardrail is triggered, it displays an AlertCircle to warn the auditor.

2. Automatic Extraction
Upon clicking "Run Extract," the frontend maps the backend's JSON response into a structured key-value list, allowing for quick data entry into a mock TMS system.

#Auditor Notes
Note on Performance: This POC connects to a Render Free Tier backend. If the app feels unresponsive on the first request, the backend is likely "spinning up." Please allow 30-60 seconds for the initial document upload.