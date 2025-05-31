import styles from './Messages.module.css';
import backIcon from '../../assets/back-button.svg';
import { useState } from 'react';
import { ChatLog, Message, ContactPreview } from '../../types/chat';
import { dummyChatLogs, dummyContacts, pers0ChatLog, pers1ChatLog } from '../../data/dummyChatData';
import MsgThumbnail from '../../components/MsgThumbnail/MsgThumbnail';
import ChatHistory from '../../components/ChatHistory/ChatHistory';

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
                <ChatHistory log={dummyChatLogs[0]}></ChatHistory>
                <div className={styles.ChatFooter}>
                    <input type="text" name="chatInput" className={styles.ChatInput} />
                </div>
            </div>
        </div>
    )
}

export default MessagePage;