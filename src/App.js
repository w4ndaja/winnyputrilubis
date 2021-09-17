import React from 'react';
import { Route, Switch } from 'wouter';
import { AppLayout } from './layouts';
import { Home, Login, Register, Shop } from './pages';

export default function App() {
    return (
        <Switch>
            <Route base="/">
                <AppLayout>
                    <Route path="" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/shop" exact component={Shop} />
                </AppLayout>
            </Route>
            <Route>Not Found</Route>
        </Switch>
    );
}
