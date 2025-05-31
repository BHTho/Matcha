import styles from './MsgThumbnail.module.css';
import { ContactPreview } from '../../types/chat';

interface MsgThumbnailProps {
    userData: ContactPreview
}

const MsgThumbnail: React.FC<MsgThumbnailProps> = ({ userData }) => {
    return (
        <div className={styles.InnerThumbnail}>
            <div className={styles.thumbnailName}>{userData.name}</div>
            <div className={styles.thumbnailMsg}>{userData.lastMessage}</div>
        </div>
    )
};

export default MsgThumbnail;