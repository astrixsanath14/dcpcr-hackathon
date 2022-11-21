import React, { useState,setState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from 'react-select'
import * as Constants from './res/Constants'
import { useHistory } from 'react-router-dom';
import RCG from 'react-captcha-generator';

const SearchClinic = () => {
    const history = useHistory();
    const [values, setValues] = useState({
        pinCode:"",
        captchaValue:"",
        captcha:"",
        error: ""
    });
    const [errors, setErrors] = useState({});
    const { pinCode,captchaValue, captcha, error } = values;
    
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
        // Check and see if errors exist, and remove them from the error object:
        if (!!errors[name])
            setErrors({ ...errors, [name]: null })
    };

    const handleChangeForSelect = name => event => {
        setValues({ ...values, error: false, [name]: event.value});
        // Check and see if errors exist, and remove them from the error object:
        if (!!errors[name])
            setErrors({ ...errors, [name]: null })
    };

    const findFormErrors = () => {
        const newErrors = {}
        // name errors
        if (!pinCode || pinCode === '') {
            newErrors.pinCode = {
                label: 'Postal Pincode',
                error: 'Cannot be blank!'
            };
        }
        else if(pinCode<100000 || pinCode>999999){
            newErrors.pinCode = {
                label: 'Postal Pincode',
                error: 'Invalid pincode'
            };
        }
        else if (!captchaValue || captchaValue === '') {
            newErrors.captchaValue ={
                label: 'Captcha Verification',
                error: 'Captcha cannot be blank'
            };
        }
        else if(captchaValue!=captcha){
            newErrors.captchaValue ={
                label: 'Captcha Verification',
                error: 'Captcha do not match'
            };
        }
        return newErrors;
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const newErrors = findFormErrors()
        console.log('newErrors', newErrors);
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors);
            setValues({ ...values, error: true });
            window.scrollTo(0,0);
            return;
        }
        console.log('Form validated succesfully!')
        setValues({ ...values, error: false });
        //history.push('/showresults', { values: values });
        alert("Validation success");
    };
    function result(text) {
        
        setValues({
          captcha: text
        })
        console.log(text);
      }
    const FindTheClinicForm = () => {
        return (
            <div className="py-5 text-start">
                <div className="col-md-6 offset-sm-3 border border-dark rounded">
                    <h4 className="rounded-bottom px-3 py-3" style={{
                        backgroundColor: "#D9D9D9"
                    }}>Search for Nearest Clinic</h4>
                    <Form className="py-3" action="">
                        <Form.Group className="form-group px-5 py-3">
                            <Form.Label className="text-dark">Postal Pincode</Form.Label>
                            <Form.Control className="form-control" onChange={handleChange("pinCode")} type="number" required/>
                        </Form.Group>
                        <Form.Group className="form-group px-5 py-3">
                            <Form.Label className="text-dark">Captcha Verification</Form.Label>
                            <Form.Control className="form-control" onChange={handleChange("captchaValue")} value={captchaValue} type="text" required isInvalid={!!errors.captchaValue} /> 
                            &nbsp;&nbsp;&nbsp;<RCG result={result} />
                        </Form.Group>
                        <Form.Group className="form-group text-center">
                            <Button className="btn btn-dark px-5 rounded" onClick={onSubmit} type='submit'>Search</Button>
                        </Form.Group>
                    </Form>
                    
                </div>
            </div>
        );
    };
    const errorMessage = () => {
        var errorMessages = [];

        for (const [key, value] of Object.entries(errors)) {
            if(value)
            {
                errorMessages.push({ label: value.label, error: value.error })
            }
        }
        console.log('errorMessages', errorMessages);
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">        
                    <div className="alert alert-danger" style={{display:error?"":"none"}}>
                        Oops! Please check for the below errors in the form!
                        {
                            errorMessages.map(opt => (<li key={opt.label}>{opt.label}: {opt.error}</li>))
                        }
                    </div>
                </div>
            </div>
        );
    };
    return(
        <div className="row text-center">
            {errorMessage()}
            {FindTheClinicForm()}
            {/* <p className="text-white">{JSON.stringify(values)}</p> */}
            {console.log(JSON.stringify(values))}
        </div>
    );
};
export default SearchClinic;