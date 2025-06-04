import styles from './Profile.module.css';
import PageParentDiv from '../../components/PageParentDiv/PageParentDiv';

interface UserProfile {
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    bio: string,
    tags: string[],
    sexuality: string, // straight, gay, bi
    gender: string, // male, female, other
    accntCoords: string[], // GPS coordinates (not live)
    city: string,
    status: string, // online, offline
}

const dummyUser : UserProfile = {
    id: "1",
    username: "ElonLover123",
    firstName: "Dingus",
    lastName: "McGee",
    email: "dingus@42.fr",
    bio: "Howdy there I'm Dingus. I love C++ and I can't talk to women.",
    tags: ["#linux","#dev","#IloveLinusTorvalds","#IuseArchBTW"],
    sexuality: "straight",
    gender: "male",
    accntCoords: ["48.8575", "2.3514"], // Paris Coords
    city: "Paris",
    status: "online",
}

function Profile() {
    return (
        <PageParentDiv>
            <div className={styles.ProfileParent}>
                <div className={styles.ProfileHeader}>
                    <img className={styles.ProfileAvatar} src="default_avatar.svg" alt="default_avatar" />
                    <div className={styles.ProfileNameParent}>
                        <h1 className={styles.ProfileName}>{dummyUser.firstName} | {dummyUser.city}</h1>
                        <div className={styles[dummyUser.status]}></div>
                    </div>
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