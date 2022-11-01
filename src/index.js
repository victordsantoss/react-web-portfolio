import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProjectContextProvider } from './Context/ProjectContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectContextProvider>
      <App />
    </ProjectContextProvider>
  </React.StrictMode>
);