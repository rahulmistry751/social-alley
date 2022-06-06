import { UserSuggestion } from "./components/UserSuggestion";
import style from './Suggestions.module.css';
const Suggestions=()=>{
    return(
        <div className="suggestions-container ">
            <div className="suggestions-subcontainer  p-4 ">
            <div className="suggestion-heading mb-4 p-1 ">
                Suggestions for you
            </div>
            <div className={`${style["suggestions"]}`}>
                <UserSuggestion/>
                <UserSuggestion/>
                <UserSuggestion/>
            </div>
            </div>
        </div>
    )
}
export {Suggestions}