import React from "react";
import {Card} from "react-bootstrap";
import {FaThumbsUp} from "react-icons/all";

interface MessageProps {
    id: string,
    userId: string,
    avatar: string,
    user: string,
    text: string,
    createdAt: string,
    editedAt?: string
}

export const Message: React.FC<MessageProps> = (props) => {
    const {avatar, user, text, createdAt} = props;

    return (
        <Card className="message">
            <Card.Body className="message-body">
                <div className="message-metadata d-flex">
                    <Card.Img src={avatar} className="message-user-avatar" />
                    <Card.Title className="message-user-name">{user}</Card.Title>
                    <Card.Text className="message-time">{createdAt}</Card.Text>
                </div>
                <Card.Text className="message-text">
                    {text}
                </Card.Text>
                <button className="message-like">
                    <FaThumbsUp />
                </button>
            </Card.Body>
        </Card>
    );
}
