
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
  // Type check and cast the target to HTMLElement
  const target = e.target;
  if (target instanceof HTMLElement) {
    if (target.tagName === 'LINK' || target.tagName === 'SCRIPT' || target.tagName === 'IMG') {
      console.error('Resource loading error:', 
        (target as HTMLImageElement | HTMLScriptElement).src || 
        (target as HTMLLinkElement).href
      );
    }
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
