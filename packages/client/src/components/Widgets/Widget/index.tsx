import React, { useContext, useEffect, useRef } from "react";

import { WidgetContext } from "../../../context/WidgetContext";

import "./index.scss";

interface IWidgetProps {
    children: React.ReactNode,
    type: string
}


export const Widget = ({ children, type }: IWidgetProps) => {
    const { setTarget, isDrag } = useContext(WidgetContext);
    const draggedRef = useRef(null);

    const onMouseDown = () => {
        setTimeout(() => {
            setTarget(draggedRef.current, type);
        }, 100)
    };

    const onMouseMove = (e: MouseEvent) => {
        if (isDrag) {
            const draggedBlockElement: any = draggedRef.current as any;
            draggedBlockElement.style = `left: ${e.pageX - (draggedBlockElement.offsetWidth / 2)}px; top: ${e.pageY + 12}px`
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        }
    }, [isDrag]);

    return (
        <>
            <div className="c-Widget__draggedBlock"
                 data-visible={isDrag}
                 ref={draggedRef}>
                {children}
            </div>
            <div onMouseDown={onMouseDown}
                 className="c-Widget">
                {children}
            </div>
        </>
    )
};

Widget.Types = {
    TEXT_BOX: 'textBox'
} as const;
