import React, { useState }                from "react";
import { Editor, EditorState, RichUtils } from 'draft-js';

import { Button, Icon } from "semantic-ui-react";

import "./index.scss";

export const TextBox = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onChange = (editorState: EditorState) => {
        setEditorState(editorState)
    };

    const makeBold = () => onChange(RichUtils.toggleInlineStyle(
        editorState,
        'BOLD'
    ));

    return (
        <div className="c-TextBox">
            <Button onClick={makeBold} icon size="small">
                <Icon name='bold' />
            </Button>
            <Editor editorState={editorState}
                    onChange={onChange} />
        </div>
    )
};
