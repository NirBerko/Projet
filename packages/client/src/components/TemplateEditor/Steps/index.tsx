import React from "react";

import { Button } from "semantic-ui-react";

import "./index.scss";

export const TemplateSteps = () => {
    return (
        <div className="c-TemplateSteps">
            <ul>
                <li>
                    <div className="c-TemplateSteps__step-name">
                        Mei Netanya
                    </div>
                </li>
                <li>
                    <Button>New Step</Button>
                </li>
            </ul>
        </div>
    )
};
