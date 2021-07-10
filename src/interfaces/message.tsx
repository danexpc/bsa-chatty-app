export interface IMessage {
    id: string,
    userId: string,
    avatar: string,
    user: string,
    text: string,
    createdAt: string,
    editedAt?: string
}
