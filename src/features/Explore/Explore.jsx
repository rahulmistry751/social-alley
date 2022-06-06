import { SinglePost } from "../Home/components/SinglePost";
const Explore=()=>{
    return(
        <div className="explore-container">
           <div className="explore-heading text-xl font-semibold py-4">
                Explore
            </div>
            <div className="explore-content flex flex-col gap-4">
                <SinglePost/>
                <SinglePost/>
            </div>
        </div>
    )
}
export {Explore};