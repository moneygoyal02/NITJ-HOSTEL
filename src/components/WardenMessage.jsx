// src/components/WardenMessage.js

import React from 'react';
import './WardenMessage.css';

const WardenMessage = ({ wardenMessage, wardenName, wardenImage }) => {
  return (
    <div className="chief-warden-container">
      <div className="image-content">
        <img src={wardenImage} alt={wardenName} />
        <p><span>{wardenName}</span><br />
        Hostel Warden</p>
      </div>
      <div className="text-content">
        <h1 className='message'>
          MESSAGE
          <hr />
        </h1>
        <h1>FROM THE HOSTEL WARDEN</h1>
        <p>Dear Students,</p>
        <p>{wardenMessage}</p> {/* Display dynamic warden message */}
        <p>Best Regards,</p>
        <p>{wardenName}</p>
      </div>
    </div>
  );
};

export default WardenMessage;
