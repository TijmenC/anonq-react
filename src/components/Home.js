import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import Question from './Question'
import { Row, Col, Image, Figure, Button } from 'react-bootstrap';
import skip from '../images/skip.png'
import report from '../images/report.png';
import {
    Link,
} from "react-router-dom";



function Home() {
    const [questionList, setQuestionList] = useState([]);
    const [id, setID] = useState(1);

    const handleChange = () => {
        const min = 1;
        const max = 2;
        setID(Math.round(min + Math.random() * (max - min)));
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
    );
}
export default Home;