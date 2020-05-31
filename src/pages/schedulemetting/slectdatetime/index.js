import * as React from 'react';
import { Link } from 'react-router-dom';
import BackIcon from '../../../static/images/icon-back.png'
import IconWatch from '../../../static/images/icon-watch.png'
class SelectDateTime extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }

    goBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="select-dt-page">
                <div className="container">
                    <div className="box-contnet">
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <div className="left-box">
                                    <div className="back-btn">
                                        <button onClick={this.goBack}><img src={BackIcon} /></button>
                                    </div>
                                    <div className="text-demo">
                                        <h5>John Doe</h5>
                                        <h4>Demo Call</h4>
                                        <div className="img-text">
                                            <img src={IconWatch} />
                                            <h6>30 min</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right-box">
                                    <h5>Select a Date & Time</h5>
                                </div>
                                <div className="next-page">
                                    <Link to="/scheduledetail">Next</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectDateTime;