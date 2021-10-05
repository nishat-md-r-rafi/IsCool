import { Col, Card, Row } from "react-bootstrap";
import React from "react";

function Development(props) {
  const { name, id, img } = props.data;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Course ID: {id}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default Development;
