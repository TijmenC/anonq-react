import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling/Question.css'
import { Row, Col, Button, } from 'react-bootstrap';
function Poll({ polls, percentages, toggle }) {

    const handleClick = async (e) => {
        e.preventDefault()
        await axios.put("https://localhost:44348/api/polls/" + polls.id + "/UpdateVotes", polls).then((res) => {
            console.log(res);
            console.log(res.data);
        })
        percentages(polls.questionId)
    };
    const PercentageText = () => (
       <b>%</b>
      )

    return (
        <div className="rounded container">
            <Row className="justify-content-md-left">
                <Col>
                    <Button disabled={toggle} variant="primary" size="lg" onClick={handleClick} block>
                        {polls.poll} 
                        <br />
                        {polls.percentage}  
                        { toggle ? <PercentageText /> : null }
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
export default Poll;