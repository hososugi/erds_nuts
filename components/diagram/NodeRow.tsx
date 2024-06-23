"use client";
import { FC } from 'react';


interface NODE_PROPS_TYPES {
    name?: string,
    type?: string,
    width?: number,
    height?: number,
    index?: number,
    isPrimary?: boolean,
    isForeign?: boolean,
    fontSize?: number,
    padding?: {
        x?: number | undefined,
        y?: number | undefined
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
        isForeign = false,
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
    const keyFilledIcon = (<g transform={`translate(${padding.x / 2}, ${fontSize - 2}) rotate(0) scale(.8)`}>
        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    </g>);
    
    const keyIcon = (<g transform={`translate(${padding.x / 2}, ${fontSize - 2}) rotate(0) scale(.8)`}>
        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </g>);

    const connectRightIcon = (<g transform={`translate(${width - (padding.x/2)}, ${fontSize - 2}) rotate(0) scale(.8)`}>
        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
    </g>);

    return (
        <g transform={`translate(0, ${index * height})`}>
            <rect x="0" y="0" width={width} height={height} rx={0} ry={0} style={style} />
            {isPrimary? keyFilledIcon : ''}
            {isForeign? keyIcon : ''}
            <text x={width - padding.x} y={height - fontSize} width={width} height={height} fontFamily="Verdana" fontSize={`calc(${fontSize} - 2)`} fill="#666666"  clipPath="url(#clip_node)" dominantBaseline="middle" textAnchor='end'>{type}</text>
            <text x={padding.x + 12} y={height - fontSize} width={width} height={height} fontFamily="Verdana" fontSize={fontSize} fill="#333333"  clipPath="url(#clip_node)" dominantBaseline="middle" textAnchor='start'>{name}</text>
            {index != 0 ? (<circle className="node-connect-point" r={fontSize/2} cx={width} cy={height - fontSize} fill="red" stroke="#888888" stroke-width="1" />) : <></>}
        </g>
    );
}

export default NodeRow;