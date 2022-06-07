import lifeCoach from '../images/LifeCoach.jpg';
export function CoachSignUp() {
    return (
        <div className="sign-up-form">
            <div className="coach-user-form">
                <div >
                    <img src={lifeCoach} height="100" alt="lifeCoach profile"/>
                    <span className="signUpTitle">Life Coach Profile</span>
                </div>

                <form >
                        <div className="coach-user-row">
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

                    <div className="coach-user-row">
                        <div>
                            <label htmlFor="dateOfBirth">Date Of Birth</label>
                            <br />
                            <input type="date" name="dateOfBirth" id="dateOfBirth" className="dobField"/>

                        </div>

                        <div className="genderField">
                            <label htmlFor="gender">Gender</label>
                            <br />
                            <input type="radio" name="gender" id="male" value="Male" />
                            <label htmlFor="male"> Male</label><span> </span>
                            <input type="radio" name="gender" id="female" value="Female" />
                            <label htmlFor="female"> Female</label>
                        </div>
                    </div>

                    <div className="coach-user-row">
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
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-success">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

