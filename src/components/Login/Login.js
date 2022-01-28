import Logo from './../../images/Dhokh.png'
import './Login.css'
import google from '../../images/icons/google.png'
import login from '../../images/login.svg'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    const handelGoogleSingIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email}  = result.user;
                const singInUser = {name: displayName, email: email}
                setLoggedInUser(singInUser);
                history.replace(from);
            })
        console.log("click Sing In Button");
    }
    return (       
        <section className='container footerContainer'>
            <div class="row">
                <div className="col-md-6">
                    <div className="login">
                        <div className="logo mt-5">
                            <h1 class="d-flex justify-content-center" href="#">
                                <img className='LogingLogo' src={Logo} alt="" />
                            </h1>
                        </div>
                        <h5 class="d-flex justify-content-center mt-5"><b>Login With</b></h5>
                        <div className="loginBtn mt-3">
                            <button onClick={handelGoogleSingIn} className="SingInBtn" href=""> <img className="googleIcon" src={google} alt="" /> Continu With Login</button>
                        </div>
                        <small class="d-flex justify-content-center mt-5">Don't Have A Acount?<a href="">Create An Acount</a></small>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="loginImg" src={login} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Login;