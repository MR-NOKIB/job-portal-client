import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import singInLottieData from "../../assets/lottie/login.json"
import AuthContext from '../../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../Shared/SocialLogin/GoogleLogin';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from, {replace: true})
            })
            .catch(err => {
                console.error(err);
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <Lottie animationData={singInLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="text-5xl font-bold my-5">Sign In Now!</h1>
                        <fieldset className="fieldset">
                            <label className="fieldset-label">
                                Email
                            </label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="fieldset-label">
                                Password
                            </label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>
                            <button className="btn btn-neutral mt-4">Sign In</button>
                        </fieldset>
                        <GoogleLogin></GoogleLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;