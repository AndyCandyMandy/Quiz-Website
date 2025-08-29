
import Header from "../../components/Header/Header.js"; 

import "./HomePage.css"; 

function HomePage() { 
    return (
        <div> 
            <Header></Header>

            <section className="homeSection" id="trendingId">
                <p>Trending</p> 

                <div className="trendingSection">
                    <div className="trendingContent trendiestContent"> 
                        <p>Element 1</p>
                    </div> 
                    <div className="trendingContent"> 
                        <p>Element 2</p>
                    </div> 
                    <div className="trendingContent"> 
                        <p>Element 3</p>
                    </div> 
                    <div className="trendingContent"> 
                        <p>Element 4</p>
                    </div> 
                    <div className="trendingContent"> 
                        <p>Element 5</p>
                    </div>
                </div>
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