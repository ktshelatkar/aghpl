import * as React from 'react'
import AppointmentCard from '../../components/appoinmentcard';
import { Link } from 'react-router-dom';
class EventTypes extends React.Component {
    render() {
        return (
            <div className="event-type-tab">
                <div className="top-text">
                    <div className="left-text">
                        <div className="my-link">My Link</div>
                        <div className="my-link-path"><Link to="/schedulemetting">appointments.com/john-doe-bookings</Link></div>
                    </div>
                    <div className="right-text">
                        <div className="btn-event-type">
                            <Link to="/addeventtype">+ New Event Type</Link>
                        </div>
                    </div>
                </div>

                <div className="ap-card">
                    <div className="row">
                        <div className="col-md-4">
                            <AppointmentCard
                                democall="Demo call"
                                min="30 mins"
                            />
                        </div>
                        <div className="col-md-4">
                            <AppointmentCard
                                democall="Technical call"
                                min="60 mins"
                            />
                        </div>
                        <div className="col-md-4">
                            <AppointmentCard
                                democall="Account review"
                                min="30 mins"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventTypes;