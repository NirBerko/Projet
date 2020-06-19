import React  from "react";

import { WidgetContextProvider } from "../../context/WidgetContext";

import { Widgets } from "../../components/Widgets";
import { Editor }  from "./Editor";

import "./index.scss";

export const CreateTemplate = () => {
    return (
        <div className="r-CreateTemplate">
            <WidgetContextProvider>
                <div className="r-CreateTemplate__template">
                    <Editor />
                </div>
                <div className="r-CreateTemplate__widgets">
                    <Widgets />
                </div>
            </WidgetContextProvider>
        </div>
    )
};
