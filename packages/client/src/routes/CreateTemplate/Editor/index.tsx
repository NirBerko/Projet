import React, { useContext, useEffect, useState } from "react";
import { WidgetContext, WidgetEventsTypes }       from "../../../context/WidgetContext";

import "./index.scss";

interface BlockProps {
    children: React.ReactNode,
    onHover: (state: Boolean) => any
}

const Block = ({ children, onHover }: BlockProps) => (
    <div className="c-Editor__block" onMouseEnter={() => onHover(true)}
         onMouseLeave={() => onHover(false)}>{children}</div>
);

const blocks = [
    {

    }
];

export const Editor = () => {
    const [blockHover, setBlockHover] = useState<Number | null>(null);

    const { widgetEvents } = useContext(WidgetContext);


    const onDrop = (target: HTMLElement) => {
        if (blockHover !== null) {
            console.log(target);
        }
    };

    useEffect(() => {
        widgetEvents.addListener(WidgetEventsTypes.DROP, onDrop);

        return () => widgetEvents.removeListener(WidgetEventsTypes.DROP, onDrop);
    });


    return (
        <div className="c-Editor">
            {blocks.map((block, index) => (
                <Block key={index} onHover={state => setBlockHover(state ? index : null)}>
                    asf
                </Block>
            ))}
        </div>
    )
};
