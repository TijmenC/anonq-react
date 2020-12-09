import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styling/Question.css'
import { Row, Col, Button, } from 'react-bootstrap';
import PollService from "../services/PollService"
function Poll({ polls, percentages, toggle }) {

    const handleClick = async (e) => {
        e.preventDefault()
        await PollService.PutPollsVotes(polls.id, polls).then((res) => {
            console.log(res);
            console.log(res.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        });
        percentages(polls.questionId)
    };
    const PercentageText = () => (
       <b>%</b>
      )

    return (
        <div className="flex rounded container">
            <Row className="justify-content-md-left">
                <Col>
                    <Button disabled={toggle} variant="primary" size="lg" onClick={handleClick} block >
                        <div data-testid="question-label-polls">
                        {polls.poll} 
                        </div>
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