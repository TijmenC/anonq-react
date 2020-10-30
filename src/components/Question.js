import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling/Question.css'
import skip from '../images/skip.png'
import report from '../images/report.png';
import { Row, Col, Image, Figure, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Poll from "./Poll";



function Question({ question, polls }) {
    const [toggle, setToggle] = useState(false);
    const [viewpolls, setPolls] = useState([]);
    

       useEffect(() => {
         setPolls(polls)
         setToggle(false)
      }, [polls]);


    const getPercentages = async (questionid) => {
        setToggle(!toggle);
        await axios.get("https://localhost:44348/api/polls/" + questionid + "/getPercentages").then((res) => {
            console.log(res);
            console.log(res.data);
            setPolls(res.data)
        });
    };

    return (
        <div className="rounded container">
            <Row className="justify-content-md-left">
                <Col md sm="8">
                    <b><h3>{question.title}</h3></b>
                </Col>
            </Row>
            <Row className="justify-content-md-left">
                <Col md sm="12">
                    <b><h8>{question.description}</h8></b>
                </Col>
            </Row>
            <Row className="justify-content-md-left">
                <br />
                {viewpolls.map((viewpolls) => (
                    <Poll key={viewpolls.id} polls={viewpolls} percentages={getPercentages} toggle={toggle} />
                ))}
            </Row>
        </div>
    );
}
export default Question;