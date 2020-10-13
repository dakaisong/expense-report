import React from 'react';

const Textarea = ({ name, label, rows, cols, error, ...rest}) => {
    return (
        <div className="form-group"> 
            <label htmlFor={name}>{label}</label>
            <textarea {...rest} name={name} id={name} rows={rows} cols={cols} className="form-control"/>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Textarea;