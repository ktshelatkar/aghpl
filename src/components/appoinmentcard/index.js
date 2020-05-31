import * as React from 'react'
class AppointmentCard extends React.Component {
    render() {
        const {
            democall,
            min,
        } = this.props


        return (
            <div className="appointment-card">
                <div className="cm-con">
                    <h5>{democall}</h5>
                    <h6>{min}</h6>
                </div>
                <div className="card-bottom">
                    <div className="edit">Edit</div>
                </div>
            </div>
        )
    }
}

export default AppointmentCard;