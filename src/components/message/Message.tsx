import React from "react";
import {Card} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";

import "./Message.css"

interface IMessageProps {
    id: string,
    userId: string,
    avatar: string,
    user: string,
    text: string,
    createdAt: string,
    editedAt?: string
    liked: boolean
    onLike: () => void
}

export const Message: React.FC<IMessageProps> = ({avatar, user, text, createdAt, liked, onLike}) => {
    return (
        <Card className="message">
            <Card.Body className="message-body">
                <div className="message-metadata d-flex">
                    <Card.Img src={avatar} className="message-user-avatar"/>
                    <Card.Title className="message-user-name">{user}</Card.Title>
                    <Card.Text className="message-time">{createdAt}</Card.Text>
                </div>
                <Card.Text className="message-text">
                    {text}
                </Card.Text>
                <button className={`message-like ${liked ? 'like' : ''}`} onClick={onLike}>
                    <FontAwesomeIcon icon={faThumbsUp}/>
                </button>
            </Card.Body>
        </Card>
    );
}
