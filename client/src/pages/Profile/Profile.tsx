import styles from './Profile.module.css';
import PageParentDiv from '../../components/PageParentDiv/PageParentDiv';

interface UserProfile {
    id: string,
    username: string,
    email: string,
    bio: string,
    tags: string[],
    sexuality: string, // straight, gay, bi
    gender: string, // male, female, other
    accntCoords: string[], // GPS coordinates (not live)
    city: string,
}

const dummyUser : UserProfile = {
    id: "1",
    username: "dingus",
    email: "dingus@42.fr",
    bio: "Howdy there I'm Dingus. I love C++ and I can't talk to women.",
    tags: ["#linux","#dev","#IloveLinusTorvalds","#IuseArchBTW"],
    sexuality: "straight",
    gender: "male",
    accntCoords: ["48.8575", "2.3514"], // Paris Coords
    city: "Paris",
}

function Profile() {
    return (
        <PageParentDiv>
            <div className={styles.ProfileParent}>
                <div className={styles.ProfileHeader}>
                    <img className={styles.ProfileAvatar} src="default_avatar.svg" alt="default_avatar" />
                    <h1 className={styles.ProfileName}>Dingus McGee</h1>
                    <h1 className={styles.ProfileCity}>{dummyUser.city}</h1>
                </div>
                <div className={styles.ProfileBio}>
                    {dummyUser.bio}
                </div>
                <div className={styles.ProfileTags}>
                    {dummyUser.tags.map((tag) => {
                        return tag + " ";
                    })}
                </div>
            </div>
        </PageParentDiv>
    )
}

export default Profile;