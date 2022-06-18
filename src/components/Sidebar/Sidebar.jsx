import { NavLink } from "react-router-dom";
import style from './Sidebar.module.css';
const getActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? '800' : '500',
  });
const Sidebar=()=>{
    return (
        <div className={`${style["sidebar-container"]}`}>
            <div className={`${style["sidebar-menu"]} text-xl`}>
                <NavLink to="/" className={`${style['menu-option']} `} style={getActiveStyle}>
                <i className="fas fa-home mr-4"></i>Home
                </NavLink>
                <NavLink to="/explore" className={`${style['menu-option']}`} style={getActiveStyle}>
                <i className="fas fa-compass mr-4"></i>Explore
                </NavLink>
                <NavLink to="/bookmarks" className={`${style['menu-option']}`} style={getActiveStyle}>
                <i className="fas fa-bookmark mr-4"></i> Bookmarks
                </NavLink>
                <button className="bg-primary my-4 rounded-full py-1 hover:bg-primaryAccent">
                    Post
                </button>
            </div>
        </div>
    )
}
export {Sidebar};