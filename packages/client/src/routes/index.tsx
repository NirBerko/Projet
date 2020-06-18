import React             from "react";
import { Route, Switch } from "react-router-dom";

import { Template }  from "../components/Template";

import { Dashboard } from "./Dashboard";

export const Routes = () => (
    <Template>
        <Switch>
            <Route path='/' exact component={Dashboard} />
        </Switch>
    </Template>
);
