import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <div>
        <HashRouter basename='/'>
            <App />
        </HashRouter>
        <footer> Created by Eunbal/Talmo Developments 2019 &#169; </footer>
    </div>, 
    
    document.getElementById('root')
);

serviceWorker.unregister();
