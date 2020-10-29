import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling/Question.css'
import skip from '../images/skip.png'
import report from '../images/report.png';
import { Row, Col, Image, Figure, Button } from 'react-bootstrap';


function Poll( { polls }) {
    return (
        <div className="rounded container">
        <Row className="justify-content-md-left">
             <Col>
                    <Button variant="primary" size="lg" block>
                        {polls.poll}
                    </Button>          
                </Col>
        </Row>
        </div>
    );
}
export default Poll;