import { Sidebar,Suggestions } from "../../components"
import { SinglePost } from "../Home/components/SinglePost"

const Bookmarks=()=>{
    return(
        <div className="cols">
        <Sidebar/>
        <div className="bookmarks-container">
            <div className="bookmark-heading text-xl font-semibold py-4">
                Bookmarks
            </div>
            <div className="bookmarks flex flex-col gap-4">
                <SinglePost/>
                <SinglePost/>
            </div>
        </div>
        <Suggestions/>
        </div>
    )
}
export {Bookmarks}