import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Menu({ loggedIn, handleLogout }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Astrillow</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link href="/saved">Saved</Nav.Link>
        </Nav>
        <Nav>
          {loggedIn ? (
            <Nav.Link onClick={handleLogout} className="justify-content-end">Logout</Nav.Link>
          ) : (
            <Nav.Link className="justify-content-end" href="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
