import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottieData from "../../assets/lottie/register.json"
import AuthContext from '../../context/AuthContext/AuthContext';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold my-5">Register now!</h1>
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;