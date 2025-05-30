import styles from './Messages.module.css';
import backIcon from '../../assets/back-button.svg';

/*
To do:
    leave format unchanged on large desktop screen.
    On small/mobile screen have it so that thumbnail takes up 100% of screen
    When tumbnail clicked, full chat takes up 100% of screen.
    back button (only real on small screen) makes thumbail take up full screen
*/

function MessagePage() {
    return (
        <div className={styles.MessagePage}>
            <img className={styles.BackButton} src={backIcon} alt="backBtn" />
            <div className={styles.MessageThumbnails}>
                <div className={styles.Thumbnail}>Example Thumbnail</div>
            </div>
            <div className={styles.ChatWindow}>full chats here</div>
            <div className={styles.ChatInput}>Chat Input here</div>
        </div>
    )
}

export default MessagePage;