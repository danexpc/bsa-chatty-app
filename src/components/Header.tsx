import React from "react";
import {Container, Navbar} from "react-bootstrap";

interface HeaderProps {
    chatName: string
    participantsCount: number,
    messagesCount: number,
    lastMessageDate: string
}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <Navbar className="header mt-4">
            <Container className="align-items-center">
                <Navbar.Brand href="#home" className="mr-5 header-title">{props.chatName}</Navbar.Brand>
                <Navbar.Collapse className="justify-content-start">
                    <Navbar.Text className="mr-5 header-users-count">
                        {props.participantsCount} participants
                    </Navbar.Text>
                    <Navbar.Text className="header-messages-count">
                        {props.messagesCount} messages
                    </Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Text className="justify-content-end header-last-message-date">
                    Last message at {props.lastMessageDate}
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}
