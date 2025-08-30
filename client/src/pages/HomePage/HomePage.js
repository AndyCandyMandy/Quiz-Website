
import Header from "../../components/Header/Header.js"; 
import Trends from "../../components/TrendSection/TrendSection.js"; 

import "./HomePage.css"; 

function HomePage() { 

    return (
        <div> 
            <Header></Header>

            <section className="homeSection" id="trendingId">
                <p>Trending</p> 

                <Trends></Trends>
            </section> 

            <section className="homeSection" id="recentId">
                <p>Recently Viewed</p>
            </section> 

            <section className="homeSection" id="displayId">
                <p>Display</p>
            </section> 

            <footer className="landingFooter">
                <p>Testing</p>
            </footer>
        </div> 
        
    );
} 

export default HomePage;