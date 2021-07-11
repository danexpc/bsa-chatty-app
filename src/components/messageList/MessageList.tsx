import React from "react";

import {Message} from "../message/Message";
import {IMessage} from "../../interfaces/message";
import {OwnMessage} from "../message/OwnMessage";
import {getFormattedDate} from "../../utils/DateFormatter";
import {getUser} from "../../auth/auth";

import "./MessageList.css"

interface IMessageListProps {
    messages: IMessage[]
    onLike: (id: string) => void
    onEdit: (id: string, text: string) => void
    onDelete: (id: string) => void
}

export const MessageList: React.FC<IMessageListProps> = ({messages, onLike, onEdit, onDelete}) => {

    const renderOutput = prepareMessagesForRender(messages, onLike, onEdit, onDelete)

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
                                      onLikeHandler: (id: string) => void,
                                      onEditHandler: (id: string, text: string) => void,
                                      onDeleteHandler: (id: string) => void): JSX.Element[] => {
    const renderOutput: JSX.Element[] = [];

    map.forEach((messages, day) => {
        renderOutput.push(
            <div key={day} className="message-divider">{day}</div>
        )
        messages.forEach(message => {
            if (message.userId === getUser().id) {
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
