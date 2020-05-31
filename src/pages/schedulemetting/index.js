import * as React from 'react';
import ArrowR from '../../static/images/icon-arrow-right.png';
import { Link } from 'react-router-dom';
class ScheduleMetting extends React.Component {
    render() {
        return (
            <div className="schedule-metting-page">
                <div className="container">
                    <div className="box-contnet">
                        <div className="schedule-header">
                            <h5>John Doe</h5>
                            <p>Welcome to my scheduling page. Please follow the instructions to add an events to my calender.</p>
                        </div>

                        <div className="main-content">
                            <div className="demo-row">
                                <Link to="/slectdatetime">
                                    <div className="cm-left">
                                        <div className="user">
                                            <div></div>
                                        </div>
                                        <div className="call-type">
                                            <h5>Demo Call</h5>
                                        </div>
                                    </div>
                                    <div className="next-arrow">
                                        <img src={ArrowR} />
                                    </div>
                                </Link>
                            </div>
                            <div className="demo-row">
                                <Link to="/slectdatetime">
                                    <div className="cm-left">
                                        <div className="user">
                                            <div></div>
                                        </div>
                                        <div className="call-type">
                                            <h5>Technical call</h5>
                                        </div>
                                    </div>
                                    <div className="next-arrow">
                                        <img src={ArrowR} />
                                    </div>
                                </Link>
                            </div>
                            <div className="demo-row">
                                <Link to="/slectdatetime">
                                    <div className="cm-left">
                                        <div className="user">
                                            <div></div>
                                        </div>
                                        <div className="call-type">
                                            <h5>Account Review</h5>
                                        </div>
                                    </div>
                                    <div className="next-arrow">
                                        <img src={ArrowR} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleMetting;