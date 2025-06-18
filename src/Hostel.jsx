import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import HostelContent from './components/HostelContent';
import Carousel from './components/Carousel';
import { Contact } from './components/Contact';
import MBHAbout from './components/MBHAbout';
import WardenMessage from './components/WardenMessage';
import MBHMess from './components/MBHMess';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import './hostel.css';

const Hostel = () => {
  const { hostel } = useParams();
  const currentHostel = HostelContent[hostel];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!currentHostel) {
    return (
      <div className="hostel-not-found">
        <h1>Hostel not found</h1>
        <Link to="/" className="back-home">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="hostel-page">
      {/* Back to Home Button */}
      <Link to="/" className="back-to-home">
        <i className="fas fa-arrow-left"></i> Back to Home
      </Link>

      {/* Hero Carousel */}
      <section className="hostel-hero">
        <Carousel
          images={currentHostel.carouselImages}
          // Title and subtitle removed as requested
        />
      </section>
      
      {/* Quick Navigation */}
      <nav className="hostel-nav">
        <a href="#about">About</a>
        <a href="#warden">Warden's Message</a>
        <a href="#mess">Mess</a>
        <a href="#facilities">Facilities</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Main Content */}
      <main className="hostel-content">
        {/* About Section */}
        <section id="about" className="hostel-section">
          <MBHAbout
            name={currentHostel.name}
            description={currentHostel.description}
            image={currentHostel.image}
          />
        </section>

        {/* Warden's Message */}
        <section id="warden" className="hostel-section">
          <WardenMessage 
            wardenMessage={currentHostel.wardenMessage} 
            wardenName={currentHostel.wardenName} 
            wardenImage={currentHostel.wardenImage} 
            wardenEmail={currentHostel.wardenEmail}
          />
        </section>

        {/* Mess Section */}
        <section id="mess" className="hostel-section">
          <MBHMess
            messDetails={currentHostel.mess}
            messImage={currentHostel.messImage}
          />
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="hostel-section">
          <Facilities facilities={currentHostel.facilities} />
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="hostel-section">
          <Gallery gallery={currentHostel.gallery} />
        </section>

        {/* Contact Section */}
        <section id="contact" className="hostel-section">
          <Contact contact={currentHostel.contact} />
        </section>
      </main>
    </div>
  );
};

export default Hostel;
