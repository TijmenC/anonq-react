import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import Question from './Question'

const id = 1;

function Home() {
    const [questionList, setQuestionList] = useState([]);
    const [id, setID] = useState(1);

    function handleClick() {
        const min = 1;
        const max = 2;
        const rand = Math.round(min + Math.random() * (max - min));
      }

     
    useEffect(() => {
        axios.get("https://localhost:44348/api/Question/" + id).then((res) => {
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