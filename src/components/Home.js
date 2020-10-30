import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import Question from './Question'
import { Row, Col, Figure } from 'react-bootstrap';
import skip from '../images/skip.png'
import report from '../images/report.png';
import { Link, } from "react-router-dom";



function Home() {
    const [fullQuestion, setFullQuestion] = useState(
        {
            question: { title: '', description: '', tag: '', commentsenabled: '' },
            poll: [{ poll: '' }]
        }
    );

    const [id, setID] = useState(2);

    const handleChange = () => {
        axios.get("https://localhost:44348/api/question/GetRandomQuestionId").then((res) => {
            var randomnum = res.data;
            setID(randomnum)
        });
    };

    useEffect(() => {
        axios.get("https://localhost:44348/api/question/" + id + "/QuestionAndPolls").then((res) => {
            setFullQuestion((prevState) => ({ ...prevState, question: res.data.question }));
            setFullQuestion((prevState) => ({ ...prevState, poll: res.data.poll }));
        });
    }, [id]);
    return (
        <div>
            <Question question={fullQuestion.question} polls={fullQuestion.poll} />
            <div className="rounded container">
                <Row>
                    <Col>
                        <div className="float-left">
                            <figure>
                                <Link to="/" >
                                    <Figure.Image
                                        width={50}
                                        height={50}
                                        src={report}
                                    />
                                </Link>
                                <figcaption class="figure-caption text-middle">Report</figcaption>
                            </figure>
                        </div >
                    </Col>
                    <Col>
                        <div className="float-right">
                            <figure>
                                <Link to="/" onClick={handleChange}>
                                    <Figure.Image
                                        width={50}
                                        height={50}
                                        src={skip}
                                    />
                                </Link>
                                <figcaption class="figure-caption text-middle">Skip</figcaption>
                            </figure>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Home;