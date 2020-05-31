import * as React from 'react';
import { Link } from 'react-router-dom';
import IconCalender from '../../../static/images/icon-calender.png';
class ScheduleConfirm extends React.Component {
    render() {
        return (
            <div className="schedule-metting-page schedule-confirm">
                <div className="container">
                    <div className="box-contnet">
                        <div className="schedule-header">
                            <h5>Confirmed</h5>
                            <p>You are scheduled with John Doe.</p>
                        </div>

                        <div className="main-content">
                            <div className="demo-row confirm">
                                <div className="cm-left">
                                    <div className="user">
                                        <div></div>
                                    </div>
                                    <div className="call-type">
                                        <h5>Demo Call</h5>
                                    </div>
                                </div>

                                <div className="img-schedule">
                                    <img src={IconCalender} alt="AGHPL"/>
                                    <h5>11:30am- 12:00pm, Thursday, April 23, 2020</h5>
                                </div>
                            </div>

                            <div className="another-event-text">
                                <Link to="/appointments"><span>&#8594;</span>Schedule another event</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleConfirm;