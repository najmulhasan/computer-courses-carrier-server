import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import logo from '../../src/images/logos.jpg'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log('context', user);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error());
    }


    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost text-xl">Computer Courses Carrier</Link>
                <div className='profile-logo'><img height={35} width={35} src={logo} alt="" /></div>

                <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost text-xl" to='/courses'>Courses</Link>
                <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>

                {user?.email && <span>Welcome, {user.email}</span>}
                {
                    user?.email ?
                        <button onClick={handleSignOut} className="btn btn-sm">Log out</button>
                        : <Link to='/login'>
                            <button className="btn btn-sm">Log in</button>
                        </Link>

                }
                <br />

                <input type="checkbox" value="synthwave" className="toggle theme-controller" />


            </div>


        </div>
    );
};

export default Header;