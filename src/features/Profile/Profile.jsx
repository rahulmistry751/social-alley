import { Sidebar, Suggestions } from "../../components"
import { SinglePost } from "../Home"
import { ProfileCard } from "./components/ProfileCard"

const Profile=()=>{
    return (
        <div className="cols">
            <Sidebar/>
        <div className="profile-container flex flex-col gap-4">
            <ProfileCard/>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
        </div>
        <Suggestions/>
        </div>
    )
}
export {Profile}