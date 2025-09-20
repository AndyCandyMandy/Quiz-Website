import { useQuizPage } from "../../hooks/useQuizPage.js";

import "./RecentSection.css"; 

function RecentSection() { 

    const toQuizPage = useQuizPage();

    const recentContent = [
        "Element 1",
        "Element 2",
        "Element 3",
        "Element 4",
        "Element 5", 
    ];


    return (
        <> 
            <div className="recentSection">
                {recentContent.map((text, i) => (
                    <div className="recentContent" onClick={() => {toQuizPage()}} key={i}>
                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </> 
    );
} 

export default RecentSection;