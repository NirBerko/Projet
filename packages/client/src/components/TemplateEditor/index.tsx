import React, { useContext, useEffect, useState } from "react";
import { WidgetContext, WidgetEventsTypes }       from "../../context/WidgetContext";

import { Message } from 'semantic-ui-react'

import { Widget }  from "../Widgets/Widget";
import { TextBox } from "../blocks/TextBox";

import "./index.scss";

interface BlockProps {
    children: React.ReactNode
}

const Block = ({ children }: BlockProps) => (
    <div className="c-Editor__block">{children}</div>
);


const renderBlockType = (type: string) => {
    let component = null;

    switch (type) {
        case Widget.Types.TEXT_BOX:
            component = TextBox;
            break;
        default:
    }

    return component;
};

interface IBlock {
    type: string
}

export const TemplateEditor = () => {
    const [blocks, setBlocks] = useState<IBlock[]>([]);
    const [dropIndicator, setDropIndicator] = useState(false);

    const { element, widgetEvents, isDrag } = useContext(WidgetContext);

    const onDrop = ({ type }: { type: string }) => {
        setDropIndicator(false);
        setBlocks([
            ...blocks,
            {
                type
            }
        ])
    };

    useEffect(() => {
        widgetEvents.addListener(WidgetEventsTypes.DROP, onDrop);

        return () => widgetEvents.removeListener(WidgetEventsTypes.DROP, onDrop);
    });

    const onMouseEnter = () => {
        if (isDrag) {
            setDropIndicator(true);
        }
    };

    const onMouseLeave = () => setDropIndicator(false);

    return (
        <div className="c-Editor" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="c-Editor__drop-indicator" data-visible={dropIndicator}>
                <Message>
                    <Message.Header>{element?.type}</Message.Header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque aut debitis doloribus dolorum expedita facilis harum incidunt minima minus natus odit officia, officiis quibusdam sequi sit soluta vel veritatis.
                    </p>
                </Message>
            </div>
            {blocks.map((block, index) => {
                const component = renderBlockType(block.type);

                if (!component) {
                    return 'none';
                }

                return (
                    <Block key={index}>
                        {React.createElement(component)}
                    </Block>
                )
            })}
        </div>
    )
};
