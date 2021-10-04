import React, { useState, useEffect } from "react";
import { Row, Card } from "react-bootstrap";
import ClassEight from "../classEight/ClassEight";

function Serve(props) {
  const [eight, setEight] = useState([]);
  useEffect(() => {
    fetch("./eight.JSON")
      .then((res) => res.json())
      .then((data) => setEight(data));
  }, []);
  return (
    <div>
      <div>
        <h1>This is Class 8 Service</h1>
        {eight.map((e) => (
          <Row xs={1} md={3} className="g-4" style={{ display: "grid" }}>
            <ClassEight data={e} key={e.id}></ClassEight>
          </Row>
        ))}
      </div>
    </div>
  );
}

export default Serve;
