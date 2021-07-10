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

    renderMessages = async () => {
        try {
            const messages: IMessage[] = transformService.transformAll(await apiService.fetchMessages());

            this.setState({
                messages: messages.sort((message1, message2) => message1.createdAt > message2.createdAt ? 1 : -1)
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        if (this.state.messages.length !== 0) {
            const participants: string[] = []
            this.state.messages.forEach(message => {
                if (!participants.includes(message['user'])) {
                    participants.push(message['user'])
                }
            })
            const lastMessageDate: Date = this.state.messages[this.state.messages.length - 1]['createdAt'];
            return (
                <div className="container">
                    <Header participantsCount={participants.length} messagesCount={this.state.messages.length}
                            lastMessageDate={`${lastMessageDate.toLocaleDateString()} ${lastMessageDate.getHours()}:${lastMessageDate.getMinutes()}`}/>
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
