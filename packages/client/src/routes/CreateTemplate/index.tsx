import React  from "react";

import { WidgetContextProvider } from "../../context/WidgetContext";

import { Widgets } from "../../components/Widgets";
import { TemplateEditor }  from "../../components/TemplateEditor";

import "./index.scss";

export const CreateTemplate = () => {
    return (
        <div className="r-CreateTemplate">
            <WidgetContextProvider>
                <div className="r-CreateTemplate__template">
                    <TemplateEditor />
                </div>
                <div className="r-CreateTemplate__widgets">
                    <Widgets />
                </div>
            </WidgetContextProvider>
        </div>
    )
};
