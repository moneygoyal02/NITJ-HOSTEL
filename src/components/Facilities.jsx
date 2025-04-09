import React from 'react';
import './Facilities.css';

const Facilities = ({ facilities }) => {
  return (
    <>
     <h1 className='facilities-heading'>
        <span>FACILITIES</span>
        <hr />
      </h1>
      {facilities && facilities.length === 0 ? (
        <p>No facilities available for this hostel.</p>
      ) : (
        <div className="allfacilities">
          {facilities.map((facility, idx) => {
            const { title, description, quote, image } = facility;
            return (
              <div className="facility-container" key={idx}>
                <div className="facility-logo">
                
                  <img
                    src={image}
                    alt={`Facility logo for ${title}`}
                    loading="lazy"
                  />
                  <h1 className='facilitytitle'>{title}</h1>
                </div>
                <div className="facility-details">
                  
                  <p>{description}</p>
                  <h3>{quote}</h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Facilities;
