import './Login.scss';
import logo from '../../Assets/mainlogo.svg';
import loginimg from '../../Assets/loginbackgroundimg.svg';


const Login = () => {

  return (
    <div className='loginContainer'>

        <section className='loginsect1'>
            <img src={logo} alt="logo" />
            <div>
                <img className='bckgrndimg' src={loginimg} alt="loginimg" />
            </div>
        </section>
        
        <section className='loginsect2'>
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
            <form action="">
                <input type="email" name="email" placeholder='Email' id='email' />
                <input type="password" name="password" placeholder='Password' id='password' />
                <span className='forgotpassword'>Forgot Password?</span>
                <button type="submit">Log in</button>
            </form>
        </section>
        
    </div>
  )
}

export default Login