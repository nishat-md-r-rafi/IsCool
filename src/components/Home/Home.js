import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Home(props) {
  const popularTitle = ["Basic HTML", "Complete CSS", "JS for Beginner"];
  const popularImg = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
    "https://www.motocms.com/blog/wp-content/uploads/2018/07/css-main-image.jpg",
    "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png",
  ];
  const popularDes = [
    "Learn HTML to explore the world of web devlopment.",
    "CSS to make your website pretty and beautiful",
    "To dynamic your website learn to use JS",
  ];
  return (
    <div>
      <Container>
        <Row style={{ backgroundColor: "lightblue" }}>
          <Col sm={5}>
            <div
              style={{
                backgroundColor: "lightblue",
                color: "black",
                /* borderRadius: "30px", */
                padding: "50px",
              }}
            >
              <h4>
                In the journey of your learning make us your Company. Give some
                time that will make you lead better
              </h4>
              <p>
                Make Your Learning Personalize. Be skilled with as much less
                effort you think.
              </p>
              <img
                style={{ height: "50%", width: "100%" }}
                src="https://blog.commlabindia.com/wp-content/uploads/2019/04/elearning-marketing-tips-1.jpg"
              />
            </div>
          </Col>
          <Col sm={7}>
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://media.istockphoto.com/vectors/communication-elearning-internet-network-as-knowledge-base-vector-id1059510610?k=20&m=1059510610&s=612x612&w=0&h=E3wbE9HsFSxUh6PcsCobIti-wfFrOD05jYHJl_a3yXQ="
              alt="E-learning Image"
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ margin: "30px" }}>
        <h4>Popular Courses</h4>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  style={{ height: "100%", width: "100%" }}
                  variant="top"
                  src={popularImg[idx]}
                />
                <Card.Body>
                  <Card.Title>{popularTitle[idx]}</Card.Title>
                  <Card.Text>{popularDes[idx]}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
