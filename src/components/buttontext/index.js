import * as React from 'react'
import {Link } from 'react-router-dom';
class ButtonText extends React.Component{
    render() {
        const {
            label,
            link
        } = this.props
        return (
            <div className="button-text">
                <Link to={link}>{label}</Link>
            </div>
        )
    }
}

export default ButtonText;