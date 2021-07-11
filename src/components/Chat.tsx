import React, {Component} from 'react';
import '../App.css';
import {Header} from "./Header";
import {MessageList} from "./MessageList";
import {MessageInput} from "./MessageInput";
import {ApiService} from "../services/api.service";
import {IMessage} from "../interfaces/message";
import {transformService} from "../services/transform.service";

interface ChatProps {
    url: string
}

interface IState {
    messages: IMessage[];
}


class Chat extends Component<ChatProps, IState> {
    apiService: ApiService;

    constructor(props: ChatProps) {
        super(props);

        this.apiService = new ApiService(props.url)
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this.renderMessages();
    }

    renderMessages = async () => {
        try {
            const messages: IMessage[] = transformService.transformAll(await this.apiService.fetchMessages());

            this.setState({
                messages: messages.sort((message1, message2) => message1.createdAt > message2.createdAt ? 1 : -1)
            });
        } catch (err) {
            console.log(err);
        }
    }

    addMessage = (message: string) => {
        const newMessages = this.state.messages;
        newMessages.push({
            id: "1",
            userId: "1",
            avatar: "https://unsplash.it/36/36?gravity=center",
            user: "Dan",
            text: message,
            createdAt: new Date()
        });
        this.setState(
            {
                messages: newMessages
            }
        )
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
                    <Header chatName={'My Chat'} participantsCount={participants.length}
                            messagesCount={this.state.messages.length}
                            lastMessageDate={`${lastMessageDate.toLocaleDateString()} ${lastMessageDate.getHours()}:${lastMessageDate.getMinutes()}`}/>
                    <MessageList messages={this.state.messages}/>
                    <MessageInput onAddMessage={this.addMessage}/>
                </div>
            );
        }
        return (
            <></>
        )

    }

}

export default Chat;
