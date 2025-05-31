import styles from './MsgBubble.module.css';
import { Message } from '../../types/chat';
import { formatTimestamp } from '../../utils/formatTimestamp';

interface MsgBubbleProps {
    msg: Message;
}

const MsgBubble: React.FC<MsgBubbleProps> = ({ msg }) => {
    return (
        <div className={styles.MsgBubble}>
            <div className={styles.MsgHeader}>
                <div className={styles.MsgSenderName}>
                    {msg.sender}
                </div>
                <div className={styles.MsgTimestamp}>
                    {formatTimestamp(msg.timestamp)}
                </div>
            </div>
            <div className={styles.MsgContent}>
                {msg.text}
            </div>
        </div>
    )
};

export default MsgBubble;