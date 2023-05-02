import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="navbar bg-base-400 shadow-xl sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <img src="https://i.ibb.co/Lr95pVf/chef-1.jpg" alt="" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Food Zone</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-x-6">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    {
                        user && <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                    }
                </label>
                {
                    user ? <button onClick={handleLogOut} className="btn btn-xs">LogOut</button> :
                        <button className="btn btn-xs"><Link to="/login">Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Header;