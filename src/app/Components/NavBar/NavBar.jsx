import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
  // Variable Initializations
  const [menuShow, setMenuShow] = useState(false);
  const [navTransparent, setNavTransparent] = useState(true);

  // Logics
  const menuShowHandler = () => setMenuShow(true);
  const menuCloseHandler = () => setMenuShow(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY === 0) {
        setNavTransparent(true);
      } else {
        setNavTransparent(false);
      }
    });
  }, []);

  // Component Rendering
  return (
    <>
      <Navbar
        expand="sm"
        className={
          "main-navbar fixed-top  navbar-dark text-light p-0 " +
          (navTransparent ? "bg-none " : "nav-bg-main ")
        }
      >
        <Container>
          <Navbar.Brand href="/" className="quicksand m-auto">
            <img
              className="navbar-reeltalk-logo"
              src="/resources/logos/reeltalk-1-nobg.svg"
              alt="ReelTalk Logo"
            />
          </Navbar.Brand>
          <button
            className="btn bg-none border-0 d-xs-none text-light d-sm-none d-md-none"
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
              <div className="d-flex opacity-half align-items-center me-3">
                |
              </div>
              <Nav.Link className="oswald " href="/contacts">
                <i className="bi bi-search"></i>
              </Nav.Link>
              <Nav.Link className="oswald " href="#" onClick={menuShowHandler}>
                <i className="bi bi-list"></i>
              </Nav.Link>
              <div className="d-flex opacity-half align-items-center mx-4 d-sm-none d-md-flex">
                |
              </div>
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
      <Offcanvas show={menuShow} onHide={menuCloseHandler} data-bs-theme="dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Still On Construction.</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBar;
