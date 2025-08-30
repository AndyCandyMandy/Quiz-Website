
import "./TrendSection.css"; 

function TrendSection() { 

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
                    <div className="trendingContent" key={i}>
                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </> 
    );
} 

export default TrendSection;