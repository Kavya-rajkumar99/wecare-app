import react from "react";
export function UserLogin() {
    return (
        <>
            <div className="LoginForm">
                <div className="user-login">
                    <h2 className="text-center">Login As User</h2>
                    <form className="UserLoginForm">
                        <input type="text" placeholder="User Id" />
                        <input type="password" placeholder="Password" />
                        <button type="submit" className="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}
