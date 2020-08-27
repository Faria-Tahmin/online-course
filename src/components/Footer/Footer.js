import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<Container>
				<div>
					&copy; {year} | Faria Tahmin
					
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
