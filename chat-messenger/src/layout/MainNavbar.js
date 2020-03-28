import React from 'react'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'


const MainNavbar = () => {
	return (
		<Navbar bg="light" expand="lg" style={{marginBottom: 20 + "px"}}>
	      <Navbar.Brand href="#home">Chat Bot</Navbar.Brand>
	      <Navbar.Toggle aria-controls="basic-navbar-nav" />
	      <Navbar.Collapse id="basic-navbar-nav">
	        <Nav className="mr-auto">
	          <Nav.Link href="#home">Profile</Nav.Link>
	          <Nav.Link href="#link">About Us</Nav.Link>
	          <NavDropdown title="Setting" id="basic-nav-dropdown">

	            <NavDropdown.Item href="#action/3.1">Accounts</NavDropdown.Item>
	            <NavDropdown.Divider />
	            <NavDropdown.Item href="#action/3.2">General</NavDropdown.Item>
	            <NavDropdown.Divider />
	            <NavDropdown.Item href="#action/3.3">Shortcuts</NavDropdown.Item>
	          </NavDropdown>
	        </Nav>
	        <Form inline>
	          <FormControl type="text" placeholder="Search with Keywords" className="mr-sm-2" />
	          <Button variant="btn btn-success">Search</Button>
	        </Form>
	      </Navbar.Collapse>
	    </Navbar>
	   



	)



}
export default MainNavbar;