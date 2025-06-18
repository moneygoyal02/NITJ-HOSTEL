import React from 'react';
import './WardenMessage.css';

const WardenMessage = ({
  wardenMessage,
  wardenName,
  wardenEmail,
  wardenImage
}) => {
  return (
    <div className="warden-wrapper">
      <div className="image-content">
        <img src={wardenImage} alt={wardenName} />
        <p>
          <span className="warden-name">{wardenName}</span><br />
          <a href={`mailto:${wardenEmail}`} className="warden-email">
            {wardenEmail}
          </a><br />
          Hostel Warden
        </p>
      </div>

      <div className="text-content">
        <h1 className="message">
          MESSAGE
          <hr />
        </h1>
        <h1>FROM THE HOSTEL WARDEN</h1>
        <p>Dear Students,</p>
        <p>{wardenMessage}</p>
        <p>Best Regards,</p>
        <p>{wardenName}</p>
      </div>
    </div>
  );
};

export default WardenMessage;
