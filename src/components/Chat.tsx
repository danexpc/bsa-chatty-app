import React, {Component} from 'react';
import '../App.css';
import {Header} from "./Header";
import {MessageList} from "./MessageList";
import {MessageInput} from "./MessageInput";
import {ApiService} from "../services/api.service";
import {IMessage} from "../interfaces/message";
import {transformService} from "../services/transform.service";

import { v4 as uuidv4 } from "uuid";

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
            id: uuidv4(),
            userId: "6d57a02a-e0f7-4897-bed1-ba2f49796f69",
            avatar: "https://unsplash.it/36/36?gravity=center",
            user: "Dan",
            text: message,
            createdAt: new Date(),
            liked: false
        });
        this.setState(
            {
                messages: newMessages
            }
        )
    }

    toggleLike = (id: string) => {
        let messages = this.state.messages;
        const index = messages.findIndex(message => message.id === id);
        if (messages[index]) {
            messages[index].liked = !messages[index]?.liked;
            this.setState({
                messages: messages
            })
        }
    }

    render() {
        if (this.state.messages.length !== 0) {
            const participants: string[] = []
            this.state.messages.forEach(message => {
                if (!participants.includes(message['userId'])) {
                    participants.push(message['userId'])
                }
            })
            const lastMessageDate: Date = this.state.messages[this.state.messages.length - 1]['createdAt'];
            return (
                <div className="container">
                    <Header chatName={'My Chat'} participantsCount={participants.length}
                            messagesCount={this.state.messages.length}
                            lastMessageDate={`${lastMessageDate.toLocaleDateString()} ${lastMessageDate.getHours()}:${lastMessageDate.getMinutes()}`}/>
                    <MessageList onLike={this.toggleLike} messages={this.state.messages}/>
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
