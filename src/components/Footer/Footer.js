import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Want To Learn?</h5>
            <p>Make Your Learning Super Easy With Us.</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">IsCool</h5>
            <ul>
              <li className="list-unstyled">
                <Link to="/about">About</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/home">Home</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/serve">Service</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.udemy.com"> IsCool.com</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
