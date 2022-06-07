import react from "react";

export function CoachLogin() {
    return (
        <>
            <div className="LoginForm">
                <div className="coach-login">
                    <h2 className="text-center">Login As Life Coach</h2>
                    <form className="CoachLoginForm">
                        <input type="text" placeholder="Coach Id" />
                        <input type="password" placeholder="Password" />
                        <button type="submit" className="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}