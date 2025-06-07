import styles from './ProfileImgStack.module.css';
import { UserProfile, dummyUser } from '../../data/profileData';
import { use } from 'react';


interface ProfileImgStackProps {    
    userData: UserProfile
};

const ProfileImgStack: React.FC<ProfileImgStackProps> = ({ userData }) => {
    // replace this with an API call
    const images = import.meta.glob('/src/data/dummy_photos/user_1/*.{png,jpg,jpeg}', {eager: true});
    const imageList = Object.values(images).map((image, index) => (
        <img key={index} src={image.default} alt="profile_image" className={styles.StackImg}/>
    ));

    return (
        <div className={styles.ImageStackParent}>
            {imageList}
        </div>
    )
}

export default ProfileImgStack;