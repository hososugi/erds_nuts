"use client";
import { FC } from 'react';
import NodeRow from '@/components/diagram/NodeRow';


interface NODE_PROPS_TYPES {
    title?: string,
    width?: number,
    height?: number,
    nodeHeight?: number,
    x?: number,
    y?: number,
    rx?: number,
    ry?: number,
    fontSize?: number,
    padding?: {
        x?: number,
        y?: number
    },
    style?: {
        "fill"?: string,
        "strokeWidth"?: string,
        "stroke"?: string
        "fillOpacity"?: number,
        "strokeOpacity"?: number
    }
};

const Table: FC<NODE_PROPS_TYPES> = (props: NODE_PROPS_TYPES) => {
    const {
        title = "Title",
        width = 100,
        height = 90,
        nodeHeight = 30,
        padding = {
            x: 16,
            y: 4
        },
        x = 10,
        y = 100,
        rx = 2,
        ry = 2,
        fontSize = 12,
        style = {
            fill: "rgb(246, 246, 246)",
            strokeWidth: .5,
            stroke: "rgb(75, 158, 134)",
            fillOpacity: 0.8,
            strokeOpacity: 0.9
        }
    } = props;

    const rows = [
        {
            isPrimary: true,
            name: "ID",
            type: "UUID",
            height: nodeHeight,
            fill: "#E3EEF1"
        },
        {
            name: "Column",
            type: "String",
            height: nodeHeight
        }
    ];

    //const textWidth = title.getComputedTextLength();

    return (
        <g transform={`translate(${x}, ${y})`}>
            <clipPath id="clip_node">
                <rect x={padding.x} y={padding.y} width={width - (2 * padding.x)} height={nodeHeight} />
            </clipPath>
            <rect x="0" y="0" width={width} height={rows.length * nodeHeight + nodeHeight} rx={rx} ry={ry} style={style} />

            <g>
                <rect x="0" y="0" width={width} height={nodeHeight} rx={rx} ry={ry} style={{fill:"rgb(75, 158, 134)"}} />
                <text x={padding.x} y={nodeHeight - fontSize} fontFamily="Verdana" fontSize={fontSize} fill="white"  clipPath="url(#clip_node)" dominantBaseline="middle">{title}</text>
            </g>

            {
                rows.map((row, index) => (
                    <NodeRow 
                        key={index}
                        isPrimary={row.isPrimary}
                        name={row.name} 
                        type={row.type} 
                        width={width} 
                        height={row.height} 
                        index={index+1} 
                        fontSize={fontSize} 
                        padding={padding}
                        style={{
                            fill: row.fill || "#F7F7F7"
                        }}
                    />
                ))
            }
        </g>
    );
}

export default Table;