import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <footer> Created by Eunbal/Talmo Developments 2019 &#169; </footer>
    </div>, 
    
    document.getElementById('root')
);

serviceWorker.unregister();
