import React, {Component} from 'react';
import {v4 as uuidv4} from "uuid";

import {Header} from "../header/Header";
import {MessageList} from "../messageList/MessageList";
import {MessageInput} from "../messageInput/MessageInput";
import {ApiService} from "../../services/api.service";
import {IMessage} from "../../interfaces/message";
import {transformService} from "../../services/transform.service";
import {Preloader} from "../preloader/Preloader";
import {getUser} from "../../auth/auth";
import {IUser} from "../../interfaces/user";

import "./Chat.css"

interface IChatProps {
    url: string
}

interface IChatState {
    messages: IMessage[],
    isEditing: boolean,
    editingMessage: string,
    editingMessageId: string,
    loading: boolean
}

export default class Chat extends Component<IChatProps, IChatState> {
    apiService: ApiService;

    constructor(props: IChatProps) {
        super(props);

        this.apiService = new ApiService(props.url)
        this.state = {
            messages: [],
            isEditing: false,
            editingMessage: '',
            editingMessageId: '',
            loading: true
        }
    }

    componentDidMount(): void {
        this.renderMessages();
    }

    renderMessages = async () => {
        try {
            const messages: IMessage[] = transformService.transformAll(await this.apiService.fetchMessages());

            this.setState({
                messages: messages.sort((message1, message2) => message1.createdAt > message2.createdAt ? 1 : -1),
                loading: false
            });
        } catch (err) {
            console.log(err);
        }
    }

    addMessage = (message: string): void => {
        const messages: IMessage[] = [...this.state.messages];

        const user: IUser = getUser();

        messages.push({
            id: uuidv4(),
            userId: user.id,
            avatar: user.avatar,
            user: user.username,
            text: message,
            createdAt: new Date(),
            liked: false
        });

        this.setState(
            {
                messages
            }
        )
    }

    toggleLike = (id: string): void => {
        let messages: IMessage[] = [...this.state.messages];

        const index = messages.findIndex(message => message.id === id);
        if (messages[index]) {
            messages[index].liked = !messages[index]?.liked;
            this.setState({
                messages
            })
        }
    }

    deleteMessage = (id: string): void => {
        let messages: IMessage[] = [...this.state.messages];

        const index = messages.findIndex(message => message.id === id);
        if (messages[index]) {
            messages.splice(index, 1)
            this.setState({
                messages
            })
        }
    }

    editMessage = (text: string): void => {
        let messages: IMessage[] = [...this.state.messages];

        const index = messages.findIndex(message => message.id === this.state.editingMessageId);
        if (messages[index]) {
            messages[index].text = text;
            messages[index].editedAt = new Date();
            this.setState({
                messages,
                editingMessageId: '',
                editingMessage: '',
                isEditing: false
            })
        }
    }

    invokeEditionMessage = (id: string, text: string): void => {
        this.setState({
            editingMessageId: id,
            editingMessage: text,
            isEditing: true
        })
    }

    render() {
        if (this.state.loading) {
            return <Preloader/>
        }

        const {messages, editingMessage, isEditing} = this.state

        const numberUniqueParticipants = countUniqueParticipants(messages)

        const lastMessageDate: Date = getLastMessageDate(messages)

        return (
            <div className="chat container">
                <Header chatName={'My Chat'} participantsCount={numberUniqueParticipants}
                        messagesCount={messages.length}
                        lastMessageDate={`${lastMessageDate.toLocaleDateString()} ${lastMessageDate.getHours()}:${lastMessageDate.getMinutes()}`}/>
                <MessageList onLike={this.toggleLike} onDelete={this.deleteMessage} onEdit={this.invokeEditionMessage}
                             messages={messages}/>
                <MessageInput onAddMessage={this.addMessage} onEditMessage={this.editMessage}
                              text={editingMessage} isEditing={isEditing}/>
            </div>
        );

    }

}

const countUniqueParticipants = (messages: IMessage[]): number => {
    const participants: string[] = []

    messages.forEach(message => {
        if (!participants.includes(message['userId'])) {
            participants.push(message['userId'])
        }
    })

    return participants.length;
}

const getLastMessageDate = (messages: IMessage[]): Date => {
    return messages[messages.length - 1]['createdAt'];
}
