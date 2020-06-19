import React             from "react";
import { Route, Switch } from "react-router-dom";

import { Template }  from "../components/Template";

import { Dashboard } from "./Dashboard";
import { CreateTemplate } from "./CreateTemplate";

export const Routes = () => (
    <Template>
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/template/new' exact component={CreateTemplate} />
        </Switch>
    </Template>
);
