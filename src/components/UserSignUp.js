import user from '../images/User.jpg';
export function UserSignUp() {
    return (
        <div className="userSignUpForm">
            <div className="userForm">
                <div className="userFormHeader">
                    <img src={user} height="100" alt="user profile" />
                    <span className="signUpTitle">User Profile</span>
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

                    <div className="formRow">
                        <div>
                            <label htmlFor="mobileNo">Name</label>
                            <br />
                            <input type="tel" name="mobileNo" id="mobileNo" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <br />
                            <input type="email" name="email" id="email" />
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
                            <label htmlFor="pincode">Pincode</label>
                            <br />
                            <input type="number" name="pincode" id="pincode" />

                        </div>
                        <div>
                            <label htmlFor="city">City</label>
                            <br />
                            <input type="text" name="city" id="city" />

                        </div>
                    </div>
                    <div className="formRow">
                        <div>
                            <label htmlFor="state">State</label>
                            <br />
                            <input type="text" name="state" id="state" />

                        </div>
                        <div>
                            <label htmlFor="country">Country</label>
                            <br />
                            <input type="text" name="country" id="country" />

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

