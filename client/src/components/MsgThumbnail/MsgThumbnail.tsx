import styles from '../../pages/Messages/Messages.module.css';
import { ContactPreview } from '../../types/chat';

interface MsgThumbnailProps {
    userData: ContactPreview
}

const MsgThumbnail: React.FC<MsgThumbnailProps> = ({ userData }) => {
    return (
        <div className={styles.Thumbnail}>
            <div className={styles.thumbnailName}>{userData.name}</div>
            <div className={styles.thumbnailMsg}>{userData.lastMessage}</div>
        </div>
    )
};

export default MsgThumbnail;