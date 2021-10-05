import React, { useState, useEffect } from "react";
import { Row, Card } from "react-bootstrap";
import ClassEight from "../classEight/ClassEight";
import Development from "../Development/Development";
import Nine from "../Nine/Nine";
function Serve(props) {
  const [eight, setEight] = useState([]);
  useEffect(() => {
    fetch("./eight.JSON")
      .then((res) => res.json())
      .then((data) => setEight(data));
  }, []);
  const [nine, setNine] = useState([]);
  useEffect(() => {
    fetch("./nine.JSON")
      .then((res) => res.json())
      .then((data) => setNine(data));
  }, []);
  const [development, setDevelopment] = useState([]);
  useEffect(() => {
    fetch("./development.JSON")
      .then((res) => res.json())
      .then((data) => setDevelopment(data));
  }, []);
  return (
    <div>
      <div>
        <h1>This is Class 8 Service</h1>
        <Row xs={1} md={4} className="g-4" style={{ display: "flex" }}>
          {eight.map((e) => (
            <ClassEight data={e} key={e.id}></ClassEight>
          ))}
        </Row>
        <h1 style={{ margin: "30px 0px" }}>This is For Class 9-10 Service</h1>
        <Row xs={1} md={4} className="g-4" style={{ display: "flex" }}>
          {nine.map((e) => (
            <Nine data={e} key={e.id}></Nine>
          ))}
        </Row>
        <h1 style={{ margin: "30px 0px" }}>Web Development course</h1>
        <Row xs={1} md={4} className="g-4" style={{ display: "flex" }}>
          {development.map((e) => (
            <Development data={e} key={e.id}></Development>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Serve;
