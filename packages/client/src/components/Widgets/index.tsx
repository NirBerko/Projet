import React      from "react";

import { Widget } from "./Widget";

import "./index.scss";

export const Widgets = () => {
    return (
        <div className="c-Widgets">
            <Widget type={Widget.Types.TEXT_BOX}>Text</Widget>
            <Widget type={Widget.Types.SUB_TASKS}>Subtasks</Widget>
        </div>
    )
};
