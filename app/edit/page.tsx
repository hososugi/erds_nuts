"use client";
import React, { useState } from 'react';
import TopNav from "@/components/TopNav";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DiagramCard from "@/components/DiagramCard";

export default function Home() {
  let welcomeText = "the ERD Tool";

  return (
    <>
    <main>
      <Container className="p-3">
        <h1 className="header">Welcome to Edit</h1>
        <Row xs={1} md={3} className="g-1">
          <Col>
            <DiagramCard></DiagramCard>
          </Col>
        </Row>
      </Container>
    </main>
    <div>Hello</div>
    </>
  );
}
