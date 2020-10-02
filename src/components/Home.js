import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import Question from './Question'

const QuestionUri = "https://localhost:44348/api/Question/";

function Home() {
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        axios.get(QuestionUri).then((res) => {
            const newQuestionList = res.data;
            setQuestionList(newQuestionList);
            console.log(questionList);
        });
    }, []);
    return (
        <div>
            {questionList.map((question) => (
                <Question key={question.id} question={question} />
            ))}
        </div>
    );
}
export default Home;