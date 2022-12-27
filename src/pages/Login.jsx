import React from 'react'

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Lama Chat</span>
                <span className="title">Register</span>
                <form>
                <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <button >Sign in</button>
                </form>
                <p>
                    You do have an account? Register
                </p>
            </div>
        </div>
    )
}

export default Login