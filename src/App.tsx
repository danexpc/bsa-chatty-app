import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {MessageList} from "./components/MessageList";
import {MessageInput} from "./components/MessageInput";
import {apiService} from "./services/api.service";
import {IMessage} from "./interfaces/message";
import {transformService} from "./services/transform.service";

class App extends Component<any, any> {
    state = {
        messages: []
    }

    componentDidMount() {
        this.renderMessages();
    }

    renderMessages = async() => {
        try {
            const messages: IMessage[] = transformService.transformAll(await apiService.fetchMessages());

            this.setState({
                messages: messages
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        if (this.state.messages.length !== 0) {
            console.log(this.state.messages)
            return (
                <div className="container">
                    <Header/>
                    <MessageList messages={this.state.messages}/>
                    <MessageInput/>
                </div>
            );
        }
        return (
            <></>
        )

    }

}

export default App;
