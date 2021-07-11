import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './components/Chat';

ReactDOM.render(
    <React.StrictMode>
        <Chat url={"https://edikdolynskyi.github.io/react_sources/messages.json"}/>
    </React.StrictMode>,
    document.getElementById('root')
);

