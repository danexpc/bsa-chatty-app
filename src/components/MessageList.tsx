import React from "react";
import {Message} from "./Message";
import {IMessage} from "../interfaces/message";
import {OwnMessage} from "./OwnMessage";

interface MessageListProps {
    messages: IMessage[]
    onLike: (id: string) => void
    onDelete: (id: string) => void
    onEdit: (id: string, text: string) => void
}

export const MessageList: React.FC<MessageListProps> = (props) => {

    let messagesByDay: Map<string, IMessage[]> = new Map<string, IMessage[]>();

    props.messages.forEach(message => {
        let day: string  = message.createdAt.getDate().toString();
        if (messagesByDay.has(day)) {
            let messages = messagesByDay.get(day);
            if (messages) {
                messages.push(message)
                messagesByDay.set(day, messages)
                return
            }
        }
        messagesByDay.set(day, Array.of(message))
    })

    let renderOutput: JSX.Element[] = [];

    messagesByDay.forEach((messages, day) => {
        renderOutput.push(
            <div key={day} className="message-divider">{day}</div>
        )
        messages.forEach(message => {
            if (message.userId === "6d57a02a-e0f7-4897-bed1-ba2f49796f69") {
                renderOutput.push(<OwnMessage key={message.id}
                                   text={message.text}
                                   createdAt={message.createdAt.getHours() + ":" + message.createdAt.getMinutes()}
                                   onDelete={() => props.onDelete(message.id)}
                                   onEdit={() => props.onEdit(message.id, message.text)}/>)
            } else {
                renderOutput.push(<Message key={message.id}
                                id={message.id} userId={message.userId} avatar={message.avatar}
                                user={message.user}
                                text={message.text}
                                createdAt={message.createdAt.getHours() + ":" + message.createdAt.getMinutes()}
                                liked={message.liked}
                                onLike={() => props.onLike(message.id)}/>)
            }
        })
    })


    return (
        <div className="message-list">
            {
                renderOutput
            }
        </div>
    )
}
