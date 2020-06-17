import React, { useState } from 'react';

import { TextBlock } from "../../components/Blocks/TextBlock";

import './index.scss';

const block = (type: string) => {
    let component: any;

    switch (type) {
        case TextBlock.name: {
            component = TextBlock;
            break;
        }
        default:
    }

    return {
        component
    }
};

export const Page = () => {
    const [blocks, setBlocks] = useState([
        block('TextBlock')
    ]);


    return (
        <div className="r-Page">
            {blocks.map(({ component }: any, key) => React.createElement(component, {
                key,
                tabIndex: key,
                onEnter: () => {
                    setBlocks([
                        ...blocks,
                        block('TextBlock')
                    ])
                }
            }))}
        </div>
    );
};
