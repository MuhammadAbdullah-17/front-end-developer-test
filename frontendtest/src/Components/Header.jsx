import React from "react";
import "./Components.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
const Header = () => {
  return (
    <>
{
    //Navbar--------------------------------------
}
      <Navbar fixed="top" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="Assets/logo.png" alt="Logo" height="40px" width="40px" />
          </Navbar.Brand>
          <Form className="d-flex col-md-6 col-8">
            <FormControl
              className="searchField fa ms-2"
              type="search"
              placeholder="&#xF002; Search Photos"
              aria-label="Search"
            />
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            style={{ color: "black", fontFamily: "sans-serif" }}
          >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "500px" }}
              navbarScroll={true}
            >
              <NavDropdown
                title="&#xf0b1; Company"
                style={{ color: "black" }}
                className="ms-5 text-black fa ms-md-0"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action4">About</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Join the Team
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">History</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Contact Us</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="&#xf009; Product"
                style={{ color: "black" }}
                className="ms-5 text-black fa ms-md-0"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action4">Explore</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Developers/API
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Unsplash Dataset
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Unsplash for IOS
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Apps And Plugins
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="&#xf0c0; Community"
                style={{ color: "black" }}
                className="ms-5 text-black fa ms-md-0"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action4">
                  Become a Contributor
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Topics</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Collection</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Trends</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Unsplash Award
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="mx-5 mx-md-0 mb-2 mb-md-0">
              <Button variant="outline-secondary mx-3 mx-md-1">
                Submit a Photo
              </Button>
              <Button variant="outline-secondary">Login</Button>
            </div>
            <p className="mx-5 mx-md-0 d-inline d-md-none">
              New to Unsplash? Sign Up for free!
            </p>
          </Navbar.Collapse>
        </Container>
      </Navbar>

{
    //Notification--------------------------------
}
    <div className="col-md-4 col-11 notice ms-3 ms-md-0">
        <p>Browse premium images on iStock | 20% off at iStock.</p>
    </div>

{
    //ScrollBar for images -----------------------
}
      <div className="app ms-3 ms-md-0 ms-lg-0">
        <ul className="hs full no-scrollbar me-3">
          <li className="item me-1 me-md-2 "><img src="Assets/b1.jpg" alt="ScrollBar" height="110px" width="170px" /><br/><img src="Assets/b2.jpg" alt="ScrollBar" height="110px" width="170px" /></li>
          <li className="item me-1 me-md-2  "><img src="Assets/b3.jpg" alt="ScrollBar" height="110px" width="170px" /><br/><img src="Assets/b4.jpg" alt="ScrollBar" height="110px" width="170px" /></li>
          <li className="item me-1 me-md-2 "><img src="Assets/b5.jpg" alt="ScrollBar" height="110px" width="170px" /><br/><img src="Assets/b6.jpg" alt="ScrollBar" height="110px" width="170px" /></li>
          <li className="item me-1 me-md-2 "><img src="Assets/b7.jpg" alt="ScrollBar" height="110px" width="170px" /><br/><img src="Assets/b8.jpg" alt="ScrollBar" height="110px" width="170px" /></li>
          <li className="item me-1 me-md-2 "><img src="Assets/b9.jpg" alt="ScrollBar" height="110px" width="170px" /><br/><img src="Assets/b10.jpg" alt="ScrollBar" height="110px" width="170px" /></li>
          <li className="item me-1 me-md-2 "><img src="Assets/b1.jpg" alt="ScrollBar" height="110px" width="170px" /><br/><img src="Assets/b2.jpg" alt="ScrollBar" height="110px" width="170px" /></li>
          <li className="item me-1 me-md-2 "><img src="Assets/b3.jpg" alt="ScrollBar" height="110px" width="170px" /><br/><img src="Assets/b4.jpg" alt="ScrollBar" height="110px" width="170px" /></li>
          <li className="item me-1 me-md-2 "><img src="Assets/b5.jpg" alt="ScrollBar" height="110px" width="170px" /><br/><img src="Assets/b6.jpg" alt="ScrollBar" height="110px" width="170px" /></li>
          <li className="item me-1 me-md-2 "><img src="Assets/b7.jpg" alt="ScrollBar" height="110px" width="170px" /><br/><img src="Assets/b8.jpg" alt="ScrollBar" height="110px" width="170px" /></li>
          <li className="item me-1 me-md-2 "><img src="Assets/b9.jpg" alt="ScrollBar" height="110px" width="170px" /><br/><img src="Assets/b10.jpg" alt="ScrollBar" height="110px" width="170px" /></li>

        </ul>
        
      </div>
    </>
  );
};

export default Header;
