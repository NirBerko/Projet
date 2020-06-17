import React from 'react';

import './index.scss';

export const TextBlock = ({ onEnter }: { onEnter: () => {} }) => (
    <div className="b-TextBlock"
         ref={ref => ref?.focus()}
         onKeyPress={event => {
             if (event.which === 13) {
                 event.preventDefault();

                 onEnter();
             }
         }}
         contentEditable={true}
         placeholder="Type your text here" />
);
