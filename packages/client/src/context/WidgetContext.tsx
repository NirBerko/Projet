import React, { useEffect, useState } from "react";
import EventEmitter from "events";

export enum WidgetEventsTypes {
    DROP = "drop"
}

export const WidgetContext: any = React.createContext({});

export const WidgetContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [target, setTarget] = useState(null);

    const widgetEvents: EventEmitter = new EventEmitter();

    const onMouseUp = () => {
        if (target) {
            widgetEvents.emit(WidgetEventsTypes.DROP, target);
            setTarget(null);
        }
    };

    useEffect(() => {
        window.addEventListener('mouseup', onMouseUp);

        return () => window.removeEventListener('mouseup', onMouseUp);
    });

    return (
        <WidgetContext.Provider value={{
            target,
            isDrag: Boolean(target),
            setTarget,
            widgetEvents
        }}>
            {children}
        </WidgetContext.Provider>
    )
};
