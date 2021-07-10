import React from "react";
import {Button, Form} from "react-bootstrap";

interface MessageInputProps {
}

export const MessageInput: React.FC<MessageInputProps> = () => {
    return (
        <div className="message-input">
            <Form.Control className="message-input-text" type="text" placeholder="Message" size="sm"/>
            <Button type="submit" className="message-input-button" size="sm">
                Send
            </Button>
        </div>
    )
}
