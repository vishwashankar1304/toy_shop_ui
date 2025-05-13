
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Function to initialize demo data for the application
const initializeAppData = () => {
  // Check if we've already initialized
  if (localStorage.getItem('app_initialized')) {
    return;
  }
  
  // Initialize admin user
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  // Only add admin if no users exist
  if (users.length === 0) {
    users.push({
      id: '1',
      name: 'Admin User',
      email: 'admin@gmail.com',
      password: 'admin@123',
      role: 'admin'
    });
    
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  // Mark as initialized
  localStorage.setItem('app_initialized', 'true');
};

// Run initialization
initializeAppData();

createRoot(document.getElementById("root")!).render(<App />);
