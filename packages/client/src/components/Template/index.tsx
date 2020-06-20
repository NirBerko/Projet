import React          from "react";

import { Navigation } from "../Navigation";

import "./index.scss";

interface ITemplateProps {
    children: React.ReactNode
}

export const Template = ({ children }: ITemplateProps) => (
    <nav className="c-Template">
        <Navigation/>
        <div className="c-Template__container">
            {children}
        </div>
    </nav>
);
