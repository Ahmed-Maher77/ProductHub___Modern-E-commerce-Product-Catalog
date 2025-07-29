import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log("main.jsx executing...");
console.log("Root element:", document.getElementById('root'));

const root = createRoot(document.getElementById('root'));
console.log("Root created:", root);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

console.log("App rendered to root");
