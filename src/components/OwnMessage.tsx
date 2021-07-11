import React from "react";
import {Card} from "react-bootstrap";
import {FaEdit, FaTrash} from "react-icons/all";

interface OwnMessageProps {
    text: string,
    createdAt: string,
    editedAt?: string
}

export const OwnMessage: React.FC<OwnMessageProps> = (props) => {
    return (
        <Card className="own-message">
            <Card.Body className="own-message-body">
                <div className="message-metadata d-flex">
                    <Card.Text className="message-time">{props.createdAt}</Card.Text>
                </div>
                <Card.Text className="message-text">
                    {props.text}
                </Card.Text>
                <button className="message-edit">
                    <FaEdit />
                </button>
                <button className="message-delete">
                    <FaTrash />
                </button>
            </Card.Body>
        </Card>
    )
}
