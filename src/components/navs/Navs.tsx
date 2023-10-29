import { Button, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineArrowRight } from "react-icons/ai";
import Logo from './logo.png';

function Navs() {
  return (
    <Navbar expand="lg" className="justify-content-between"
        style={{paddingLeft: '20vh',paddingRight: '20vh'}}>
        <Navbar.Brand href="#">
            <img
              alt="logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}<b>Nexcent</b></Navbar.Brand>
          <Nav>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">features</Nav.Link>
            <Nav.Link href="#action3">Community</Nav.Link>
            <Nav.Link href="#action4">Blog</Nav.Link>
            <Nav.Link href="#action5" className="justify-content-end">Pricing</Nav.Link>
            <Button style={{ border: 'none',background: '#4CAF4F', paddingLeft: '20px', paddingRight: '20px', marginLeft: '20px'}}>Register <AiOutlineArrowRight/></Button>
          </Nav>
    </Navbar>
  );
}

export default Navs;