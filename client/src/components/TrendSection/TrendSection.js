import { useQuizPage } from "../../hooks/useQuizPage.js";

import "./TrendSection.css"; 

function TrendSection() { 

    const toQuizPage = useQuizPage();

    const trendingContent = [
        "Element 1",
        "Element 2",
        "Element 3",
        "Element 4",
        "Element 5", 
    ];

    return (
        <>
            <div className={`trendingSection ${trendingContent.length > 4 ? "defaultTrend" : ""}`}>
                {trendingContent.map((text, i) => (
                    <div className="trendingContent" onClick={() => {toQuizPage()}} key={i}> 
                        <div className="trendingTitleBox">
                            <p>{text}</p>
                            <p>By Someone</p>
                            <div className="trendingTitleContent">
                                <button className="trendingBtn">Like</button> 
                                <button className="trendingBtn">Dislike</button> 
                                <button className="trendingBtn">Favourite</button>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </> 
    );
} 

export default TrendSection;