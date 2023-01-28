import React, { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '50%',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div
          style={{
            width: '100%',
            padding: '10px',
            background: '#f5f5f5',
            marginTop: '10px',
            borderRadius: '5px',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
