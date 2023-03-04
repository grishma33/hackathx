import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
              <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/hackathons">HACKATHONS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/organizehackthons">ORGANIZE A HACKATHONS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/explore">EXPLORE</Nav.Link>
                </Nav.Item>
              </Nav>

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Link className="nav-link" to={`login`}>
                    <Button size="sm">Login</Button>
                  </Link>
                  <Link className="nav-link" to={`signup`}>
                    <Button size="sm">Signup</Button>
                  </Link>
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default Navigation;