import style from '../Profile.module.css';
import { profilePic } from '../../../assets';
const ProfileCard=()=>{
    return (
        <div className={`${style["profile-card-container"]} w-10/12 p-4 m-auto bg-backgroundBase rounded-md`}>
            <div className="profile-card flex flex-col justify-center">
                <div className="profile-pic-container w-32 mx-auto my-3">
                    <img src={profilePic} alt="profile pic" className="profile-pic rounded-full " />
                </div>
                <div className="edit-profile text-center ">
                    <button className='hover:bg-background py-2 px-3 rounded-md'>Edit profile</button>
                </div>
                <div className="fullname text-center my-1">
                    Rahul Mistry
                </div>
                <div className="username text-center my-2 font-bold">
                     @rahulmistry751
                </div>
                <div className="user-bio-container text-center">
                    <div className="user-bio">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed at cumque ex.
                    </div>
                </div>
                <div className="user-following-follower flex justify-evenly my-4">
                    <div className='followers flex flex-col text-center'>
                        <span className="follower-count">
                            2.5k
                        </span>
                        <span className="follower-heading ">
                            Followers
                        </span>
                    </div>
                    <div className='posts flex flex-col  text-center'>
                    <span className="post-count">
                            2.5k
                        </span>
                        <span className="follower-heading">
                            Followers
                        </span>
                    </div>
                    <div className='following flex flex-col text-center'>
                    <span className="following-count">
                            2.5k
                        </span>
                        <span className="follower-heading">
                            Followers
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {ProfileCard};