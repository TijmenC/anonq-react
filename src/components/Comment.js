import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styling/Comment.css'
import { Row, Col } from 'react-bootstrap';
import logo from '../images/logo.png';

function Comment({sentcomments}) {
    return (
        <div className="rounded container">
            <Row className="justify-content-md-left align-items-center">
                <Col md="1">
                <img src={logo} alt="error" width="100" height="50" />
                </Col>
                <Col md="1">
                    <b><h5>Anonymous</h5></b>
                </Col>
            </Row>
            <br />
            <Row className="justify-content-md-left">
                <Col md sm="12">
                    <h8>{sentcomments.text}</h8>
                </Col>
            </Row>
        </div>
    )




}
export default Comment