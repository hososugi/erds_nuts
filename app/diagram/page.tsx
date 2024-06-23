"use client";
import {useRef, useEffect, useState, LegacyRef, MutableRefObject} from 'react';
import * as Diagram from '@/components/diagram/';
import LeftNavMenu from '@/components/LeftNav';
import * as nodesData from '@/public/node-data.json';


export default function ERD() {
    const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0});
    const svgRef = useRef<SVGSVGElement>(null);
    const svgGrid = useRef<SVGRectElement>(null);
    const viewBox = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    const pointer = {
        isDown: false,
        origin: {
            x: 0,
            y: 0
        },
        position: {
            x: 0,
            y: 0
        }
    };

    useEffect(() => {
        console.log("Mounted")
    }, [])

    // Get the Window dimensions after load.
    useEffect(() => {
        console.log("window.innerHeight", window.innerHeight);
        viewBox.width = window.innerWidth;
        viewBox.height = window.innerHeight;
    
        window.addEventListener('resize', () => {
            setWindowDimensions(windowDimensions => ({width: window.innerWidth, height: window.innerHeight}));
            updateViewBox();
        });
    }, []);

    // Update the SVG viewbox whenever the variable is update.
    useEffect(() => {
        console.log(`SVG viewBox updated: ${JSON.stringify(viewBox)}`);
        updateViewBox();
    }, [viewBox]);

    // Update the SVG viewbox whenever the variable is update.
    useEffect(() => {
        console.log(`nodes updated: ${JSON.stringify(nodesData)}`);
    }, [nodesData]);

    // Handle SVG mouse events.
    useEffect(() =>{
        svgRef.current!.addEventListener('mousedown', (event: MouseEvent) => {
            console.log(`SVG mouse down: ${event.clientX}/${event.clientY}`);
            pointer.isDown = true;
            pointer.origin.x = event.clientX;
            pointer.origin.y = event.clientY;
        });

        svgRef.current!.addEventListener('mouseup', (event: MouseEvent) => {
            console.log(`SVG mouse up: ${event.clientX}/${event.clientY}, viewBox: ${JSON.stringify(viewBox)}`);
            pointer.isDown = false;
        });

        svgRef.current!.addEventListener('mouseenter', (event: MouseEvent) => {
            //console.log("SVG mouseEnter");
        });

        svgRef.current!.addEventListener('mouseleave', (event: MouseEvent) => {
            //console.log("SVG mouseLeave");
            pointer.isDown = false;
            pointer.origin.x = event.clientX;
            pointer.origin.y = event.clientY;
        });

        svgRef.current!.addEventListener('click', (event: MouseEvent) => {
            console.log("SVG click");
            pointer.origin.x = event.clientX;
            pointer.origin.y = event.clientY;
        });

        svgRef.current!.addEventListener('mousemove', (event: MouseEvent) => {
            //console.log(`SVG mouseMove. pointer.isDown: ${pointer.isDown}`);
            pointer.position.x = event.clientX;
            pointer.position.y = event.clientY;

            if(pointer.isDown) {
                viewBox.x -= pointer.position.x - pointer.origin.x;
                viewBox.y -= pointer.position.y - pointer.origin.y;
                updateViewBox();
            }

            pointer.origin.x = event.clientX;
            pointer.origin.y = event.clientY;
        });
    }, [])

    const updateViewBox = () => {
        const viewBoxString = Object.values(viewBox).join(" ");
        console.log(`updateViewBox moving the svg viewbox ${viewBoxString}`);
        svgRef.current?.setAttribute('viewBox', viewBoxString);
        svgGrid.current?.setAttribute('width', '100%');
    }

    return (
        <>
            <LeftNavMenu />

            <div className="canvas-wrapper">
                <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox={Object.values(viewBox).join(" ")}>
                    <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="gray" strokeWidth="0.5" strokeOpacity="50%" />
                        </pattern>
                        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <rect width="80" height="80" fill="url(#smallGrid)"/>
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect ref={svgGrid} width="100%" height="100%" fill="url(#smallGrid)" />
                    <g id="diagram-wrapper">
                        {
                            (nodesData).map((node, index) => (
                                <Diagram.Table key={`node_${index}`} {...node} />
                            ))
                        }
                        {/*<path d={`M${nodesData[0].x} ${nodesData[0].y} ${nodesData[1].x} ${nodesData[1].y}`} stroke-width="1" stroke="black"/>*/}
                    </g>
                </svg>
            </div>
        </>
    );
}
