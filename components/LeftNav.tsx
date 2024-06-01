"use client";
import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ToolPan from '@/components/tools/ToolPan';
import { ArrowsMove, ZoomIn, PlusSquare, ArrowUpLeftSquare, XSquare } from 'react-bootstrap-icons';

export default function LeftNavMenu() {
  const [tool, setTool] = useState();

  return (
    <div id="tool-nav"
        className="absolute z-40 backdrop-blur bg-opacity shadow" 
        style={{"--bg-opacity": ".5", display: 'block', position: 'absolute' }}
        >
        
        <ButtonGroup vertical>
            <ToolPan id="tool-pan" setTool={setTool} active={tool} />
            <Button id="tool-zoom"><ZoomIn className="icon" /></Button>
            <Button id="tool-add-node"><PlusSquare className="icon" /></Button>
            <Button id="tool-select-node"><ArrowUpLeftSquare className="icon" /></Button>
            <Button id="tool-select-node"><XSquare className="icon" /></Button>
        </ButtonGroup>
    </div>
  );
}