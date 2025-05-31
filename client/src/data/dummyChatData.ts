import { ContactPreview, Message, ChatLog } from '../types/chat';

export const dummyContacts : ContactPreview[] = [
    {id: "0", name: "person0", lastMessage: "message0"},
    {id: "1", name: "person1", lastMessage: "message1"},
];

export const pers0ChatLog: Message[] = [
    {sender: "2", text: "I'm trying out a really long message here to see how the bubble reacts to long strings of text. Hopefully it increases the height gracefully but I'm not sure. Only time will tell.........................................", timestamp: 1519211109200},
    {sender: "0", text: "howdy", timestamp: 1519211809934},
    {sender: "2", text: "message0", timestamp: 1519211809935},
]

export const pers1ChatLog: Message[] = [
    {sender: "2", text: "hello", timestamp: 1519211809934},
    {sender: "1", text: "message1", timestamp: 1519211809937},
]

export const dummyChatLogs: ChatLog[] = [
    {id: "0", chatHistory: pers0ChatLog},
    {id: "1", chatHistory: pers1ChatLog},
]