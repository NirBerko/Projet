import React             from "react";
import { Route, Switch } from "react-router-dom";

import { Template }  from "../components/Template";

import { Dashboard } from "./Dashboard";
import { Page }      from "./Page";

export const Routes = () => (
    <Template>
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/page' component={Page} />
        </Switch>
    </Template>
);
