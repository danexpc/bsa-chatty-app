import React from "react";
import {Card} from "react-bootstrap";
import {FaEdit, FaTrash} from "react-icons/all";

interface OwnMessageProps {
}

export const OwnMessage: React.FC<OwnMessageProps> = () => {
    return (
        <Card className="own-message">
            <Card.Body className="own-message-body">
                <div className="message-metadata d-flex">
                    <Card.Text className="message-time">14:32</Card.Text>
                </div>
                <Card.Text className="message-text">
                    With supporting text below as a natural lead-in to additional content.
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
