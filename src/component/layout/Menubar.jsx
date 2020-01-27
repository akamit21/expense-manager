import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";

const Menubar = () => {
  return (
    <Navbar expand="md" sticky="top" variant="dark" className="menu-bar">
      <Navbar.Brand>
        <Link exact="true" to="/" className="font-weight-bold text-light">
          <Image
            src="/logo512.png"
            width="40px"
            className="mr-2"
            fluid
            rounded
          />
          Expense-Manager
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item as="li">
            <Link to="/" exact="true" className="nav-link">
              Dashboard
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/transactions" className="nav-link">
              Transactions
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/accounts" className="nav-link">
              Accounts
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/accounts" className="nav-link">
              Reports
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/accounts" className="nav-link">
              Settings
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/" className="nav-link">
              Login
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menubar;
