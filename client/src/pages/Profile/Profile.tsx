import styles from './Profile.module.css';
import PageParentDiv from '../../components/PageParentDiv/PageParentDiv';
import dummyUser from '../../data/profileData/';
import ProfileImgStack from '../../components/ProfileImgStack/ProfileImgStack';


function Profile() {
    return (
        <PageParentDiv>
            <div className={styles.ProfileParent}>
                <ProfileImgStack userData={dummyUser}/>
                <div className={styles[dummyUser.status]}></div>
                <div className={styles.ProfileTags}>
                    {dummyUser.tags.map((tag: string) => {
                        return tag + " ";
                    })}
                </div>
            </div>
        </PageParentDiv>
    )
}

export default Profile;