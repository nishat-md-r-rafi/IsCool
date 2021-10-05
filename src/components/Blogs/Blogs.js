import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

function Blogs(props) {
  return (
    <div>
      <Container>
        <h4
          style={{
            borderRadius: "20px",
            margin: "30px 20px",
            backgroundColor: "lightgray",
            padding: "10px",
          }}
        >
          Read Some Blogs to feel free!
        </h4>
        <Row>
          <Col sm={4}>
            <Card className="bg-dark text-white">
              <Card.Img
                style={{ height: "300px", width: "400px" }}
                src="https://www.york.ac.uk/media/physics/research/nuclear-physics-hero-800x400.jpg"
              />
              <Card.ImgOverlay>
                <Card.Title>Nuclear Magic</Card.Title>
                <Card.Text>
                  Learn the underlying concept of nuclear physics and feel good.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="bg-dark text-white">
              <Card.Img
                style={{ height: "300px", width: "400px", margin: "0px 10px" }}
                src="https://www.innovationnewsnetwork.com/wp-content/uploads/2021/06/%C2%A9-iStock-EzumeImages-696x392.jpg"
              />
              <Card.ImgOverlay>
                <Card.Title>Nuclear Magic2</Card.Title>
                <Card.Text>Explore nuclear physics and feel good.</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="bg-dark text-white">
              <Card.Img
                style={{ height: "300px", width: "400px" }}
                src="https://scitechdaily.com/images/Universe-Physics-Concept-777x544.jpg"
              />
              <Card.ImgOverlay>
                <Card.Title>Astro Magic</Card.Title>
                <Card.Text>Be Pro in Astro Physics</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blogs;
