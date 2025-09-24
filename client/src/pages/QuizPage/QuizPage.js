
import Header from "../../components/Header/Header.js"; 

import QuizCoverIMG from "../../images/potato_background.jpg"; 

import "./QuizPage.css"; 

function QuizPage() { 


    return (
        <div> 
            <Header></Header>

            <section className="quizBody"> 
                <div>
                    <p>Quiz Title</p>
                </div>

                <div>
                    <p>10 Questions</p>
                </div>

                <div>
                    <img src={QuizCoverIMG} alt=""/> 
                </div> 

                <div> 
                    <p>By John Smith</p>
                </div>

                <div>
                    <button>Like</button> 
                    <button>Dislike</button> 
                    <button>Favourite</button> 
                    <button>Follow</button>
                </div> 

                

                <button>Begin Quiz</button>
            </section>

            <footer className="landingFooter">
                <p>Testing</p>
            </footer>
        </div> 
    );
} 

export default QuizPage;