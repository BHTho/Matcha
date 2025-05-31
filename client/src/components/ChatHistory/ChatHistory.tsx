import styles from './ChatHistory.module.css';
import { Message, ChatLog } from '../../types/chat';
import MsgBubble  from '../MsgBubble/MsgBubble';

// need to add in some logic for putting self messages on right

interface ChatHistoryProps {
    log: ChatLog;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ log }) => {
    return (
        <div className={styles.ChatHistory}>
            {log.chatHistory.map((message, index) => (
                <MsgBubble key={index} msg={message}></MsgBubble>
            ))}
        </div>
    )
};

export default ChatHistory;