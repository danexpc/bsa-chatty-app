import React from "react";
import {Card} from "react-bootstrap";
import {FaThumbsUp} from "react-icons/all";

interface MessageProps {
}

export const Message: React.FC<MessageProps> = () => {
    return (
        <Card className="message">
            <Card.Body className="message-body">
                <div className="message-metadata d-flex">
                    <Card.Img src="https://unsplash.it/36/36?gravity=center" className="message-user-avatar" />
                    <Card.Title className="message-user-name">Dan Smahliuk</Card.Title>
                    <Card.Text className="message-time">14:32</Card.Text>
                </div>
                <Card.Text className="message-text">
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <button className="message-like">
                    <FaThumbsUp />
                </button>
            </Card.Body>
        </Card>
    );
}
