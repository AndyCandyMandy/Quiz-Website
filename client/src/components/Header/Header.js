import React, { useState, useEffect } from "react"; 
import { scrollSectionBtn } from "../../utils/scrollTo.js";

import "./Header.css"; 

function Header() { 
    const [isHeaderContentOpen, setIsHeaderContentOpen] = useState(false); 
    
      useEffect(() => {  
          // Function closes the hamburger menu when the header is no longer attached/sticky
          // (Closes the hamburger menu when the viewport deteches the header)
          const handleHeaderScroll = () => { 
            if (headerNotSticky() && isHeaderContentOpen) {
                setIsHeaderContentOpen(false);
            }
          }; 
          window.addEventListener("scroll", handleHeaderScroll);
    
          return () => {
            window.removeEventListener("scroll", handleHeaderScroll);
          };
      }, [isHeaderContentOpen]); 

       // Function returns true if the header is not sticky/attached, false otherwise. 
        const headerNotSticky = () => {   
            const header = document.getElementById("headerId"); 
            if (!header) return false;
      
            const rect = header.getBoundingClientRect();
            
            return rect.top > 1;
        };
      
        // Function toggles between the hamburger menu states - if the header is not sticky/attached, scroll to the annoucement section.
        // (Meant to used only on the hamburger button)
        const toggleHamburger = () => { 
            if (headerNotSticky()) { 
                scrollSectionBtn("profileId");
            } 
            else {
                setIsHeaderContentOpen(prev => !prev); 
            }
        }; 
      
        // Function sets the hamburger menu states to false.
        const turnOffHamburger = () => {
            setIsHeaderContentOpen(false);
        }

    return (
        <header className="headerSection" id="headerId">
            <h2>Quiz Website</h2> 

            <div className={`headerBtnBox ${isHeaderContentOpen ? "active" : ""}`}>
                <p className="headerBtn" onClick={() => {scrollSectionBtn("trendingId"); turnOffHamburger()}}>Trending</p> 
                <p className="headerBtn" onClick={() => {scrollSectionBtn("recentId"); turnOffHamburger()}}>Recent</p>
                <p className="headerBtn" onClick={() => {scrollSectionBtn("displayId"); turnOffHamburger()}}>Catalogue</p> 
                <p className="headerBtn">Create Quiz</p>
                <p className="headerBtn">My Profile</p>
            </div> 

            <div className={`headerHamburgerBtn ${isHeaderContentOpen ? "toggleBurger" : ""}`} onClick={toggleHamburger}> 
                <div className="bar1"></div> 
                <div className="bar2"></div> 
                <div className="bar3"></div>
            </div> 
        </header>
    );
} 

export default Header;