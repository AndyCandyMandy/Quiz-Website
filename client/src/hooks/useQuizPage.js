import { useNavigate } from "react-router-dom"; 

export const useQuizPage = () => {

    const navigate = useNavigate();

    const toQuizPage = async (e) => {
        navigate("/Home/Quiz");
    }

    return toQuizPage;
};

