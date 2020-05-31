import * as React from 'react'
import { Link } from 'react-router-dom';
import BackIcon from '../../static/images/icon-back.png'
class BackButton extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }
    goBack() {
        this.props.history.goBack();
    } Î
    render() {
        const {
            label,
            link
        } = this.props
        return (
            <div className="back-btn">
                <button onClick={this.goBack}><img src={BackIcon} alt="AGHPL"/></button>
            </div>
        )
    }
}

export default BackButton;