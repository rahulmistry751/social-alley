import {Link} from 'react-router-dom';
import { authHero } from '../../../assets';
const Signup=()=>{
    return (
        <div className="signup-page flex flex-col justify-center h-screen">
            <div className="center-card  grid grid-cols-2">
            <section className="hero-section">
                <img src={authHero} alt="" className="hero-img" />
            </section>
            <section className="signup-container flex flex-col justify-center">
                <div className="signup-form w-6/12 m-auto">
                    <h3 className="text-2xl text-center">Signup</h3>
                    <form className="form flex flex-col ">
                    <label htmlFor="user-firstname" className="py-2">First name</label>
                        <input type="email" className="email rounded-sm py-2 px-1" id="user-firstname" />
                        <label htmlFor="user-lastname" className="py-2">Last name</label>
                        <input type="email" className="email rounded-sm py-2 px-1" id="user-lastname" />
                        <label htmlFor="user-email-id" className="py-2">Email</label>
                        <input type="email" className="email rounded-sm py-2 px-1" id="user-email-id" />
                        <label htmlFor="user-password" className="py-2">Password</label>
                        <input type="email" className="password rounded-sm py-2 px-1" id="user-password" />
                        <button className="submit-btn p-2 my-3 bg-primary hover:bg-primaryAccent rounded-sm">Login</button>
                    </form>
                <div className="secondary-action text-center">
                    <span className="login-link">
                        Already have an account? 
                        <Link to="/login">Login</Link>
                    </span>
                </div>
                </div>
            </section>
            </div>
        </div>
    )
}
export {Signup}