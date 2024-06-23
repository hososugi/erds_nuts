"use client";
import { FC } from 'react';
import NodeRow from '@/components/diagram/NodeRow';


interface NODE_PROPS_TYPES {
    title?: string,
    width?: number,
    height?: number,
    rowHeight?: number,
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
    },
    rows?: Array
};

const Table: FC<NODE_PROPS_TYPES> = (props: NODE_PROPS_TYPES) => {
    const {
        title = "Title",
        width = 100,
        height = 0,
        rowHeight = 30,
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
        },
        rows = []
    } = props;

    return (
        <g transform={`translate(${x}, ${y})`}>
            <clipPath id="clip_node">
                <rect x={padding.x} y={padding.y} width={width - (2 * (padding.x||0))} height={rowHeight} />
            </clipPath>
            <rect x="0" y="0" width={width} height={rows.length * rowHeight} rx={rx} ry={ry} style={style} />

            <NodeRow 
                key={`node_title`}
                name={title} 
                type='' 
                width={width} 
                height={rowHeight} 
                index={0} 
                fontSize={fontSize} 
                padding={padding}
                style={{
                    fill: style.fill
                }}
                />

            {
                rows.map((row, index) => (
                    <NodeRow 
                        key={`node_row_${index}`}
                        isPrimary={row.isPrimary}
                        isForeign={row.isForeign}
                        name={row.name} 
                        type={row.type} 
                        width={width} 
                        height={rowHeight} 
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