"use client";
import React, {FC, JSXElementConstructor, ReactElement, ReactNode} from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { ArrowsMove } from 'react-bootstrap-icons';
import { OverlayTriggerRenderProps } from "react-bootstrap/esm/OverlayTrigger";

interface PROP_TYPES {
    id: string,
    active: boolean,
    setTool: Function
};

const ToolPan: FC<PROP_TYPES> = ({id, active, setTool}: PROP_TYPES) => {
    const handleNewClick = (event: React.MouseEvent<HTMLElement>) => {
        const id = event.currentTarget?.id;
        console.log(`Set selected tool to ${id}`);
        setTool(id);
    }
    const ButtonTooltip = ({id, children, title}: {id: string, title: string, children: ReactElement<any, string | JSXElementConstructor<any>> | ((props: OverlayTriggerRenderProps) => ReactNode)}) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>} placement="right">
            {children}
        </OverlayTrigger>
    );
    
    return (
        <ButtonTooltip id="tool-pan" title="Pan">
            <Button id={id} className={active? 'active': ''} aria-pressed="true" onClick={handleNewClick}>
                <ArrowsMove className="icon" />
            </Button>
        </ButtonTooltip>
    );
    
}

export default ToolPan;