import * as React from 'react'
import Signup from '../../static/images/signup.png';
import InputText from '../../components/inputtext';
import ButtonText from '../../components/buttontext';
class PasswordResetOne extends React.Component {
    render() {
        return (
            <div className="forgot-page">
                <div className="col-md-6 offset-md-3">
                    <div className="form-box">
                        <div className="page-name">
                            <h4>Reset Password</h4>
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

                                <ButtonText
                                    label="Send reset link"
                                    link="/passwordresettwo"
                                />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PasswordResetOne;