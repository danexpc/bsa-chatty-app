import React from "react";
import {Message} from "./Message";
import {OwnMessage} from "./OwnMessage";

interface MessageListProps {
}

export const MessageList: React.FC<MessageListProps> = () => {
    return (
        <div className="message-list">
            <div className="message-divider">Yesterday</div>
            <Message/>
            <Message/>
            <Message/>
            <div className="message-divider">Today</div>
            <Message/>
            <OwnMessage/>
            <Message/>
        </div>
    )
}
