import { useRef } from "react";

export const MenuSec = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    return (
        <div className="menusec">
            <div className="container">
                <div className="menutab">
                    <ul className="reset">
                        <li><button onClick={() => scrollToSection(homeRef)}>Home</button></li>
                        <li><button onClick={() => scrollToSection(aboutRef)}>About</button></li>
                        <li><button onClick={() => scrollToSection(serviceRef)}>Service</button></li>
                        <li><button onClick={() => scrollToSection(projectRef)}>Projects</button></li>
                        <li><button onClick={() => scrollToSection(contactRef)}>Contact</button></li>
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
