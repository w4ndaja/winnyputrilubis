import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppLayout } from './layouts';
import { Home, Login, Register, Shop } from './pages';
import { publicSocket } from './lib/socket';

export default function App() {
    return (
        <Switch>
            <Route path="/">
                <AppLayout>
                    <Route path="/" exact component={ Home } />
                    <Route path="/login" exact component={ Login } />
                    <Route path="/register" exact component={ Register } />
                    <Route path="/shop" exact component={ Shop } />
                    <Route path="/shop/:category" exact component={ Shop } />
                </AppLayout>
            </Route>
            <Route>Not Found</Route>
        </Switch>
    );
}
