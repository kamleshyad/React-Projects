import { useState, useRef, useEffect } from "react";

export const Stickynav = () => {
    const [activeSection, setActiveSection] = useState('home'); // Track active section

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    // Function to scroll to specific section with offset
    const scrollToSection = (ref, section) => {
        const topOffset = 120; // Offset in pixels (you can adjust this value)
        const elementTop = ref.current.getBoundingClientRect().top;
        window.scrollTo({
            top: elementTop + window.pageYOffset - topOffset,
            behavior: 'smooth',
        });
        setActiveSection(section); // Set active section on click
    };

    // Function to handle scroll and update active section
    const handleScroll = () => {
        const sections = [
            { id: 'home', ref: homeRef },
            { id: 'about', ref: aboutRef },
            { id: 'service', ref: serviceRef },
            { id: 'project', ref: projectRef },
            { id: 'contact', ref: contactRef }
        ];

        // Find the section that's currently in view
        for (let section of sections) {
            const rect = section.ref.current.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
                setActiveSection(section.id);
                break;
            }
        }
    };
    

    // Add scroll event listener on mount and clean up on unmount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Call handleScroll on component mount to ensure the active section is correct
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    

    return (
        <div className="menusec">
            <div className="container">
                <div className="menutab">
                    <ul className="reset">
                        <li>
                            <button
                                className={activeSection === 'home' ? 'active' : ''}
                                onClick={() => scrollToSection(homeRef, 'home')}
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeSection === 'about' ? 'active' : ''}
                                onClick={() => scrollToSection(aboutRef, 'about')}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeSection === 'service' ? 'active' : ''}
                                onClick={() => scrollToSection(serviceRef, 'service')}
                            >
                                Service
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeSection === 'project' ? 'active' : ''}
                                onClick={() => scrollToSection(projectRef, 'project')}
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeSection === 'contact' ? 'active' : ''}
                                onClick={() => scrollToSection(contactRef, 'contact')}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="menucontent">
                    <div className="content" ref={homeRef}>
                        <h1>Home</h1>
                    </div>
                    <div className="content" ref={aboutRef}>
                        <h1>About Us</h1>
                    </div>
                    <div className="content" ref={serviceRef}>
                        <h1>Service</h1>
                    </div>
                    <div className="content" ref={projectRef}>
                        <h1>Projects</h1>
                    </div>
                    <div className="content" ref={contactRef}>
                        <h1>Contact</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};