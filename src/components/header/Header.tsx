import React from "react";
import {Container, Navbar} from "react-bootstrap";

interface IHeaderProps {
    chatName: string
    participantsCount: number,
    messagesCount: number,
    lastMessageDate: string
}

export const Header: React.FC<IHeaderProps> = ({chatName, participantsCount, messagesCount, lastMessageDate}) => {
    return (
        <Navbar className="header mt-4">
            <Container className="align-items-center">
                <Navbar.Brand href="#home" className="mr-5 header-title">{chatName}</Navbar.Brand>
                <Navbar.Collapse className="justify-content-start">
                    <Navbar.Text className="mr-5 header-users-count">
                        {participantsCount} participants
                    </Navbar.Text>
                    <Navbar.Text className="header-messages-count">
                        {messagesCount} messages
                    </Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Text className="justify-content-end header-last-message-date">
                    Last message at {lastMessageDate}
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}
