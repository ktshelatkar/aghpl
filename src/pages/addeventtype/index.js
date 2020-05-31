import * as React from 'react'
import AppointmentHeader from '../../components/appointmentheader';
import { Link } from 'react-router-dom';

class AddEventType extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }

    goBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="add-event-type">
                <AppointmentHeader />
                <div className="add-event-type-header">
                    <div className="container">
                        <div className="heading-h">
                            <div className="back-btn">
                                <button onClick={this.goBack}> <span>&#60;</span> Back</button>
                            </div>
                            <div className="text-heading">Add Event Type</div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="event-table">
                    <div className="container">
                        <div className="event-box">
                            <div className="col-md-6">
                                <div class="form-group">
                                    <label for="usr">Event name<sup>*</sup></label>
                                    <input type="text" class="form-control" id="usr" />
                                </div>

                                <div className="event-duration">
                                    <label>Event Duration<sup>*</sup></label>
                                    <div className="time-box">
                                        <div className="box-a">
                                            <h5>15</h5>
                                            <h6>min</h6>
                                        </div>
                                        <div className="box-a active">
                                            <h5>30</h5>
                                            <h6>min</h6>
                                        </div>
                                        <div className="box-a">
                                            <h5>45</h5>
                                            <h6>min</h6>
                                        </div>
                                        <div className="box-a">
                                            <h5>60</h5>
                                            <h6>min</h6>
                                        </div>
                                        <div className="box-a">
                                            <h5>-</h5>
                                            <h6>custom min</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="event-footer">
                                <button type="button" class="btn" onClick={this.goBack}>Cancel</button>
                                <button type="button" class="btn btn-primary" onClick={this.goBack}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddEventType;