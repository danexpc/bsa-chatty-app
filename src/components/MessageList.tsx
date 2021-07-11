import React from "react";
import {Message} from "./Message";
import {IMessage} from "../interfaces/message";
import {OwnMessage} from "./OwnMessage";
import {getFormattedDate} from "../utils/DateFormatter";

interface MessageListProps {
    messages: IMessage[]
    onLike: (id: string) => void
    onDelete: (id: string) => void
    onEdit: (id: string, text: string) => void
}

export const MessageList: React.FC<MessageListProps> = (props) => {

    const renderOutput = prepareMessagesForRender(props.messages, props.onDelete, props.onEdit, props.onLike)

    return (
        <div className="message-list">
            {
                renderOutput
            }
        </div>
    )
}

const prepareMessagesForRender = (messages: IMessage[], onDeleteHandler: (id: string) => void,
                                  onEditHandler: (id: string, text: string) => void,
                                  onLikeHandler: (id: string) => void): JSX.Element[] => {

    const messagesByDayMap = convertMessageArrayToMap(messages);

    return convertMessagesByDayMapToJsx(messagesByDayMap, onDeleteHandler, onEditHandler, onLikeHandler);
}

const convertMessageArrayToMap = (messages: IMessage[]): Map<string, IMessage[]> => {
    let messagesByDay: Map<string, IMessage[]> = new Map<string, IMessage[]>();

    messages.forEach(message => {
        const day = getFormattedDate(message.createdAt)

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

    return messagesByDay;
}

const convertMessagesByDayMapToJsx = (map: Map<string, IMessage[]>,
                                      onDeleteHandler: (id: string) => void,
                                      onEditHandler: (id: string, text: string) => void,
                                      onLikeHandler: (id: string) => void): JSX.Element[] => {
    const renderOutput: JSX.Element[] = [];

    map.forEach((messages, day) => {
        renderOutput.push(
            <div key={day} className="message-divider">{day}</div>
        )
        messages.forEach(message => {
            if (message.userId === "6d57a02a-e0f7-4897-bed1-ba2f49796f69") {
                renderOutput.push(<OwnMessage key={message.id}
                                              text={message.text}
                                              createdAt={message.createdAt.getHours() + ":" + message.createdAt.getMinutes()}
                                              onDelete={() => onDeleteHandler(message.id)}
                                              onEdit={() => onEditHandler(message.id, message.text)}/>)
            } else {
                renderOutput.push(<Message key={message.id}
                                           id={message.id} userId={message.userId} avatar={message.avatar}
                                           user={message.user}
                                           text={message.text}
                                           createdAt={message.createdAt.getHours() + ":" + message.createdAt.getMinutes()}
                                           liked={message.liked}
                                           onLike={() => onLikeHandler(message.id)}/>)
            }
        })
    })

    return renderOutput
}
