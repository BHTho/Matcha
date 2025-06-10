import styles from './Profile.module.css';

function Profile() {
    console.log('Profile page loaded');
    return (
        <div className={styles.ProfilePage}>
            Profile Page
        </div>
    )
}

export default Profile;