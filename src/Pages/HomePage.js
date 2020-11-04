import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import Question from '../components/Question'
import HomeButtons from '../components/HomeButtons'

function HomePage() {
    const [fullQuestion, setFullQuestion] = useState(
        {
            question: { title: '', description: '', tag: '', commentsenabled: '' },
            poll: [{ poll: '' }]
        }
    );

    const [id, setID] = useState(2);

    const handleChange = () => {
        axios.get("https://localhost:44348/api/question/GetRandomQuestionId").then((res) => {
            var randomnum = res.data;
            setID(randomnum)
        });
    };

    useEffect(() => {
        axios.get("https://localhost:44348/api/question/" + id + "/QuestionAndPolls").then((res) => {
            setFullQuestion((prevState) => ({ ...prevState, question: res.data.question }));
            setFullQuestion((prevState) => ({ ...prevState, poll: res.data.poll }));
        });
    }, [id]);



return (
    <div>
    <Question question={fullQuestion.question} polls={fullQuestion.poll} />
    <HomeButtons randomid={handleChange} />
    </div>
);
}
export default HomePage