import * as React from 'react'

class InputText extends React.Component{
    render() {
        const {
            type,
            label,
            placeholder,
            image,
            errorMessages,
        } = this.props
        const inputclass = this.props.className || "" 
        return (
            <div className="form-group">
                <label>{label}</label>
                <input type={type} className={`form-control ${inputclass}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={placeholder} />
                {
                    image && 
                <span className="input-img"><img src={image} alt="AGHPL"/></span>
                }
                {
                    errorMessages && errorMessages !== "" &&
                    <div className="error">{errorMessages}</div>
                }
            </div>
        )
    }
}

export default InputText;