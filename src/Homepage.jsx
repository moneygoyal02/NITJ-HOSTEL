import React, { useEffect } from 'react';
import './App.css';
import Slideshows from './Slideshow';
import WardenMessage from './Wardenmessage';
import DirectorMessage from './DirectorMessage';
import HostelList from './List';
import megaHostelImage from './mega-hostel-boys.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Homepage = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="homepage">
            {/* Enhanced Hero Section */}
            <motion.section 
                className="enhanced-hero-section" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-background" style={{
                    backgroundImage: `url(${megaHostelImage})`,
                }}></div>
                
                <motion.div 
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <motion.div 
                        className="hero-text-container"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.3
                                }
                            }
                        }}
                    >
                        <motion.span 
                            className="hero-welcome"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            Welcome to
                        </motion.span>
                        <motion.h1 
                            className="hero-title"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            NITJ Hostels
                        </motion.h1>
                        <motion.p 
                            className="hero-subtitle"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            Where Education Meets Community Living
                        </motion.p>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.5 } }
                            }}
                        >
                            <motion.button 
                                className="explore-btn"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                            >
                                Explore Hostels
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="scroll-indicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <span>Scroll Down</span>
                        <i className="fas fa-chevron-down"></i>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Enhanced Slideshow Section */}
            <motion.div 
                ref={ref}
                className="enhanced-slideshow-section"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.8 } }
                }}
            >
                <motion.div 
                    className="slideshow-header"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                >
                    <h2>Explore Our Hostels</h2>
                    <div className="section-divider"></div>
                    <p>Take a virtual tour of our state-of-the-art hostel facilities</p>
                </motion.div>
                
                <motion.div 
                    className="slideshow-container"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }
                    }}
                >
                    <Slideshows />
                </motion.div>
            </motion.div>
                
            {/* Features Section */}
            <motion.section 
                className="features-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.h2 variants={fadeIn}>Why Choose NITJ Hostels?</motion.h2>
                <div className="features-grid">
                    <motion.div 
                        className="feature-card"
                        variants={fadeIn}
                        whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                    >
                        <i className="fas fa-users"></i>
                        <h3>Vibrant Community</h3>
                        <p>Join a diverse community of students from across India</p>
                    </motion.div>
                    <motion.div 
                        className="feature-card"
                        variants={fadeIn}
                        whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                    >
                        <i className="fas fa-book"></i>
                        <h3>Study Environment</h3>
                        <p>Dedicated study spaces and 24/7 library access</p>
                    </motion.div>
                    <motion.div 
                        className="feature-card"
                        variants={fadeIn}
                        whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                    >
                        <i className="fas fa-basketball-ball"></i>
                        <h3>Sports Facilities</h3>
                        <p>Multiple sports courts and fitness areas</p>
                    </motion.div>
                    <motion.div 
                        className="feature-card"
                        variants={fadeIn}
                        whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                    >
                        <i className="fas fa-utensils"></i>
                        <h3>Dining Facilities</h3>
                        <p>Quality food with multiple meal options</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Statistics Section */}
            <motion.section 
                className="stats-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="stats-grid">
                    <motion.div 
                        className="stat-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                    >
                        <h3>1000+</h3>
                        <p>Happy Students</p>
                    </motion.div>
                    <motion.div 
                        className="stat-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                    >
                        <h3>8</h3>
                        <p>Hostel Blocks</p>
                    </motion.div>
                    <motion.div 
                        className="stat-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                    >
                        <h3>24/7</h3>
                        <p>Security</p>
                    </motion.div>
                    <motion.div 
                        className="stat-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                    >
                        <h3>100%</h3>
                        <p>WiFi Coverage</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section 
                className="about-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Life at NITJ Hostels
                </motion.h2>
                <div className="about-content">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Our hostels are more than just places to stay; they are thriving communities within the scenic NIT Jalandhar campus. Representing unity in diversity, these hostels bring together students from across the country, creating a unique blend of cultures and friendships that enriches every resident's experience.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        Life here is filled with memorable moments—from late-night discussions and early morning study sessions to friendly badminton and basketball games. Each hostel features its own garden, providing a peaceful retreat, along with dedicated courts where students can unwind and stay active.
                    </motion.p>
                </div>
            </motion.section>

            {/* Director Message Section */}
            <DirectorMessage />
            
            {/* Chief Warden Message Section */}
            <WardenMessage />
            
            {/* Hostel List */}
            <HostelList />
        </div>
    );
};

export default Homepage;
