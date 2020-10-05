import React from 'react';
import { Row, Col, Image, Figure, Button, Form, Checkbox } from 'react-bootstrap';

function QuestionForm() {
    return (
        <div className="rounded container">
            <Form >
                <Row className="justify-content-md-center">
                    <Col md="8">
                        <h2>Post A Question</h2>
                        <br />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="8">
                        <Form.Group controlId="Title">
                            <Form.Label><h4>Title</h4></Form.Label>
                            <Form.Control placeholder="Enter Title" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="8">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label><h4>Description</h4></Form.Label>
                            <Form.Control placeholder="Enter Description" as="textarea" rows="3" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="8">
                        <Form.Label><h4>Tag</h4></Form.Label>
                        <Form.Control as="select">
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
                        <Button variant="primary" type="submit">
                            Post
                     </Button>
                    </Col>
                </Row>
            </Form >
        </div>
    );
}
export default QuestionForm;