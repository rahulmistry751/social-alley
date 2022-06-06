import style from './Home.module.css';
import { NewPost } from './components/NewPost';
import { SinglePost } from './components/SinglePost';

const Home=()=>{
    return(
        <div className={`${style["home-container"]}`}>
            <NewPost/>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
        </div>
    )
}
export {Home};