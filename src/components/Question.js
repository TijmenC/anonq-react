import React, { useState, useEffect } from "react";
import '../styling/Question.css'
import { Row, Col } from 'react-bootstrap';
import Poll from "./Poll";
import PollService from "../services/PollService"



function Question({ question, polls }) {
    const [toggle, setToggle] = useState(false);
    const [viewpolls, setPolls] = useState([]);
    

       useEffect(() => {
         setPolls(polls)
         setToggle(false)
      }, [polls]);


    const getPercentages = (questionid) => {
        setToggle(!toggle);
         PollService.GetPollPercentages(questionid).then((res) => {
            console.log(res);
            console.log(res.data);
            setPolls(res.data)
        })
        .catch((error) => {
            console.log(error.response.data);
        });
        
    };

    return ( 
        <div className="questionHead mx-auto">
            <Row className="justify-content-md-left" data-testid="question-label-title">
                <Col md sm="8">
                    <b><h3>{question.title}</h3></b>
                </Col>
            </Row>
            <Row className="justify-content-md-left" data-testid="question-label-description">
                <Col md sm="12">
                    <b><h8>{question.description}</h8></b>
                </Col>
            </Row>
            <Row className="justify-content-md-left" >
                <br />
                {viewpolls.map((viewpolls) => (
                    <Poll key={viewpolls.id} polls={viewpolls} percentages={getPercentages} toggle={toggle} />
                ))}
            </Row>
    </div>
    );
}
export default Question;