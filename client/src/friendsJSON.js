import markImage from './imgs/logo.png';
import alexImage from './imgs/logo.png';

const friends = [
    {
        friendId: 1, friendStatus: true, userImage: markImage, userName: 'Mark', chat: [
            { message: 'message1', sender: 'Mark', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Mark', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Mark', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Mark', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Mark', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Mark', timeStamp: '12:22', messageStatus: { sent: true, read: false } },
        ]
    },
    {
        friendId: 2, friendStatus: true, userImage: alexImage, userName: 'Alex', chat: [
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Alex', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Alex', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Alex', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Alex', timeStamp: '12:22', messageStatus: { sent: true, read: false } },
        ]
    }, {
        friendId: 3, friendStatus: true, userImage: markImage, userName: 'john', chat: [
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'John', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'John', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'John', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'John', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: false } },
        ]
    }, {
        friendId: 4, friendStatus: true, userImage: markImage, userName: 'Scott', chat: [
            { message: 'message1', sender: 'Scott', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Scott', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Scott', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: false } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: false } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: false } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: false } },
        ]
    }, {
        friendId: 5, friendStatus: true, userImage: markImage, userName: 'Sara', chat: [
            { message: 'message1', sender: 'Sara', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Sara', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Sara', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Sara', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Sara', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Sara', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: false } },
        ]
    }, {
        friendId: 6, friendStatus: true, userImage: markImage, userName: 'Mike', chat: [
            { message: 'message1', sender: 'Mike', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Mike', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Mike', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Mike', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Mike', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'Mike', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: true } },
            { message: 'message1', sender: 'you', timeStamp: '12:22', messageStatus: { sent: true, read: false } },
        ]
    }
]

export default friends;