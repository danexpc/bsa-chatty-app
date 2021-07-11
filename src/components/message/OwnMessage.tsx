import React from "react";
import {Card} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
                <button className="message-delete" onClick={onDelete}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </Card.Body>
        </Card>
    )
}
