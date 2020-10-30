import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling/Question.css'
import skip from '../images/skip.png'
import report from '../images/report.png';
import { Row, Col, Image, Figure, Button } from 'react-bootstrap';
function Poll({ polls, percentages }) {

    const handleClick = async (e) => {
        e.preventDefault()
        await axios.put("https://localhost:44348/api/polls/" + polls.id + "/UpdateVotes", polls).then((res) => {
            console.log(res);
            console.log(res.data);
        })
        percentages(polls.questionId)
    };

    return (
        <div className="rounded container">
            <Row className="justify-content-md-left">
                <Col>
                    <Button variant="primary" size="lg" onClick={handleClick} block>
                        {polls.poll}
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
export default Poll;