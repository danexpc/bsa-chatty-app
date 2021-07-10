import React from "react";
import {Message} from "./Message";
import {OwnMessage} from "./OwnMessage";

interface MessageListProps {
}

export const MessageList: React.FC<MessageListProps> = () => {
    return (
        <div className="message-list">
            <span className="messages-divider"/>
            <Message/>
            <Message/>
            <Message/>
            <span className="messages-divider"/>
            <Message/>
            <OwnMessage/>
            <Message/>
        </div>
    )
}
