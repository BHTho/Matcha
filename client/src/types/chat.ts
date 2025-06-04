export interface Message {
    sender: string;
    text: string;
    timestamp: number;
};

export interface ContactPreview {
    // need to add pfp path here
    id: string;
    name: string;
    lastMessage: string;
};

export interface ChatLog {
    id: string;
    chatHistory: Message[];
};
