import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { RecoilRoot } from 'recoil';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Preloader } from './components';
require('./lib/api');
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <Suspense fallback={ <Preloader /> }>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Suspense>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
