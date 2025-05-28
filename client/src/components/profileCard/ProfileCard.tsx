import styles from './ProfileCard.module.css';

// I'll need to edit this to pull the imgPath from user profile
// once the backend is built up
interface ProfileCardProps {
    imgPath: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imgPath }) => {
    return (
        <div className={styles.profileCard}>
            <div className={styles.imageWrapper}>
                <img className={styles.profileImg} src={imgPath} alt="profilePic" draggable="false"/>
                <div className={styles.cardFooter}>
                    <div className={styles.profileHeader}>
                        <div className={styles.profileName}>
                            Bazza
                        </div>
                        <div className={styles.porfileAge}>
                            47
                        </div>
                    </div>
                    <div className={styles.profileDetails}>
                        blah blah blah insert generic dating site description.
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;