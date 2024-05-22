"use client";
import Image from "next/image";
import React, { useState } from 'react';
import TopNav from "@/components/TopNav";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DiagramCard from "@/components/DiagramCard";

export default function Home() {
  let welcomeText = "the ERD Tool";

  return (
    <main>
      <TopNav />

      <Container className="p-3">
        <h1 className="header">Welcome to {welcomeText}</h1>
        <Row xs={1} md={3} className="g-1">
          <Col>
            <DiagramCard />
          </Col>
          <Col>
            <DiagramCard />
          </Col>
          <Col>
            <DiagramCard />
          </Col>
          <Col>
            <DiagramCard />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
