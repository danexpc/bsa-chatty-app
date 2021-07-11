import React from "react";
import {Message} from "./Message";
import {IMessage} from "../interfaces/message";
import {OwnMessage} from "./OwnMessage";

interface MessageListProps {
    messages: IMessage[]
    onLike: (id: string) => void
}

export const MessageList: React.FC<MessageListProps> = (props) => {
    return (
        <div className="message-list">
            <div className="message-divider">Yesterday</div>
            {
                props.messages.map(message => {
                    if (message.userId === "6d57a02a-e0f7-4897-bed1-ba2f49796f69") {
                        return <OwnMessage key={message.id}
                                        text={message.text}
                                        createdAt={message.createdAt.getHours() + ":" + message.createdAt.getMinutes()}/>
                    } else {
                        return <Message key={message.id}
                                        id={message.id} userId={message.userId} avatar={message.avatar} user={message.user}
                                        text={message.text}
                                        createdAt={message.createdAt.getHours() + ":" + message.createdAt.getMinutes()}
                                        liked={message.liked}
                                        onLike={() => props.onLike(message.id)}/>
                    }

                    }
                )
            }
        </div>
    )
}
