import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/chat/Chat';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Chat url={"https://edikdolynskyi.github.io/react_sources/messages.json"}/>
    </React.StrictMode>,
    document.getElementById('root')
);

