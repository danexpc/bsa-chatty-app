import React from "react";
import {Message} from "./Message";

interface MessageListProps {
}

export const MessageList: React.FC<MessageListProps> = () => {
    return (
        <div className="message-list">
            <span className="messages-divider"/>
            <Message />
            <Message />
            <Message />
            <span className="messages-divider"/>
            <Message />
            <Message />
            <Message />
        </div>
    )
}
