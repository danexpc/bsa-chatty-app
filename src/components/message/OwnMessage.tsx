import React from "react";
import {Card} from "react-bootstrap";
import {FaEdit, FaTrash} from "react-icons/all";

import "./Message.css"

interface IOwnMessageProps {
    text: string,
    createdAt: string,
    onDelete: () => void,
    onEdit: () => void
}

export const OwnMessage: React.FC<IOwnMessageProps> = ({text, createdAt, onEdit, onDelete}) => {
    return (
        <Card className="own-message">
            <Card.Body className="own-message-body">
                <div className="message-metadata d-flex">
                    <Card.Text className="message-time">{createdAt}</Card.Text>
                </div>
                <Card.Text className="message-text">
                    {text}
                </Card.Text>
                <button className="message-edit" onClick={onEdit}>
                    <FaEdit/>
                </button>
                <button className="message-delete" onClick={onDelete}>
                    <FaTrash/>
                </button>
            </Card.Body>
        </Card>
    )
}
