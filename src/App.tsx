import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {MessageList} from "./components/MessageList";
import {MessageInput} from "./components/MessageInput";


function App() {
  return (
    <div className="container">
        <Header />
        <MessageList />
        <MessageInput />
    </div>
  );
}

export default App;
