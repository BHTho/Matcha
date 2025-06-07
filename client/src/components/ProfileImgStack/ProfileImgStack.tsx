import styles from './ProfileImgStack.module.css';
import { UserProfile, dummyUser } from '../../data/profileData';
import { use } from 'react';


interface ProfileImgStackProps {    
    userData: UserProfile
};

const ProfileImgStack: React.FC<ProfileImgStackProps> = ({ userData }) => {
    return (
        <div className={styles.ImageStackParent}>
            <img className={styles.StackImg} src={`/api/images/user_${userData.id}/${userData.id}_0.jpg`} alt="" />
        </div>
    )
}

export default ProfileImgStack;