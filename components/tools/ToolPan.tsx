"use client";
import React from "react";
import Button from 'react-bootstrap/Button';
import { ArrowsMove } from 'react-bootstrap-icons';

export default function ToolPan({id, active, setTool}) {
  const handleNewClick = (event: React.MouseEvent<HTMLElement>) => {
    const id = event.currentTarget?.id;
    console.log(`Set selected tool to ${id}`);
    setTool(id);
  }

  return (
    <Button id={id} className={`${active == id}`} aria-pressed="true" onClick={handleNewClick}>
        <ArrowsMove className="icon" />
    </Button>
  );
}