import react from "react";
import lifeCoach from '../images/LifeCoach.jpg';
export function CoachSignUp() {
    return (
        <div className="coachSignUpForm">
            <div className="coachForm">
                <div className="coachFormHeader">
                    <img src={lifeCoach} height="100" />
                    <span className="signUpTitle">Life Coach Profile</span>
                </div>

                <form className="signupForm">

                    <div className="formRow">
                        <div>
                            <label htmlFor="name">Name</label>
                            <br />
                            <input type="text" name="name" id="name" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input type="password" name="password" id="password" />
                        </div>
                    </div>

                    <div className="form-Row">
                        <div>
                            <label htmlFor="dateOfBirth">Date Of Birth</label>
                            <br />
                            <input type="date" name="dateOfBirth" id="dateOfBirth" />

                        </div>

                        <div>
                            <label htmlFor="gender">Gender</label>
                            <br />
                            <input type="radio" name="gender" id="male" value="Male" />
                            <label htmlFor="male"> Male</label><span> </span>
                            <input type="radio" name="gender" id="female" value="Female" />
                            <label htmlFor="female"> Female</label>
                        </div>
                    </div>

                    <div className="formRow">
                        <div>
                            <label htmlFor="mobileNo">Mobile Number</label>
                            <br />
                            <input type="tel" name="mobileNo" id="mobileNo" />

                        </div>
                        <div>
                            <label htmlFor="speciality">Speciality</label>
                            <br />
                            <input type="text" name="speciality" id="speciality" />

                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <button type="submit" className="btn btn-success">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

