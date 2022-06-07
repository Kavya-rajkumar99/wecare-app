import lifeCoach from '../images/LifeCoach.jpg';
import user from '../images/User.jpg'
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <>
            <div className="user-coach">
                <h2 className="text-center">We are at the heart of appropriate care</h2>
                <div className="cards">
                    <div className="coachCard">
                        <img src={lifeCoach} className="coachImage" alt="life coach profile"/>
                        <div className="coachCardBody">
                            <Link to="/coachlogin" className="btn btn-success">Login as a Coach</Link>
                            <Link to="/coachsignup" className="btn btn-success">Join as a Coach</Link>
                        </div>
                    </div>

                    <div className="userCard">
                        <img src={user} className="userImage" alt="user profile"/>
                        <div className="userCardBody">
                            <Link to="/userlogin" className="btn btn-success ">Login as a User</Link>
                            <Link to="/usersignup" className="btn btn-success">Join as a User</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}