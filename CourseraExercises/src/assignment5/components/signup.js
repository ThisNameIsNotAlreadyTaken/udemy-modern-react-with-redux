import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { getAllItems, saveUserInfo } from '../actions';
import { Link } from 'react-router-dom';

import _ from 'lodash';

import Loader from './loader';
import Item from './item';

class Validators {
    static required(value, fieldName) {
        return !value ? `${fieldName} field is required` : undefined;
    }
    static email(value) {
        return !value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Must be a valid email address: handle@domain format' : undefined;
    }
    static phone(value) {
        return !value || !/^([0-9]{3})-([0-9]{3})-([0-9]{4})$/i.test(value) ? 'Phone must be in the format ###-###-####.' : undefined;
    }
}

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = { isSaved: false };
    }

    componentWillMount() {
        if (!this.isDataLoaded()) {
            this.props.getAllItems();
        }      
    }

    isDataLoaded() {
        return this.props.items && _.keys(this.props.items).length;
    }

    onSubmit(values) {
        const info = _.cloneDeep(values);
        info.favoriteItem = this.props.items[info.favoriteDishNumber.toUpperCase()];

        this.props.saveUserInfo(info);
        this.setState({ isSaved: true });
    }

    renderField(field) {
        const meta = field.meta;

        const valid = !meta.pristine && !meta.error;
        const invalid = meta.touched && meta.error;

        return (
            <div className={`form-group has-feedback ${ valid ? 'has-success' : invalid ? 'has-error' : ''}`}>
                <label className="col-sm-2 control-label">{field.label}</label>
                <div className={field.additionalClasses || "col-sm-10"}>
                    <input type="text" className="form-control" placeholder={field.placeholder} {...field.input} />
                    { valid ?
                        (<span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>) : ('')
                    }
                    { invalid ?
                        (<span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>) : ('')
                    }                
                </div>
                { invalid ?
                    (<span className="help-block col-sm-12 text-center">
                        {meta.error}
                    </span>) : ('')
                }   
            </div>
        );
    }

    getDishItemByCode(code) {
        if (!code || !this.isDataLoaded()) return null;

        return this.props.items[code.toUpperCase()];
    }

    validateDishField(val) {
        const dishItem = this.getDishItemByCode(val);

        return !dishItem ? 'No such menu number exists' : '';
    }

    render() {
        if (!this.isDataLoaded()) {
            return (<Loader />);
        }

        const { handleSubmit } = this.props;
        const isSubmitButtonDisabled = this.props.pristine || !this.props.valid;

        const item = this.getDishItemByCode(this.props.favoriteDishNumber);

        return (
            <div className="container">
                <h1 className="text-center">Please provide your information to sign up.</h1><br/>
                { 
                    this.state.isSaved ?
                        (<div className="alert alert-success">
                            <strong>Success!</strong> Your information has been saved! <Link to={`${this.props.match.url}/myinfo`}>My info page</Link> is now available!
                        </div>) : ('')
                }    
                <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field label="First name" name="firstName" placeholder="First name" component={this.renderField} />
                    <Field label="Last name" name="lastName" placeholder="Last name" component={this.renderField} />
                    <Field label="Email" name="email" placeholder="Email" component={this.renderField} />
                    <Field label="Phone" name="phone" placeholder="Phone ###-###-####" component={this.renderField} />
                    <Field label="Favorite dish number" name="favoriteDishNumber" placeholder="Favorite dish number" component={this.renderField} 
                        additionalClasses={"col-md-6"} validate={(val) => { return this.validateDishField(val); }}/>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10 col-md-1">
                            <button type="submit" disabled={isSubmitButtonDisabled} className={`btn btn-default ${isSubmitButtonDisabled ? 'btn-danger': 'btn-success'}`}>Sign Up</button>
                        </div>
                        <div className="col-md-9">
                            {item ? (<Item item={item} />) : undefined }
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const selector = formValueSelector('SignUpForm');

function mapStateToProps(state){
    return { 
        items: state.items,
        favoriteDishNumber: selector(state, 'favoriteDishNumber')
     };
}

function validate(values, props) {
        const errors = {};

        errors.firstName = Validators.required(values.firstName, "First name");
        errors.lastName = Validators.required(values.lastName, "Last name");
        errors.email = Validators.email(values.email);
        errors.phone = Validators.phone(values.phone);
        
        return errors;
}

export default reduxForm({
    form: 'SignUpForm',
    validate: validate
})(connect(mapStateToProps, { getAllItems, saveUserInfo })(SignUp));