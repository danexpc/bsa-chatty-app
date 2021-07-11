import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";

interface MessageInputProps {
    onAddMessage: (message: string) => void
}

interface IState {
    message: string
}

export class MessageInput extends Component<MessageInputProps, IState> {

    constructor(props: MessageInputProps) {
        super(props);

        this.state = {
            message: ''
        }
    }

    handleChange = (e: any) => {
        this.setState({
                message: e.target.value
            })
    }

    handleSubmit = () => {
        this.props.onAddMessage(this.state.message);
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <div className="message-input">
                <Form.Control value={this.state.message} onChange={this.handleChange} className="message-input-text" type="text" placeholder="Message" size="sm"/>
                <Button onClick={this.handleSubmit} type="submit" className="message-input-button" size="sm">
                    Send
                </Button>
            </div>
        )
    }
}
