import React from "react";
import {Card} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

import "./Message.css"

interface IOwnMessageProps {
    text: string,
    avatar: string,
    user: string,
    editedAt: Date | undefined,
    createdAt: string,
    onDelete: () => void,
    onEdit: () => void
}

export const OwnMessage: React.FC<IOwnMessageProps> = ({text, avatar,user, createdAt, editedAt, onEdit, onDelete}) => {
    return (
        <Card className="own-message">
            <Card.Body className="own-message-body">
                <div className="message-metadata d-flex align-items-start">
                    <Card.Img src={avatar} className="message-user-avatar"/>
                    <Card.Title className="message-user-name">{user}</Card.Title>
                    <Card.Text className="message-time">{(editedAt ? "(edited) " : "") + createdAt}</Card.Text>
                </div>
                <Card.Text className="message-text">
                    {text}
                </Card.Text>
                <button className="message-edit" onClick={onEdit}>
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
                <button className="message-delete" onClick={onDelete}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>

            </Card.Body>
        </Card>
    )
}
