import { Link } from 'react-router-dom';
import { profilePic } from '../../assets';
import style from './Navbar.module.css';
const Navbar=()=>{
    return(
        <div className={`${style.navbar} pb-4 pt-4`}>
            <h2 className='text-4xl'>
                <Link to="/">
                     SocialAlley
                </Link>
            </h2>
            <span className={`${style["avatar-container"]}`}>
                <img src={profilePic} alt="" className={`${style.avatar} rounded-full`} />
            </span>
        </div>
    )
}
export {Navbar}