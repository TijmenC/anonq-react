import React, { useState, useEffect } from "react";
import { Row, Col, Image, Figure, Button, Form, Checkbox } from 'react-bootstrap';
import axios from "axios";
import '../styling/QuestionForm.css';

const QuestionUri = "https://localhost:44348/api/Question/";

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
                            <Form.Group controlId="title">
                                <br />
                                <Form.Label><h4>Polls</h4></Form.Label>
                                <Form.Control placeholder="Answer 1" name="Answer1" value={Question.title} onChange={handleChange} required />
                                <br />
                                <Form.Control placeholder="Answer 2" name="Answer2" value={Question.title} onChange={handleChange} required />
                                <br />
                                <Form.Control placeholder="Answer 3" name="Answer3" value={Question.title} onChange={handleChange} required />
                                <br />
                                <Form.Control placeholder="Answer 4" name="Answer4" value={Question.title} onChange={handleChange} required />
                            </Form.Group>
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