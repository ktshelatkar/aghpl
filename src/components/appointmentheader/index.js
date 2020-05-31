import * as React from 'react'
class AppointmentHeader extends React.Component {
    render() {
        return (
            <div className="top-header">
                <div className="container">
                    <div className="user">
                        <div className="thumb">
                            <h5>J</h5>
                        </div>
                        <div className="user-name">
                            <h5>John Doe</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppointmentHeader;