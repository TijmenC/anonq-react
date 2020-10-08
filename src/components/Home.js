import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import Question from './Question'



const QuestionUri = "https://localhost:44348/api/Question/"

function Home() {
    const [questionList, setQuestionList] = useState([]);
    const [id, setID] = useState(1);


    useEffect(() => {
        const min = 1;
        const max = 2;
        const rand = Math.round(min + Math.random() * (max - min));
       

        axios.get("https://localhost:44348/api/Question/" + rand).then((res) => {
            const newQuestionList = res.data;
            setQuestionList(newQuestionList);
            console.log(questionList);
        });
    }, []);
    return (
        <div>
            <Question question={questionList} />
        </div>
    );
}
export default Home;