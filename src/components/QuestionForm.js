import React, { useState, useEffect } from "react";
import { Row, Col, Image, Figure, Button, Form, Checkbox } from 'react-bootstrap';
import axios from "axios";
import PropTypes from 'prop-types';
import '../styling/QuestionForm.css';

const QuestionUri = "https://localhost:44348/api/Question/";
const GetQuestionIDUri = "https://localhost:44348/api/Question/GetQuestionIDByTitle/";


function QuestionForm() {
    /* Question setState */
    const [question, setQuestion] = useState(
        {
            title: '',
            description: '',
            tag: '',
            commentsenabled: ''
        }
    );
    const [fullQuestion, setFullQuestion] = useState(
        {
            question: '',
            poll: []
        }
    );

    const handleChange = (event) => {
        setQuestion({ ...question, [event.target.name]: event.target.value });
    };


    /* Poll setstate */
    const blankPoll = { poll: '' };
    const [poll, setPoll] = useState([
        { ...blankPoll }
    ]);
    const addPoll = () => {
        setPoll([...poll, { ...blankPoll }]);
    };
    const handlePollChange = (e) => {
        const updatedPolls = [...poll];
        updatedPolls[e.target.dataset.idx]["poll"] = e.target.value;
        setPoll(updatedPolls);
    };


    /* Checkbox setstate */
    const [commentEnable, setCommentEnable] = useState(false)

    /* Post Question + Poll */
    const handleSubmit = (e) => {
        e.preventDefault()
        setQuestion({ ...question, commentsenabled: commentEnable });
        setFullQuestion((prevState) => ({ ...prevState, poll: poll }));
        setFullQuestion((prevState) => ({ ...prevState, question: question }));
        axios.post('https://localhost:44348/api/Question', fullQuestion).then((res) => {
            console.log(res);
            console.log(res.data);
        })
    };







    return (
        <div className="FormStyling">
            <div className="rounded container">
                <Form onSubmit={handleSubmit} >
                    <Row className="justify-content-md-center">
                        <Col md="8">
                            <h2>Post A Question</h2>
                            <br />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="8">
                            <Form.Group controlId="title">
                                <Form.Label><h4>Title</h4></Form.Label>
                                <Form.Control placeholder="Enter Title" name="title" value={question.title} onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="8">
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label><h4>Description</h4></Form.Label>
                                <Form.Control placeholder="Enter Description" name="description" value={question.description} onChange={handleChange} as="textarea" rows="3" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="8">
                            <Form.Label><h4>Tag</h4></Form.Label>
                            <Form.Control as="select" name="tag" value={question.tag} onChange={handleChange}>
                                <option>Personal</option>
                                <option>Relationship</option>
                                <option>Abuse</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center" key="checkbox">
                        <Col md="8">
                            <br />
                            <Form.Label><h4>Comments</h4></Form.Label>
                            <Form.Check type="checkbox" id="EnableComments">
                                <Form.Check.Input type="checkbox" value={commentEnable} onChange={() => setCommentEnable(!commentEnable)} isValid />
                                 Enable
                            </Form.Check>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="8">
                            <br />
                            <Button variant="primary" onClick={addPoll}>
                                Create new poll
                            </Button>
                            <br /> <br />
                            {
                                poll.map((val, idx) => {
                                    return (
                                        <Form.Group>
                                            <div key={`poll-${idx}`}>
                                                <Form.Label>{`Poll #${idx + 1}`}</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    data-idx={idx}
                                                    className="poll"
                                                    value={poll[idx].poll}
                                                    onChange={handlePollChange}
                                                />
                                            </div>
                                        </Form.Group>
                                    );
                                })
                            }
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="8">
                            <Button variant="primary" type="submit">
                                Post
                     </Button>
                        </Col>
                    </Row>
                </Form >
            </div>
        </div>
    );
}
export default QuestionForm;