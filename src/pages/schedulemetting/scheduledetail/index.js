import * as React from 'react';
import BackIcon from '../../../static/images/icon-back.png'
import IconWatch from '../../../static/images/icon-watch.png'
import IconCalender from '../../../static/images/icon-calender.png';
import Signup from '../../../static/images/signup.png';
import ButtonText from '../../../components/buttontext';

class ScheduleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }

    goBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="schedule-detail-page">
                <div className="container">
                    <div className="box-contnet">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <div className="left-box">
                                    <div className="back-btn">
                                        <button onClick={this.goBack}><img src={BackIcon} alt="AGHPL"/></button>
                                    </div>
                                    <div className="text-demo">
                                        <h5>John Doe</h5>
                                        <h4>Demo Call</h4>
                                        <div className="img-text">
                                            <img src={IconWatch} alt="AGHPL"/>
                                            <h6>30 min</h6>
                                        </div>
                                        <div className="img-schedule">
                                            <img src={IconCalender} alt="AGHPL"/>
                                            <h5>11:30am- 12:00pm, Thursday, April 23, 2020</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="right-box">
                                    <h5>Enter Details</h5>
                                    <div className="form-m">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div class="form-group">
                                                    <label for="email">First Name<sup>*</sup></label>
                                                    <input type="email" class="form-control" />
                                                    <span class="input-img"><img src={Signup} alt="AGHPL"/></span>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div class="form-group">
                                                    <label for="email">Last Name<sup>*</sup></label>
                                                    <input type="email" class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-10">
                                                <div class="form-group">
                                                    <label for="email">Email<sup>*</sup></label>
                                                    <input type="email" class="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="btn">
                                                <ButtonText
                                                    label="Schedule Event"
                                                    link="/scheduleconfirm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleDetail;