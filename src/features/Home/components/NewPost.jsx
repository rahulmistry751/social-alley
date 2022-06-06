import { profilePic } from '../../../assets';
import style from '../Home.module.css';

const NewPost=()=>{
    return(
        <div className={`${style['create-post']} w-10/12 p-4 m-auto bg-backgroundBase rounded-md`}>
                <div className={`${style["avatar-container"]} mr-4`}>
                    <img src={profilePic} alt="" className={`${style.avatar} rounded-full`} />
                </div>
                <div className="input-container h-32 grow">
                    <textarea type="text" required className="post-input w-full resize-none h-32 outline-none "></textarea>
                </div>
                <hr/>
                <div className={`${style.actions} w-full`}>
                    <div className={`${style["secondary-actions"]}`}>
                        <span className="insert-img">
                            <i className="fas fa-image"></i>
                        </span>
                        <span className="emojis">
                            <i className="fas fa-smile"></i>
                        </span>
                    </div>
                    <div className="primary-action">
                        <button type="submit" className='bg-primary rounded-full py-1 hover:bg-primaryAccent px-4'>Post</button>
                    </div>
                </div>
            </div>
    )
}
export {NewPost}