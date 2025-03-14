
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Debug information for deployment troubleshooting
console.log('Application starting...');
console.log('Environment:', import.meta.env.MODE);
console.log('Base URL:', import.meta.env.BASE_URL);
console.log('Window location:', window.location.href);

// CSS loading verification
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content loaded');
  // Check if Tailwind styles are applied
  const styles = window.getComputedStyle(document.body);
  console.log('Body background:', styles.backgroundColor);
  console.log('Stylesheets loaded:', document.styleSheets.length);
});

// Log any potential issues with CSS or asset loading
window.addEventListener('error', function(e) {
  console.error('Resource loading error:', e);
  if (e.target && e.target instanceof HTMLElement) {
    const element = e.target;
    if (element.tagName === 'LINK' || element.tagName === 'STYLE') {
      console.error('Style loading error:', element);
    }
  }
}, true);

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
} else {
  console.error("Root element not found!");
}
