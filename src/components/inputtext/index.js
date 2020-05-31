import * as React from 'react'

class InputText extends React.Component{
    render() {
        const {
            type,
            name,
            label,
            placeholder,
            image,
            errorMessages,
            className
        } = this.props
        const inputclass = this.props.className || "" 
        return (
            <div className="form-group">
                <label>{label}</label>
                <input type={type} className={`form-control ${inputclass}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={placeholder} />
                {
                    image && 
                <span class="input-img"><img src={image} /></span>
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