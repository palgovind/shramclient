import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import "./Header.css";
const Header =() =>{
	return (
		<>
		
		   
		    <Navbar bg="primary" variant="dark">
		   <Container>
		   <img src="/mycompanylogo.jpg" className="logo"alt="Company Logo" />
		   <Navbar.Brand to="/">
<strong>श्रम सेवा ब्यबस्थापन प्रणाली <br/>Work Service Management System</strong></Navbar.Brand>

<Nav className="ml-auto">
		   <Nav.Link as={Link} to ="/workers" className="nav-link">Workers</Nav.Link>
		   <Nav.Link as={Link} to ="/postworker" className="nav-link">Post Worker</Nav.Link>
		   <Nav.Link as={Link} to ="/servicers" className="nav-link">Servicers</Nav.Link>
		   <Nav.Link as={Link} to ="/postservicer" className="nav-link">Post Servicer</Nav.Link>
		   <Nav.Link as={Link} to ="/servicecharges" className="nav-link">Machine Service Charges</Nav.Link>
		 
		   </Nav>
 </Container>
		   </Navbar>
		  
		   
		
		</>
		)
}
export default Header;