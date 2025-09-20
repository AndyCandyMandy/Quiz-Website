import { useQuizPage } from "../../hooks/useQuizPage.js";

import "./DisplaySection.css"; 

function DisplaySection() { 

    const toQuizPage = useQuizPage();

    const displayContent = [
        "Element 1",
        "Element 2",
        "Element 3",
        "Element 4",
        "Element 5", 
    ];

    return (
        <> 

            <div className="displaySection">
                {displayContent.map((text, i) => (
                    <div className="trendingContent" onClick={() => {toQuizPage()}} key={i}>
                        <p>{text}</p>
                    </div>
                ))}
            </div>
            
        </> 
    );
} 

export default DisplaySection;