
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Debug information for deployment troubleshooting
console.log('Application starting...');
console.log('Environment:', import.meta.env.MODE);
console.log('Window location:', window.location.href);

// Log any potential issues with CSS or asset loading
window.addEventListener('error', function(e) {
  if (e.target && e.target instanceof HTMLElement) {
    const element = e.target;
    if (element.tagName === 'LINK' || element.tagName === 'STYLE') {
      console.error('Style loading error:', element);
    }
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
