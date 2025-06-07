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
    sexuality: "Straight",
    gender: "Male",
    accntCoords: ["48.8575", "2.3514"], // Paris Coords
    city: "Paris",
    status: "online",
}

export default dummyUser;