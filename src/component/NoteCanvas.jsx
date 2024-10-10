import React, { useEffect, useRef, useState } from 'react'
import { Stage, Layer, Star, Line, Text } from 'react-konva';

export default function NoteCanvas() {

    const rectRef = useRef(null);
    const [tool, setTool] = useState('pen')
    const [pointerArray, setPointerArray] = useState([{ x: 0, y: 0 }])
    const [linesArray, setLinesArray] = useState([])
    const [step, setStep] = useState(0);

    const [isDrawing, setIsDrawing] = useState(false);

    const handleMouseMove = (e) => {
        if (!isDrawing) {
            return;
        }
        const pos = e.target.getStage().getPointerPosition();
        setPointerArray((prev) => prev.concat([pos]));
        console.log(pointerArray);
    }

    const handleMouseDown = (e) => {
        setIsDrawing(true);
        const pos = e.target.getStage().getPointerPosition();
        setPointerArray([pos]);
    }

    const handleMouseUp = (e) => {
        setIsDrawing(false);
        setLinesArray((prev) => [...prev, { points: pointerArray, tool }]);
        setPointerArray([]);
    }

    useEffect(() => {
        // pointerArray.slice(1)
        console.log(pointerArray);
    }, [pointerArray])

    return (
        <div>
            <select value={tool} onChange={(e) => {
                setTool(e.target.value);
            }}>
                <option value="pen">Pen</option>
                <option value="eraser">Eraser</option>
            </select>

            <Stage width={window.innerWidth} height={window.innerHeight} onMouseMove={(e) => handleMouseMove(e)} onMouseDown={(e) => handleMouseDown(e)} onMouseUp={(e) => handleMouseUp(e)}>
                <Layer>
                    {
                        linesArray.map((line, i) => (
                            <Line
                                key={i}
                                points={line.points.flatMap((point) => [point.x, point.y])}
                                stroke="blue"
                                strokeWidth={line.tool === 'eraser' ? 20 : 5}
                                tension={0.5}
                                lineCap='round'
                                lineJoin='round'
                                ref={rectRef}
                                globalCompositeOperation={
                                    line.tool === 'eraser' ? 'destination-out' : 'source-over'
                                }
                            />
                        ))
                    }
                    <Line
                        points={pointerArray.flatMap((point) => [point.x, point.y])}
                        stroke="blue"
                        strokeWidth={tool === 'eraser' ? 20 : 5}
                        tension={0.5}
                        lineCap='round'
                        lineJoin='round'
                        ref={rectRef}
                        globalCompositeOperation={
                            tool === 'eraser' ? 'destination-out' : 'source-over'
                        }
                    />
                </Layer>
            </Stage>
        </div>
    )
}
