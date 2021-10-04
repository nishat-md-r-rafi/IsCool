import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function About(props) {
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
              <h4>In the journey of your learning make us your Company.</h4>
              <img
                style={{ height: "50%", width: "100%" }}
                src="https://www.cae.net/wp-content/uploads/2015/11/consejos-sacar-maximo-partido-elearning.jpg"
              />
            </div>
          </Col>
          <Col sm={7}>
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://elearningindustry.com/wp-content/uploads/2019/10/how-design-thinking-transforming-learning-experience-free-ebook.jpg"
              alt="E-learning Image"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h4 style={{ borderRadius: "20px", margin: "0px 20px" }}>
          Student Feedback
        </h4>
        <Row
          style={{
            backgroundColor: "lightblue",
            padding: "7px",
            borderRadius: "10px",
          }}
        >
          <Col sm={4} style={{ backgroundColor: "lightpink" }}>
            <h5>"IsCool helps me to be fit for the new upcoming job" </h5>
            <b>Tanjil</b>
            <h6>CEO of Habijabi</h6>
          </Col>
          <Col sm={4} style={{ backgroundColor: "lightsalmon" }}>
            <h5>"IsCool helps me to understand things and make it fun" </h5>
            <b>Rohan</b>
            <h6>CEO of Pinik</h6>
          </Col>
          <Col sm={4} style={{ backgroundColor: "lightgreen" }}>
            <h5>
              "Glad to have a part of such a platform that make me happy"{" "}
            </h5>
            <b>Sajib</b>
            <h6>CEO of Codemaster</h6>
          </Col>
        </Row>
      </Container>
      <Container>
        <h4 style={{ borderRadius: "20px", margin: "0px 20px" }}>
          Our Partners
        </h4>
        <Row>
          <Col sm={4}>
            <img
              style={{ height: "50px", width: "50px", borderRadius: "25px" }}
              src="https://image.shutterstock.com/image-photo/11-april-2018-white-tesla-260nw-1074713426.jpg"
              alt=""
              srcset=""
            />
          </Col>
          <Col sm={4}>
            <img
              style={{ height: "50px", width: "50px", borderRadius: "25px" }}
              src="https://www.spacex.com/static/images/share.jpg"
              alt=""
              srcset=""
            />
          </Col>
          <Col sm={4}>
            <img
              style={{ height: "50px", width: "50px", borderRadius: "25px" }}
              src="https://blog.hubspot.com/hubfs/image8-2.jpg"
              alt=""
              srcset=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
