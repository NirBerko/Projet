import React             from "react";
import { Route, Switch } from "react-router-dom";

import { Template } from "../components/Template";

import { Dashboard }      from "./Dashboard";
import { CreateTemplate } from "./CreateTemplate";

const widthTemplate = (children: any) => (props: any) => (
    <Template>
        {React.createElement(children, props)}
    </Template>
);

export const Routes = () => (
    <Switch>
        <Route path='/' exact component={widthTemplate(Dashboard)} />
        <Route path='/template/new' exact component={widthTemplate(CreateTemplate)} />
    </Switch>
);
