import React, { useContext, useEffect, useRef } from "react";

import { WidgetContext } from "../../../context/WidgetContext";

import "./index.scss";

interface IWidget {
    children: React.ReactNode
}

export const Widget = ({ children }: IWidget) => {
    const { setTarget, isDrag } = useContext(WidgetContext);
    const draggedRef = useRef(null);

    const onMouseDown = () => {
        setTimeout(() => {
            setTarget(draggedRef.current);
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
