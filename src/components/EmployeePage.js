import React from 'react';

const EmployeePage = ({ embedCode }) => {
  return (
    <div className="container">
      <h1>Employee Survey Page</h1>
      {embedCode ? (
        <div className="form-display" dangerouslySetInnerHTML={{ __html: embedCode }} />
      ) : (
        <p>Currently no survey to be filled.</p>
      )}
    </div>
  );
};

export default EmployeePage;
