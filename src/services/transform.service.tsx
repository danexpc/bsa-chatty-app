import {IMessage} from "../interfaces/message";

class TransformService {
    transform(message: IMessage): IMessage {
        return {
            id: message.id,
            userId: message.userId,
            avatar: message.avatar,
            user: message.user,
            text: message.text,
            createdAt: new Date(message.createdAt),
            editedAt: message.editedAt ? new Date(message.editedAt) : undefined,
            liked: false
        }

    }

    transformAll(messages: IMessage[]): IMessage[] {
        return messages.map(message => this.transform(message))
    }
}

export const transformService = new TransformService();
