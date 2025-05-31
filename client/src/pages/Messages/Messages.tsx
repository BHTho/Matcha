import styles from './Messages.module.css';
import backIcon from '../../assets/back-button.svg';
import { useState } from 'react';
import { ChatLog, Message, ContactPreview } from '../../types/chat';
import { dummyContacts, pers0ChatLog, pers1ChatLog } from '../../data/dummyChatData';
import MsgThumbnail from '../../components/MsgThumbnail/MsgThumbnail';

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
                {dummyContacts.map((contact, index) => (
                    <MsgThumbnail key={index} userData={contact}></MsgThumbnail>
                ))}
            </div>
            <div className={styles[chatVisibility]}>
                <div className={styles.ChatHistory}>full chat here</div>
                <div className={styles.ChatInput}>Chat Input here</div>
            </div>
        </div>
    )
}

export default MessagePage;