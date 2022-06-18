import style from '../Home.module.css';
import { profilePic } from '../../../assets';

const SinglePost=()=>{
    return (
        <div className={`${style['singlepost-container']} bg-backgroundBase w-10/12 p-4 m-auto rounded-md`}>
            <div className={`${style["avatar-container"]} mr-4`}>
                    <img src={profilePic} alt="" className={`${style.avatar} rounded-full`} />
                </div>
            <div className="user-details">
                <h3>Rahul Mistry</h3>
                <small>@rahulmistry7</small>
            </div>
            <span className={`${style["post-option"]}`}>
            <i className="fas fa-ellipsis-v"></i>
            </span>
            <div className={`${style["post-content"]}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo reprehenderit animi ut? In, maxime quod distinctio odit veritatis similique totam accusamus vero quasi doloribus quas debitis consectetur nihil sit fuga dolorum numquam assumenda consequatur est magnam ut vitae minima deserunt quibusdam. Laudantium earum ex provident.
            </div>
            <hr/>
            <div className={`${style.actions} w-full mt-4`}>
                    <div className={`${style["secondary-actions"]}`}>
                        <span className="like">
                            <i className="fas fa-heart"></i>
                        </span>
                        <span className="bookmark">
                            <i className="fas fa-bookmark"></i>
                        </span>
                        <span className="comment">
                            <i className="fas fa-comment"></i>
                        </span>
                    </div>
                </div>
        </div>
    )
}
export {SinglePost};