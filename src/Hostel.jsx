import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import HostelContent from './components/HostelContent';
import Carousel from './components/Carousel';
import { Contact } from './components/Contact';
import MBHAbout from './components/MBHAbout';
import WardenMessage from './components/WardenMessage';
import MBHMess from './components/MBHMess';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './hostel.css';

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const dividerAnim = {
  hidden: { width: 0 },
  visible: { width: '80px', transition: { duration: 0.5 } }
};

const Hostel = () => {
  const { hostel } = useParams();
  const currentHostel = HostelContent[hostel];

  // For animating sections on scroll
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [wardenRef, wardenInView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [messRef, messInView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [facilitiesRef, facilitiesInView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.15 });

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

      {/* Quick Navigation - moved to top */}
      <nav className="hostel-nav">
        <div className="hostel-nav-links-center">
          <a href="#about">About</a>
          <a href="#warden">Warden&apos;s Message</a>
          <a href="#mess">Mess</a>
          <a href="#facilities">Facilities</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact" className="hostel-nav-contact">Contact</a>
        </div>
        <div className="hostel-nav-right">
          
          <div className="hostel-nav-title">
            <span className="hostel-title">{currentHostel.name}</span>
            {currentHostel.tagline && <span className="hostel-tagline">{currentHostel.tagline}</span>}
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="hostel-hero" style={{ position: 'relative' }}>
        <Carousel
          images={currentHostel.carouselImages}
        />
      </section>

      {/* Main Content */}
      <main className="hostel-content">
        {/* About Section */}
        <motion.section
          id="about"
          className="hostel-section"
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? 'visible' : 'hidden'}
          variants={sectionFade}
        >
          <motion.div className="section-header" initial="hidden" animate={aboutInView ? 'visible' : 'hidden'}>
            <motion.h2>About</motion.h2>
            <motion.div className="section-divider" variants={dividerAnim}></motion.div>
          </motion.div>
          <MBHAbout
            name={currentHostel.name}
            description={currentHostel.description}
            image={currentHostel.image}
          />
        </motion.section>
        {/* Warden's Message */}
        <motion.section
          id="warden"
          className="hostel-section"
          ref={wardenRef}
          initial="hidden"
          animate={wardenInView ? 'visible' : 'hidden'}
          variants={sectionFade}
        >
          <motion.div className="section-header" initial="hidden" animate={wardenInView ? 'visible' : 'hidden'}>
            <motion.h2>Warden&apos;s Message</motion.h2>
            <motion.div className="section-divider" variants={dividerAnim}></motion.div>
          </motion.div>
          <WardenMessage 
            wardenMessage={currentHostel.wardenMessage} 
            wardenName={currentHostel.wardenName} 
            wardenImage={currentHostel.wardenImage} 
            wardenEmail={currentHostel.wardenEmail}
          />
        </motion.section>
        {/* Mess Section */}
        <motion.section
          id="mess"
          className="hostel-section"
          ref={messRef}
          initial="hidden"
          animate={messInView ? 'visible' : 'hidden'}
          variants={sectionFade}
        >
          <motion.div className="section-header" initial="hidden" animate={messInView ? 'visible' : 'hidden'}>
            <motion.h2>Mess</motion.h2>
            <motion.div className="section-divider" variants={dividerAnim}></motion.div>
          </motion.div>
          <MBHMess
            messDetails={currentHostel.mess}
            messImage={currentHostel.messImage}
          />
        </motion.section>
        {/* Facilities Section */}
        <motion.section
          id="facilities"
          className="hostel-section"
          ref={facilitiesRef}
          initial="hidden"
          animate={facilitiesInView ? 'visible' : 'hidden'}
          variants={sectionFade}
        >
          <motion.div className="section-header" initial="hidden" animate={facilitiesInView ? 'visible' : 'hidden'}>
            <motion.h2>Facilities</motion.h2>
            <motion.div className="section-divider" variants={dividerAnim}></motion.div>
          </motion.div>
          <Facilities facilities={currentHostel.facilities} />
        </motion.section>
        {/* Gallery Section */}
        <motion.section
          id="gallery"
          className="hostel-section"
          ref={galleryRef}
          initial="hidden"
          animate={galleryInView ? 'visible' : 'hidden'}
          variants={sectionFade}
        >
          <motion.div className="section-header" initial="hidden" animate={galleryInView ? 'visible' : 'hidden'}>
            <motion.h2>Gallery</motion.h2>
            <motion.div className="section-divider" variants={dividerAnim}></motion.div>
          </motion.div>
          <Gallery gallery={currentHostel.gallery} />
        </motion.section>
        {/* Contact Section */}
        <motion.section
          id="contact"
          className="hostel-section"
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? 'visible' : 'hidden'}
          variants={sectionFade}
        >
          <motion.div className="section-header" initial="hidden" animate={contactInView ? 'visible' : 'hidden'}>
            <motion.h2>Contact</motion.h2>
            <motion.div className="section-divider" variants={dividerAnim}></motion.div>
          </motion.div>
          <Contact contact={currentHostel.contact} />
        </motion.section>
      </main>
    </div>
  );
};

export default Hostel;
