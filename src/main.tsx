
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Debug information to help trace any issues
console.log('Application starting...');
console.log('Base URL:', import.meta.env.BASE_URL);
console.log('Environment:', import.meta.env.MODE);

createRoot(document.getElementById("root")!).render(<App />);
