import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

function NavBar({ navCol }) {
  // Variable Initializations
  const [menuShow, setMenuShow] = useState(false);

  // Logics
  const menuShowHandler = () => setMenuShow(true);
  const menuCloseHandler = () => setMenuShow(false);

  // Component Rendering
  return (
    <>
      <Navbar expand="sm" className={"navbar-dark fixed-top " + navCol}>
        <Container>
          <Navbar.Brand href="/" className="quicksand">
            ReelTalk
          </Navbar.Brand>
          <button
            className="btn bg-none border-0 text-light d-xs-none d-sm-none d-md-none"
            onClick={menuShowHandler}
          >
            <i className="bi bi-list"></i>
          </button>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="oswald" href="/reeltalk">
                Home
              </Nav.Link>
              <Nav.Link className="oswald" href="/post/news">
                News
              </Nav.Link>
              <Nav.Link className="oswald" href="/features">
                Features
              </Nav.Link>
              <Nav.Link className="oswald" href="/about-us">
                About
              </Nav.Link>
              <Nav.Link className="oswald me-4" href="/contacts">
                Contacts
              </Nav.Link>
              <div className="d-md-none d-lg-block"></div>
              <Nav.Link className="oswald " href="/contacts">
                <i className="bi bi-search"></i>
              </Nav.Link>
              <Nav.Link className="oswald " href="#" onClick={menuShowHandler}>
                <i className="bi bi-list"></i>
              </Nav.Link>
              <div className="d-flex align-items-center me-4">|</div>
              <Nav.Link
                className="oswald d-sm-none d-md-block"
                href="/contacts"
              >
                <i className="bi bi-twitter-x"></i>
              </Nav.Link>
              <Nav.Link
                className="oswald d-sm-none d-md-block"
                href="/contacts"
              >
                <i className="bi bi-facebook"></i>
              </Nav.Link>
              <Nav.Link
                className="oswald d-sm-none d-md-block"
                href="/contacts"
              >
                <i className="bi bi-instagram"></i>
              </Nav.Link>
              <Nav.Link
                className="oswald d-sm-none d-md-block"
                href="/contacts"
              >
                <i className="bi bi-youtube"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={menuShow} onHide={menuCloseHandler}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBar;
