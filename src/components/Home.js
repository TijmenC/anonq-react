import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import Question from './Question'
import { Row, Col, Image, Figure, Button } from 'react-bootstrap';
import skip from '../images/skip.png'
import report from '../images/report.png';
import { Link, } from "react-router-dom";



function Home() {
    const [questionList, setQuestionList] = useState([]);
    const [id, setID] = useState(2);

    const handleChange = () => {
        axios.get("https://localhost:44348/api/question/1/GetRandomQuestionId").then((res) => {
            var randomnum = res.data;
            setID(randomnum)
        });
    };

    useEffect(() => {
        axios.get("https://localhost:44348/api/Question/" + id).then((res) => {
            const newQuestionList = res.data;
            setQuestionList(newQuestionList);
            console.log(questionList);
        });
    }, [id]);
    return (
        <div>
            <Question question={questionList} />
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