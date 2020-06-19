import React          from "react";
import { useHistory } from "react-router-dom";

import "./index.scss";

interface ILink {
    path: string;
    children: React.ReactNode
}

const Link = ({ path, children }: ILink) => {
    const history = useHistory();

    return (
        <li onClick={() => {
            history.push(path)
        }}>{children}</li>
    );
};

export const Navigation = () => (
    <nav className="c-Navigation">
        <ul>
            <Link path="/template/new">New Template</Link>
        </ul>
    </nav>
);
