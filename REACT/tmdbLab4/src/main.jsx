import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; 
import './index.css'; 
import CustomTheme from './components/UI/CustomTheme.jsx';

const root = createRoot(document.getElementById('root'));


root.render(
  <StrictMode>
    {/* Wrap the entire App inside the CustomTheme */}
    <CustomTheme>
      <App />
    </CustomTheme>
  </StrictMode>
);