
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Debug information to help trace any issues
console.log('Application starting...');
console.log('Base URL:', import.meta.env.BASE_URL);
console.log('Environment:', import.meta.env.MODE);
console.log('Window location:', window.location.href);
console.log('Document base URI:', document.baseURI);

// Log any potential issues with asset loading
window.addEventListener('error', function(e) {
  if (e.target && (e.target.tagName === 'LINK' || e.target.tagName === 'SCRIPT' || e.target.tagName === 'IMG')) {
    console.error('Resource loading error:', e.target.src || e.target.href);
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
