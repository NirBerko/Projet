import React, { useEffect, useState } from "react";
import EventEmitter                   from "events";

export enum WidgetEventsTypes {
    DROP = "drop"
}

export const WidgetContext: any = React.createContext({});

export const WidgetContextProvider = ({ children }: { children: React.ReactNode }) => {
    const initialState = {
        target: null,
        type  : null
    };

    const [{ target, type }, setTarget] = useState(initialState);

    const widgetEvents: EventEmitter = new EventEmitter();

    const onMouseUp = () => {
        if (target && type) {
            widgetEvents.emit(WidgetEventsTypes.DROP, { target, type });
            setTarget(initialState);
        }
    };

    useEffect(() => {
        window.addEventListener('mouseup', onMouseUp);

        return () => window.removeEventListener('mouseup', onMouseUp);
    });

    return (
        <WidgetContext.Provider value={{
            element  : target ? { target, type } : null,
            isDrag   : target !== null,
            setTarget: (target: any, type: any) => {
                setTarget({ target, type })
            },
            widgetEvents
        }}>
            {children}
        </WidgetContext.Provider>
    )
};
