import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Question from '../components/Question'
import HomeButtons from '../components/HomeButtons'
import QuestionService from "../Services/QuestionService"
import Comment from "../components/Comment"
import CreateComment from "../components/CreateComment";

function HomePage() {
    const [enable, setEnable] = useState();
    const [fullQuestion, setFullQuestion] = useState(
        {
            question: { title: '', description: '', tag: '', commentsenabled: '' },
            poll: [{ poll: '' }]
        }
    );

    const [id, setID] = useState(2);

    const handleChange = () => {
        QuestionService.GetRandomQuestionId().then((res) => {
            var randomnum = res.data;
            setID(randomnum)
        });
    };

    useEffect(() => {
        QuestionService.GetQuestionAndPolls(id).then((res) => {
            setFullQuestion((prevState) => ({ ...prevState, question: res.data.question }));
            setFullQuestion((prevState) => ({ ...prevState, poll: res.data.poll }));
        });
    }, [id]);
    useEffect(() => {
        setEnable(fullQuestion.question.commentsEnabled)
    },
        [fullQuestion.question]);


    return (
        <div>
            <Question question={fullQuestion.question} polls={fullQuestion.poll} />
            <HomeButtons randomid={handleChange} />
            { enable ? <Comment /> : null}
            <CreateComment sentquestionid={fullQuestion.question.id} />
        </div>
    );
}
export default HomePage