import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";

interface IMessageInputProps {
    onAddMessage: (message: string) => void,
    onEditMessage: (message: string) => void,
    text: string
    isEditing: boolean
}

interface IMessageInputState {
    text: string
    touched: boolean
}

export class MessageInput extends Component<IMessageInputProps, IMessageInputState> {

    constructor(props: IMessageInputProps) {
        super(props);

        this.state = {
            text: '',
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
            text: e.target.value
        })
    }

    handleSubmit = () => {

        const {text} = this.state

        if (this.props.isEditing) {
            this.props.onEditMessage(text);
        } else {
            this.props.onAddMessage(text);
        }

        this.setState({
            text: '',
            touched: false
        })
    }

    render() {

        const {isEditing, text: textFromProps} = this.props

        const {touched, text: textFromState} = this.state

        return (
            <div className="message-input">
                <Form.Control
                    value={isEditing && !touched ? textFromProps : textFromState}
                    onChange={this.handleChange} className="message-input-text" type="text"
                    placeholder="Message" size="sm"/>
                <Button onClick={this.handleSubmit} type="submit" className="message-input-button" size="sm">
                    {isEditing ? 'Edit' : 'Send'}
                </Button>
            </div>
        )
    }
}
