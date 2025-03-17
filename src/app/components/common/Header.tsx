"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

// Navigation data in JSON format
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#our-work", label: "Our Work" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="cstm-header">
      <Navbar expand="lg" expanded={expanded} className="bg-white fixed-top">
        <Container>
          <Navbar.Brand as={Link} href="/">
            <Image src="/images/logo.png" alt="NetWezard" width={150} height={50} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map((link, index) => (
                <Link key={index} href={link.href} passHref legacyBehavior>
                  <Nav.Link onClick={() => setExpanded(false)}>{link.label}</Nav.Link>
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
