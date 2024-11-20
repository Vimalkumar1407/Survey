import React, { useState } from 'react';
import './App.css';
import HRPage from './components/HRPage';
import EmployeePage from './components/EmployeePage';

function App() {
  const [activePage, setActivePage] = useState('HR');
  const [embedCode, setEmbedCode] = useState(null);
  const [isSurveyPublished, setIsSurveyPublished] = useState(false);
  const [isEmployeeNotified, setIsEmployeeNotified] = useState(false);

  const handlePublish = (code) => {
    setEmbedCode(code);
    setIsSurveyPublished(true);
    setIsEmployeeNotified(true);
    alert('Survey published successfully!');
  };

  const handlePageSwitch = (page) => {
    setActivePage(page);
    if (page === 'Employee') {
      setIsEmployeeNotified(false); // Reset button color after clicking
    }
  };

  return (
    <div className="app-container">
      <div className="nav-buttons">
        <button 
          onClick={() => handlePageSwitch('HR')} 
          className="btn"
        >
          HR Page
        </button>
        <button
          onClick={() => handlePageSwitch('Employee')}
          className={`btn ${isEmployeeNotified ? 'btn-green' : ''}`}
        >
          Employee Page
        </button>
      </div>
      <div className="page-content">
        {activePage === 'HR' ? (
          <HRPage onPublish={handlePublish} />
        ) : (
          <EmployeePage embedCode={embedCode} />
        )}
      </div>
    </div>
  );
}

export default App;
