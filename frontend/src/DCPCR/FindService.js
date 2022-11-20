import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from 'react-select'
import * as Constants from './res/Constants'
import { useHistory } from 'react-router-dom';


const FindService = () => {
    const history = useHistory();
    const [values, setValues] = useState({
        dob: "",
        annualFamilyIncome: "",
        schemeOrServiveCategory: "",
        typeOfDisability: "",
        disabilityPercentage: "",
        error: ""
    });
    const [errors, setErrors] = useState({});
    const { dob, annualFamilyIncome, schemeOrServiveCategory, typeOfDisability, disabilityPercentage, error } = values;
    
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
        if (!dob || dob === '') {
            newErrors.dob = {
                label: 'Date of Birth',
                error: 'Cannot be blank!'
            };
        }
        else if(!typeOfDisability || typeOfDisability === '') {
            newErrors.typeOfDisability = {
                label: 'Disability',
                error: 'At least one must be selected!'
            };
        }
        else if (!disabilityPercentage || disabilityPercentage < 0 || disabilityPercentage > 100) {
            newErrors.disabilityPercentage ={
                label: 'Disability Percentage',
                error: 'Invalid value specified!'
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
        history.push('/showresults', { values: values });

    };
    const FindTheServiceForm = () => {
        return (
            <div className="py-5 text-start">
                <div className="col-md-6 offset-sm-3 border border-dark rounded">
                    <h4 className="rounded-bottom px-3 py-3" style={{
                        backgroundColor: "#D9D9D9"
                    }}>Let us help you find relevant scheme and services for you!</h4>
                    <Form className="py-3" action="">
                        <Form.Group className="form-group px-5 py-3">
                            <Form.Label className="text-dark">Date of Birth</Form.Label>
                            <Form.Control className="form-control" onChange={handleChange("dob")} type="date"/>
                        </Form.Group>
                        <Form.Group className="form-group px-5 py-3">
                            <Form.Label className="text-dark">Annual Family Income (Optional)</Form.Label>
                            <Select
                                onChange={handleChangeForSelect("annualFamilyIncome")}
                                options={Constants.AnnualIncomeOptions}>
                            </Select>
                        </Form.Group>
                        <Form.Group className="form-group px-5 py-3">
                            <Form.Label className="text-dark">Any specific category of scheme or services, you are interested in? (Optional)</Form.Label>
                            <Select
                                onChange={handleChangeForSelect("schemeOrServiveCategory")}
                                options={Constants.SchemeAndServiceCategoryOptions}>
                            </Select>
                            {/* <Form.Control.Feedback type='invalid'>
                                {errors.schemeOrServiveCategory}
                            </Form.Control.Feedback> */}
                        </Form.Group>

                        <Form.Group className="form-group px-5 py-3">
                            <Form.Label className="text-dark">Type of disability?</Form.Label>
                            <Select onChange={handleChangeForSelect("typeOfDisability")} isInvalid={!!errors.typeOfDisability}
                                options={Constants.DisabilityOptions}>
                            </Select>
                        </Form.Group>

                        <Form.Group className="form-group px-5 py-3">
                            <Form.Label className="text-dark">Disability Percentage% (Optional)</Form.Label>
                            <Form.Control className="form-control" onChange={handleChange("disabilityPercentage")} value={disabilityPercentage} type="number" required isInvalid={!!errors.disabilityPercentage} />
                            {/* <Form.Control.Feedback type='invalid'>
                                {errors.disabilityPercentage}
                            </Form.Control.Feedback> */}
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
            {FindTheServiceForm()}
            {/* <p className="text-white">{JSON.stringify(values)}</p> */}
            {console.log(JSON.stringify(values))}
        </div>
    );
};

export default FindService;