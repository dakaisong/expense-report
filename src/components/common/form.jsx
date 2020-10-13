import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
    state = { 
        data: {},
        errors: {}
    };

    validate = () => {
        const options = { abortEarly: false};
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if(!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value};
        const schema = { [name]: this.schema[name]};
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    handleChange = ({currentTarget: input}) => {
        const errors = { ...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data};
        data[input.name] = input.value;
        console.log(data);
        this.setState({data,errors});
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('do submit');
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if(errors) return;

        this.doSubmit();
    }

    renderButton(label, style) {
        return(
            <button type="submit" disabled={this.validate()}  className={style}>{label}</button>
        )
    }

    renderInput(name, label, type, placeHolder) {
        const { data, errors } = this.state;
    
        return (
          <Input
            type={type}
            name={name}
            value={data[name]}
            label={label}
            placeholder={placeHolder}
            onChange={this.handleChange}
            error={errors[name]}
          />
        );
    }

    renderSelect(name, label, options) {
        const { data, errors } = this.state;
    
        return (
          <Select
            type={type}
            name={name}
            label={label}
            options={data}
            onChange={this.handleChange}
            error={errors[name]}
          />
        );
    }
}
 
export default Form;