import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styling/Question.css'
import { Container, Row, Col, Image, Figure, Button } from 'react-bootstrap';

function Question() {
    return (
        <div className="rounded container">
            <Row className="justify-content-md-left">
                <Col md sm="8">
                    <b><h3>What should I do about my crazy ex?</h3></b>
                </Col>
            </Row>
            <Row className="justify-content-md-left">
                <Col md sm="12">
                    <b><h8>So recently my ex came up to me and said that I stunk and she repeatly started stabbing me.
                        It was not a fun experience and I left her home and I don't know what to do. Should i call the police?</h8></b>
                </Col>
            </Row>
            <Row className="justify-content-md-left">
                <Col>
                    <br />
                    <Button variant="primary" size="lg" block>
                        Report her to the police
                    </Button>

                    <Button variant="primary" size="lg" block>
                        Forgive her
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="float-left">
                        <figure>
                            <Figure.Image
                                width={50}
                                height={50}
                                src="//placehold.it/50"
                            />
                            <figcaption class="figure-caption text-middle">Report</figcaption>
                        </figure>
                    </div >
                </Col>
                <Col>
                    <div className="float-right">
                        <figure>
                            <Figure.Image
                                width={50}
                                height={50}
                                src="//placehold.it/50"
                            />
                            <figcaption class="figure-caption text-middle">Skip</figcaption>
                        </figure>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
export default Question;