import style from '../Suggestions.module.css';

const UserSuggestion=()=>{
    return(
        <div className={`${style["single-suggestion-container"]} bg-backgroundBase p-4 rounded-md`}>
            <div className={`${style["avatar-container"]} mr-4`}>
                <img src="" alt="" className={`${style.avatar} rounded-full`} />
            </div>
            <div className="user-details">
                <h3>Bryant Colon</h3>
                <small>@bryntcolon</small>
            </div>
            <div className="primary-action ml-auto">
                <button className='rounded-full p-2 bg-primary hover:bg-primaryAccent'>
                <i className="fas fa-plus mr-2"></i>
                    Follow</button>
            </div>
        </div>
    )
}
export {UserSuggestion};