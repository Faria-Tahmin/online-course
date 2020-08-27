import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar bg="dark" expand="" variant="dark">
			<Container className="text-center">
				<Navbar.Brand href="#home">Online Course Center</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">Enrolled Course</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
