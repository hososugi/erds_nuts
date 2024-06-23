"use client";
import React, {FC, JSXElementConstructor, ReactElement, ReactNode} from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { App } from 'react-bootstrap-icons';
import { OverlayTriggerRenderProps } from "react-bootstrap/esm/OverlayTrigger";

interface PROP_TYPES {
    id: string,
    active?: boolean,
    setTool?: Function,
    icon?: ReactNode
};

const ToolButton: FC<PROP_TYPES> = ({id, active, setTool, icon=<App className="icon" />}: PROP_TYPES) => {
    const handleNewClick = (event: React.MouseEvent<HTMLElement>) => {
        const id = event.currentTarget?.id;
        console.log(`Set selected tool to ${id}`);
        
        if(setTool)
            setTool(id);
    }
    const ButtonTooltip = ({id, children, title}: {id: string, title: string, children: ReactElement<any, string | JSXElementConstructor<any>> | ((props: OverlayTriggerRenderProps) => ReactNode)}) => (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>} placement="right">
            {children}
        </OverlayTrigger>
    );
    
    return (
        <ButtonTooltip id="tool-button" title="Pan">
            <Button id={id} className={active? 'active': ''} aria-pressed="true" onClick={handleNewClick}>
                {icon}
            </Button>
        </ButtonTooltip>
    );
    
}

export default ToolButton;