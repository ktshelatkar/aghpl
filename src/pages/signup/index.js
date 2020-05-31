import * as React from 'react';
import Signup from '../../static/images/signup.png';
import Name from '../../static/images/name.png'
import Password from '../../static/images/password.png'
import InputText from '../../components/inputtext';
import ButtonText from '../../components/buttontext';

class SignUp extends React.Component {
    render() {
        return (
            <div className="login-page">
                <div className="col-md-6 offset-md-3">
                    <div className="form-box">
                        <div className="page-name">
                            <h4>Sign up</h4>
                        </div>
                        <div className="page-content">
                            <form>
                                <InputText
                                    label="Enter your email to get started."
                                    type="email"
                                    placeholder="email address"
                                    image={Signup}
                                    errorMessages="Email must be present."
                                    className="active"
                                />
                                <InputText
                                    label="Enter your full name."
                                    type="text"
                                    placeholder="John Doe"
                                    image={Name}
                                    errorMessages="Name must be present."
                                    className="active"  
                                />

                                <InputText
                                    label="Choose a password with at least 8 characters."
                                    type="password"
                                    placeholder="password"
                                    image={Password}
                                />
                                
                                <InputText
                                    label="Confirm password"
                                    type="password"
                                    placeholder="enter password again"
                                    image={Password}
                                />

                                <ButtonText 
                                    label="Continue"
                                    link="/login" 
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;