import { SinglePost } from "../Home/components/SinglePost";
import { Sidebar, Suggestions } from "../../components";
const Explore=()=>{
    return(
        <div className="cols">
        <Sidebar/>
        <div className="explore-container">
           <div className="explore-heading text-xl font-semibold py-4">
                Explore
            </div>
            <div className="explore-content flex flex-col gap-4">
                <SinglePost/>
                <SinglePost/>
            </div>
        </div>
        <Suggestions/>
        </div>
    )
}
export {Explore};