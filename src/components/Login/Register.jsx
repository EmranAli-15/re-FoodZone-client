import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const { creteUser, updateUser, user } = useContext(AuthContext);
    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        creteUser(email, password)
            .then(result => {
                const signUp = result.user;
                console.log(signUp);
                handleUser(result.user, name, photo);
            })
            .catch(error => {
                console.log(error.message);
            })
        const handleUser = (user, name, photo) => {
            updateUser(user, name, photo)
                .then(result => { const updatedUser = result.user; console.log(updatedUser) })
                .catch(error => {
                    console.log(error.message);
                })
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <form onSubmit={handleCreateUser} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <p>already have an account <Link to="/login"><button className="btn btn-link">Login</button></Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;