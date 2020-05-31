import * as React from 'react';
import Signup from '../../static/images/signup.png';
import Password from '../../static/images/password.png'
import InputText from '../../components/inputtext';
import ButtonText from '../../components/buttontext';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <div className="login-page">
                <div className="col-md-6 offset-md-3">
                    <div className="form-box">
                        <div className="page-name">
                            <h4>Login</h4>
                        </div>
                        <div className="page-content">
                            <form>
                                <div className="forgot-password">
                                    <Link to="/passwordresetone">Forgot Password</Link>
                                </div>
                                <InputText
                                    label="Enter your email to get started."
                                    type="email"
                                    placeholder="email address"
                                    image={Signup}
                                    errorMessages="Email must be present."
                                    className="active"
                                />

                                <InputText
                                    label="Choose a password with at least 8 characters."
                                    type="password"
                                    placeholder="password"
                                    image={Password}
                                />

                                <ButtonText
                                    label="Continue"
                                    link="/appointments"
                                />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;