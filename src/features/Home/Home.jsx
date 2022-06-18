import style from './Home.module.css';
import { NewPost } from './components/NewPost';
import { SinglePost } from './components/SinglePost';
import { Sidebar,Suggestions } from '../../components';
const Home=()=>{
    return(
        <div className='cols'>
        <Sidebar/>
        <div className={`${style["home-container"]}`}>
            <NewPost/>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
        </div>
        <Suggestions/>

        </div>
    )
}
export {Home};