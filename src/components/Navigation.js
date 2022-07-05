import logo from '../images/logo.svg';
import arrowUp from '../images/icon-arrow-up.svg';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul type="none" className='nav-links'>
                <img src={logo} alt="logo" className='logo'></img>
                <li className='links'><span>Features</span> <img src={arrowUp} alt="logo"></img></li>
                <li className='links'><span>Company</span><img src={arrowUp} alt="logo"></img></li>
                <li className='links'>Careers</li>
                <li className='links'>About</li>
            </ul>
            <ul type="none" className='login'>
                <li>Login</li>
                <button className='register'>Register</button>
            </ul>
        </nav>
    );
}

export default Navigation;