import * as React from 'react'
class ScheduleEventsTab extends React.Component {
    render() {
        return (
            <div className="schedule-event-tab">
                <div className="display-text">
                    Displaying 3 of 3 Events
                </div>

                <div className="display-event-tabel">
                    <div className="tab-m">
                        <nav>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-upcoming-tab" data-toggle="tab" href="#nav-upcoming" role="tab" aria-controls="nav-upcoming" aria-selected="true">Upcoming</a>

                                <a className="nav-item nav-link" id="nav-past-tab" data-toggle="tab" href="#nav-past" role="tab" aria-controls="nav-past" aria-selected="false">Past</a>
                            </div>
                        </nav>
                    </div>
                    <div className="tab-content px-sm-0" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-upcoming" role="tabpanel" aria-labelledby="nav-upcoming-tab">

                            <div>
                                <div className="evnets-time-schedule">
                                    <div className="event-time">
                                        <h5>Thursday, 23 April 2020</h5>
                                    </div>
                                    <div className="event-detail">
                                        <div className="profile-pic">
                                            <div></div>
                                        </div>
                                        <div className="time">
                                            09:45am - 10:15am
                                    </div>

                                        <div className="details">
                                            <h5>Rupet Grint</h5>
                                            <h5><span>Evnet type</span> Demo call</h5>
                                        </div>
                                    </div>
                                    <div className="event-detail">
                                        <div className="profile-pic">
                                            <div></div>
                                        </div>
                                        <div className="time">
                                            11:30am - 12:00pm
                                    </div>

                                        <div className="details">
                                            <h5>Emma Granger</h5>
                                            <h5><span>Evnet type</span> Account review</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="evnets-time-schedule">
                                    <div className="event-time">
                                        <h5>Friday, 24 April 2020</h5>
                                    </div>
                                    <div className="event-detail">
                                        <div className="profile-pic">
                                            <div></div>
                                        </div>
                                        <div className="time">
                                            09:30am - 10:00am
                                    </div>

                                        <div className="details">
                                            <h5>Carlos Patel</h5>
                                            <h5><span>Evnet type</span> Demo call</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div><p>You've reached the end of the list</p></div>

                            <nav aria-label="pagination navigation example">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="tab-pane fade" id="nav-past" role="tabpanel" aria-labelledby="nav-past-tab">
                            <div className="evnets-time-schedule">
                                <div className="event-time">
                                    <h5>Friday, 22 April 2020</h5>
                                </div>
                                <div className="event-detail">
                                    <div className="profile-pic">
                                        <div></div>
                                    </div>
                                    <div className="time">
                                        09:45am - 10:15am
                                    </div>

                                    <div className="details">
                                        <h5>Rupet Grint</h5>
                                        <h5><span>Evnet type</span> Demo call</h5>
                                    </div>
                                </div>
                                <div className="event-detail">
                                    <div className="profile-pic">
                                        <div></div>
                                    </div>
                                    <div className="time">
                                        11:30am - 12:00pm
                                    </div>

                                    <div className="details">
                                        <h5>Emma Granger</h5>
                                        <h5><span>Evnet type</span> Account review</h5>
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

export default ScheduleEventsTab;