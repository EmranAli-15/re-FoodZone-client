import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const { creteUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        setError('');

        if (password.length < 6) {
            return setError('Password must at least 6 digit');
        }
        else {
            creteUser(email, password)
                .then(result => {
                    updateUser(result.user, name, photo)
                        .then(result => { })
                        .catch(error => {
                            setError(error.message);
                        })
                    form.reset();
                })
                .catch(error => {
                    const errorMsg = error.message
                    setError(errorMsg);
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
                            <p className='text-red-500'>{error}</p>
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