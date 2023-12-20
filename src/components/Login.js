import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <section id="login">
            <h2>Login</h2>
            <form>
                <label className="login" htmlFor="username">Username:</label>
                <input id="username" name="username" type="text" aria-label="Username" />
                <label className="login" htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" aria-label="Password" />
                <input type="submit" aria-label="Login" value="Login" />
                <p style={{ fontSize: ".9rem" }}>
                    <Link>Forgot Password?</Link>
                    <br />
                    <Link>Create Account</Link>
                </p>
            </form>

        </section>
    )
}