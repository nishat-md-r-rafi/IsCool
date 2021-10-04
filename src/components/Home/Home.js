import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Home(props) {
  const popularTitle = ["Basic HTML", "Complete CSS", "JS for Beginner"];
  const popularImg = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
    "https://cdn.freelogovectors.net/wp-content/uploads/2020/04/css-3-logo.png",
    "https://p.kindpng.com/picc/s/171-1718046_javascript-programming-language-logo-hd-png-download.png",
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
              src="https://i.pinimg.com/originals/c5/3c/fe/c53cfebf29c9c21fe74c03158823d33e.gif"
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <h2
          style={{
            backgroundColor: "lightpink",
            padding: "10px",
            borderRadius: "10px",
            margin: "10px 0px",
          }}
        >
          Popular Courses
        </h2>
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

      <Container>
        <h2
          style={{
            backgroundColor: "lightpink",
            padding: "10px",
            borderRadius: "10px",
            margin: "10px 0px",
          }}
        >
          Recommended For You
        </h2>
        <Row>
          <Col sm={4}>
            <div
              style={{
                border: "1px solid black",
                padding: "15px",
                borderRadius: "7px",
              }}
            >
              Web development
            </div>
          </Col>
          <Col sm={4}>
            <div
              style={{
                border: "1px solid black",
                padding: "15px",
                borderRadius: "7px",
              }}
            >
              Programming
            </div>
          </Col>
          <Col sm={4}>
            <div
              style={{
                border: "1px solid black",
                padding: "15px",
                borderRadius: "7px",
              }}
            >
              Python
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <div
              style={{
                border: "1px solid black",
                padding: "15px",
                borderRadius: "7px",
              }}
            >
              React
            </div>
          </Col>
          <Col sm={4}>
            <div
              style={{
                border: "1px solid black",
                padding: "15px",
                borderRadius: "7px",
              }}
            >
              NodeJS
            </div>
          </Col>
          <Col sm={4}>
            <div
              style={{
                border: "1px solid black",
                padding: "15px",
                borderRadius: "7px",
              }}
            >
              MongoDB
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2
          style={{
            backgroundColor: "lightpink",
            padding: "10px",
            borderRadius: "10px",
            margin: "10px 0px",
          }}
        >
          Our Top Pick For You
        </h2>
        <div
          style={{
            border: "1px solid black",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <Row>
            <Col sm={5}>
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://images.newscientist.com/wp-content/uploads/2019/10/22153920/biochemistry-shutterstock_187967735_web.jpg"
                alt=""
                srcset=""
              />
            </Col>
            <Col sm={7}>
              <h1>The Ultimate Course For Biochemistry</h1>
              <p>
                Learn biochemistry to understand what is going on in your body.
                And learn about the word of your body. To get ready for the the
                ultimate fitness.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <h2
          style={{
            backgroundColor: "lightpink",
            padding: "10px",
            borderRadius: "10px",
            margin: "10px 0px",
          }}
        >
          Want To Learn SomeThing Very Quick!
        </h2>
        <p>This is Something Crazy for you.</p>
        <div
          style={{
            border: "1px solid black",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <Row>
            <Col sm={4}>
              <Card className="bg-dark text-white">
                <Card.Img
                  style={{ height: "300px", width: "380px" }}
                  src="https://s3.amazonaws.com/tv-wordpress/a/wp-content/uploads/what-is-spoken-english.png"
                />
                <Card.ImgOverlay>
                  <Card.Title style={{ color: "black" }}>
                    Spoken English
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="bg-dark text-white">
                <Card.Img
                  style={{
                    height: "300px",
                    width: "380px",
                    margin: "0px 10px",
                  }}
                  src="https://career.sidekickc.com/wp-content/uploads/2018/07/type.jpg"
                />
                <Card.ImgOverlay>
                  <Card.Title>Fast Typing</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="bg-dark text-white">
                <Card.Img
                  style={{ height: "300px", width: "380px" }}
                  src="https://irisreading-media.s3-accelerate.amazonaws.com/2012/01/reading-fast.jpg"
                />
                <Card.ImgOverlay>
                  <Card.Title style={{ color: "black" }}>
                    Fast Reading
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Home;
