import react from "react";

import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";


const display = {
    // margin: "15%",
    // justifyContent: "space-evenly",
    // display: "flex",

}

function Resume() {

    return (
        <Container>
            <Row className="mb-2">
                <Col>

                    <h2>
                        My Resume:
                    </h2>
                    <Button variant="dark" href="https://drive.google.com/file/d/1EIg5IzDUsO8J7pohhdEz0QJ0A3E6Ga5b/view?usp=sharing" size="lg"> Download </Button>

                </Col>



            </Row>

            <Row>
                <Col>
                    <h3>
                        Proficiencies
                    </h3>
                    <ListGroup>
                        <ListGroup.Item as="li">HTML, CSS</ListGroup.Item>
                        <ListGroup.Item as="li">Javascript</ListGroup.Item>
                        <ListGroup.Item as="li">JQuery, BootStrap, Materialize</ListGroup.Item>
                        <ListGroup.Item as="li">React</ListGroup.Item>
                        <ListGroup.Item as="li">MySQL, Sequelize, Mongooose, MongoDB</ListGroup.Item>
                        <ListGroup.Item as="li">API's, REST</ListGroup.Item>
                        <ListGroup.Item as="li">Node, Express</ListGroup.Item>
                      



                    </ListGroup>

                </Col>


            </Row>








        </Container>
    )

}

export default Resume;