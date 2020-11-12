import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Question from '../components/Question'
import HomeButtons from '../components/HomeButtons'
import QuestionService from "../Services/QuestionService"
import CommentService from "../Services/CommentService"
import Comment from "../components/Comment"
import { Row, Col } from 'react-bootstrap';
import CreateComment from "../components/CreateComment";

function HomePage() {
    const [enable, setEnable] = useState();
    const [fullQuestion, setFullQuestion] = useState(
        {
            question: { title: '', description: '', tag: '', commentsenabled: '' },
            poll: [{ poll: '' }]
        }
    );
    const [comments, setComments] = useState([]);

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
        })
            .catch((error) => {
                console.log(error.response.data);
            });
        CommentService.GetComment(id).then((res) => {
            setComments(res.data)
        })

    }, [id]);
    useEffect(() => {
        setEnable(fullQuestion.question.commentsEnabled)
    },
        [fullQuestion.question]);

    const ShowComments = () => (
        <div className="rounded container">
            <Row className="justify-content-md-left ">
                <Col md="1">
                <b><h2>Comments</h2></b>
                </Col>
                <Col md="12">
                <hr />
                </Col>
            </Row>
            {comments.map((comments) => (
                <Comment key={comments.id} sentcomments={comments} />
            ))}
            <CreateComment sentquestionid={fullQuestion.question.id} />
        </div>
    )


    return (
        <div className="flex rounded container">
            <Question question={fullQuestion.question} polls={fullQuestion.poll} />
            <HomeButtons randomid={handleChange} />
             { enable ? <ShowComments/> : null} 
            
        </div>
    );
}
export default HomePage