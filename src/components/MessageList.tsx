import React from "react";
import {Message} from "./Message";
import {IMessage} from "../interfaces/message";

interface MessageListProps {
    messages: IMessage[]
}

export const MessageList: React.FC<MessageListProps> = (props) => {
    return (
        <div className="message-list">
            <div className="message-divider">Yesterday</div>
            {
                props.messages.map(message =>
                    <Message key={message.id}
                        id={message.id} userId={message.userId} avatar={message.avatar} user={message.user}
                        text={message.text} createdAt={message.createdAt}/>
                )
            }
        </div>
    )
}
