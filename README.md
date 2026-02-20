# UltraDoc Frontend: TMS Audit Dashboard
This is the React-based interface for the UltraDoc POC. It provides a high-fidelity dashboard for logistics professionals to interact with document data, view automated extractions, and verify AI-generated answers with source attribution.
 # Key Features
 Real-time Confidence Indicator: Visual feedback on AI certainty (Green for $>60\%$, Red for low confidence).
 Source Attribution: Displays the exact text snippet from the PDF used to generate the answer for instant auditing.Structured Data View: A dedicated sidebar that parses and displays JSON extractions (Shipment ID, Carrier, Rate, etc.).Responsive Chat Interface: A clean, professional workspace designed for high-volume document analysis.


 
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