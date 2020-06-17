import React          from "react";

import { Navigation } from "../Navigation";

import "./index.scss";

export const Template = ({ children }: any) => (
    <nav className="c-Template">
        <Navigation/>
        <div className="c-Template__container">
            {children}
        </div>
    </nav>
);
