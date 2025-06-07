import styles from './ProfileImgStack.module.css';
import { UserProfile, dummyUser } from '../../data/profileData';


interface ProfileImgStackProps {    
    userData: UserProfile
};

const ProfileImgStack: React.FC<ProfileImgStackProps> = ({ userData }) => {
    return (
        <div>
            {userData.firstName}
        </div>
    )
}

export default ProfileImgStack;