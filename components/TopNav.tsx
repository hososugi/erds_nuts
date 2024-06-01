"use client";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Nut, FileEarmarkPlus } from 'react-bootstrap-icons';

export default function TopNav() {
  const handleNewClick = () => {
    console.log("Create new ERD.");
  }

  return (
    <Navbar className={"top-0 z-40 backdrop-blur bg-opacity"} style={{"--bg-opacity": ".5"}} bg="primary" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <Nut className="icon" /> ERD's Nuts
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Nav className="float-right">
            <Button variant="primary" className="float-right" href="/edit" onClick={handleNewClick}>
              <FileEarmarkPlus className="icon" /> New
            </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}