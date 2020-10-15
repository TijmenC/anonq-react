import React, { useState, useEffect } from "react";
import { Row, Col, Image, Figure, Button, Form, Checkbox } from 'react-bootstrap';
import axios from "axios";
import PropTypes from 'prop-types';
import '../styling/QuestionForm.css';

const QuestionUri = "https://localhost:44348/api/Question/";
const GetQuestionIDUri = "https://localhost:44348/api/Question/GetQuestionIDByTitle/";


function QuestionForm() {
    const [Question, setQuestion] = useState(
        {
            title: '',
            description: '',
            tag: '',
            commentsenabled: ''
        }
    );

    const handleChange = (event) => {
        setQuestion({ ...Question, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://localhost:44348/api/Question', Question).then((res) => {
            console.log(res);
            console.log(res.data);
        })
        axios.get(GetQuestionIDUri + Question.title).then((res) => {
        });
    };




    const blankPoll = { poll: '', questionid: '' };
    const [Poll, setPoll] = useState([
        { ...blankPoll }
    ]);
    const addPoll = () => {
        setPoll([...Poll, { ...blankPoll }]);
    };
    const handlePollChange = (e) => {
        const updatedPolls = [...Poll];
        updatedPolls[e.target.dataset.idx]["poll"] = e.target.value;
        setPoll(updatedPolls);
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
                                <Form.Control placeholder="Enter Title" name="title" value={Question.title} onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="8">
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label><h4>Description</h4></Form.Label>
                                <Form.Control placeholder="Enter Description" name="description" value={Question.description} onChange={handleChange} as="textarea" rows="3" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="8">
                            <Form.Label><h4>Tag</h4></Form.Label>
                            <Form.Control as="select" name="tag" value={Question.tag} onChange={handleChange}>
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
                                <Form.Check.Input type="checkbox" isValid />
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
                                Poll.map((val, idx) => {
                                    return (
                                        <Form.Group>
                                            <div key={`poll-${idx}`}>
                                                <Form.Label>{`Poll #${idx + 1}`}</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    data-idx={idx}
                                                    className="poll"
                                                    value={Poll[idx].poll}
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