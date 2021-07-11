import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";

interface MessageInputProps {
    onAddMessage: (message: string) => void,
    onEditMessage: (message: string) => void,
    message: string
    isEdit: boolean
}

interface IState {
    message: string
    touched: boolean
}

export class MessageInput extends Component<MessageInputProps, IState> {

    constructor(props: MessageInputProps) {
        super(props);

        this.state = {
            message: '',
            touched: false
        }
    }

    handleChange = (e: any) => {
        if (!this.state.touched) {
            this.setState({
                    touched: true
                }
            )
        }
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit = () => {
        if (this.props.isEdit) {
            this.props.onEditMessage(this.state.message);
        } else {
            this.props.onAddMessage(this.state.message);
        }
        this.setState({
            message: '',
            touched: false
        })
    }

    render() {
        return (
            <div className="message-input">
                <Form.Control
                    value={this.props.isEdit && !this.state.touched ? this.props.message : this.state.message}
                    onChange={this.handleChange} className="message-input-text" type="text"
                    placeholder="Message" size="sm"/>
                <Button onClick={this.handleSubmit} type="submit" className="message-input-button" size="sm">
                    {this.props.isEdit ? 'Edit' : 'Send'}
                </Button>
            </div>
        )
    }
}
