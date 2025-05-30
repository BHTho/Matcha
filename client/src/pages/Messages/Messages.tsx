import styles from './Messages.module.css';
import backIcon from '../../assets/back-button.svg';
import { useState } from 'react';

/*
To do:
    leave format unchanged on large desktop screen.
    On small/mobile screen have it so that thumbnail takes up 100% of screen
    When tumbnail clicked, full chat takes up 100% of screen.
    back button (only real on small screen) makes thumbail take up full screen
*/

function MessagePage() {
    const [chatVisibility, setChatVisibility] = useState("hideChat");
    const [thumbsVisibility, setThumbsVisibility] = useState("showThumbs");
    const [buttonVisibility, setButtonVisibility] = useState("hideButton");

    const changeStyle = () => {
        if (chatVisibility === "hideChat") {
            setThumbsVisibility("hideThumbs");
            setChatVisibility("showChat");
            setButtonVisibility("showButton");
        } else {
            setThumbsVisibility("showThumbs");
            setChatVisibility("hideChat");
            setButtonVisibility("hideButton");
        }
    };

    return (
        <div className={styles.MessagePage}>
            <img
                className={styles[buttonVisibility]}
                src={backIcon}
                alt="backBtn"
                onClick={changeStyle}
            />
            <div 
                className={styles[thumbsVisibility]}
                onClick={changeStyle}
            >
                <div className={styles.Thumbnail}>Example Thumbnail</div>
            </div>
            <div className={styles[chatVisibility]}>
                <div className={styles.ChatHistory}>full chat here</div>
                <div className={styles.ChatInput}>Chat Input here</div>
            </div>
        </div>
    )
}

export default MessagePage;