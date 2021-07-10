import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {MessageList} from "./components/MessageList";
import {MessageInput} from "./components/MessageInput";
import {apiService} from "./services/api.service";
import {IMessage} from "./interfaces/message";


class App extends Component<any, any> {
    state = {
        messages: []
    }

    componentDidMount() {
        this.renderMessages();
    }

    renderMessages = async() => {
        try {
            const messages: IMessage[] = await apiService.fetchMessages();
            this.setState({
                messages: messages
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div className="container">
                <Header/>
                <MessageList messages={this.state.messages}/>
                <MessageInput/>
            </div>
        );
    }

}

export default App;
