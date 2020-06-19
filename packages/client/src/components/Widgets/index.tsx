import React      from "react";

import "./index.scss";
import { Widget } from "./Widget";

export const Widgets = () => {
    return (
        <div className="c-Widgets">
            <Widget type={Widget.Types.TEXT_BOX}>Text</Widget>
        </div>
    )
};
