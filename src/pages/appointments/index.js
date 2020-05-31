import React from 'react';
import Downarrow from '../../static/images/icon_arrow_down.png';
import EventTypes from '../eventtypes';
import AppointmentHeader from '../../components/appointmentheader';
import ScheduleEventsTab from '../scheduleevents';

class Appointments extends React.Component {
    render() {
        return (
            <div className="my-schedule-page">
                <AppointmentHeader />
                <div className="content">
                    <div className="container">
                        <div className="content-header">
                            <h1>My Schedule <img src={Downarrow} /></h1>
                        </div>
                    </div>
                    <div className="content-tab">
                        <div className="container">
                            <div class="tab-m">
                                <nav>
                                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Event Types</a>
                                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Schedule Events</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="tb-shadow">
                            <div className="container">
                                <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        <EventTypes />
					                    </div>
                                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <ScheduleEventsTab />
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

export default Appointments;