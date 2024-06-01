"use client";
import { FC } from 'react';


interface NODE_PROPS_TYPES {
    name?: string,
    type?: string,
    width?: number,
    height?: number,
    index?: number,
    isPrimary?: boolean,
    fontSize?: number,
    padding?: {
        x: number,
        y: number
    },
    style?: {
        fill?: string,
        "strokeWidth"?: string,
        "stroke"?: string
        "fillOpacity"?: number,
        "strokeOpacity"?: number
    }
};

const NodeRow: FC<NODE_PROPS_TYPES> = (props: NODE_PROPS_TYPES) => {
    const {
        name = "Column",
        type = "Type",
        width = 100,
        height = 90,
        index = 0,
        isPrimary = false,
        fontSize = 12,
        padding = {
            x: 16,
            y: 4
        },
        style = {
            fill: "#F7F7F7",
            strokeWidth: 0,
            stroke: "rgb(75, 158, 134)",
            fillOpacity: 0.8,
            strokeOpacity: 0.9
        }
    } = props;
    const keyIcon = <path transform={`translate(16, 10) rotate(90) scale(.8)`} d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>;

    return (
        <g transform={`translate(0, ${index * height})`}>
            <rect x="0" y="0" width={width} height={height} rx={0} ry={0} style={style} />
            {isPrimary? keyIcon : ''}
            <text x={width - padding.x} y={height - fontSize} width={width} height={height} fontFamily="Verdana" fontSize={`calc(${fontSize} - 2)`} fill="#666666"  clipPath="url(#clip_node)" dominantBaseline="middle" textAnchor='end'>{type}</text>
            <text x={padding.x} y={height - fontSize} width={width} height={height} fontFamily="Verdana" fontSize={fontSize} fill="#333333"  clipPath="url(#clip_node)" dominantBaseline="middle" textAnchor='start'>{name}</text>
        </g>
    );
}

export default NodeRow;