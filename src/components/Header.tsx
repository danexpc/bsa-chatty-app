import React from "react";
import {Container, Navbar} from "react-bootstrap";

interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = () => {
    return (
            <Navbar className="header mt-4">
                <Container className="align-items-center">
                    <Navbar.Brand href="#home" className="mr-5 header-title">My Chat</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-start">
                        <Navbar.Text className="mr-5 header-users-count">
                            23 participants
                        </Navbar.Text>
                        <Navbar.Text className="header-messages-count">
                            53 messages
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Navbar.Text className="justify-content-end header-last-message-date">
                        Last message at 14.28
                    </Navbar.Text>
                </Container>
            </Navbar>
    );
}
