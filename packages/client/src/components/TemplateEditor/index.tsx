import React, { useContext, useEffect, useState } from "react";
import { WidgetContext, WidgetEventsTypes }       from "../../context/WidgetContext";

import { Button, Card, Icon, Message } from 'semantic-ui-react'

import { Widget }  from "../Widgets/Widget";
import { TextBox } from "../blocks/TextBox";

import "./index.scss";

interface BlockProps {
    children: React.ReactNode,
    onDelete: () => any
}

interface IBlock {
    id: number,
    type: string
}

const Block = ({ children, onDelete }: BlockProps) => (
    <Card className="c-Editor__block" fluid>
        <Card.Content>
            <Button icon
                    size="tiny"
                    color="red"
                    circular
                    onClick={onDelete}
                    className="c-Editor__block__delete-button">
                <Icon name="delete" />
            </Button>
            {children}
        </Card.Content>
    </Card>
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

export const TemplateEditor = () => {
    const [blocks, setBlocks] = useState<IBlock[]>([]);
    const [dropIndicator, setDropIndicator] = useState(false);

    const { element, widgetEvents, isDrag } = useContext(WidgetContext);

    const onDrop = ({ type }: { type: string }) => {
        setDropIndicator(false);
        setBlocks([
            ...blocks,
            {
                id: Math.floor(Math.random() * 100),
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

    const onDelete = (index: number) => {
        setBlocks(blocks.filter((_, i) => i !== index))
    };

    return (
        <div className="c-Editor" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {blocks.map((block, index) => {
                const component = renderBlockType(block.type);

                if (!component) {
                    return 'none';
                }

                return (
                    <Block key={block.id} onDelete={() => onDelete(index)}>
                        {React.createElement(component)}
                    </Block>
                )
            })}

            <div className="c-Editor__drop-indicator" data-visible={dropIndicator}>
                <Message>
                    <Message.Header>{element?.type}</Message.Header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque aut debitis doloribus
                        dolorum expedita facilis harum incidunt minima minus natus odit officia, officiis quibusdam
                        sequi sit soluta vel veritatis.
                    </p>
                </Message>
            </div>
        </div>
    )
};
