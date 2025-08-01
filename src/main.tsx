import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initCustomCursor } from './lib/cursor.ts'

// Initialize custom cursor
initCustomCursor();

createRoot(document.getElementById("root")!).render(<App />);
