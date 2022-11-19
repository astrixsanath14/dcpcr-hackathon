import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Base from './Base';

const FindService=()=>{
    const [values, setValues] = useState({
        dob: "",
        annualFamilyIncome: "",
        schemeOrServiveCategory: "",
        typeOfDisability: "",
        disabilityPercentage: "",
        error: ""
    });
    const {dob,annualFamilyIncome,schemeOrServiveCategory,typeOfDisability,disabilityPercentage,error}=values;
    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value});
    };
    const onSubmit=(event)=>{
        event.preventDefault();
        setValues({...values,error:false});
        // signup({name,email,password}).then((data)=>{
        //     if(data.error){
        //         setValues({...values,error:data.error,success:false});
        //     }else{
        //         setValues({...values,name:"",email:"",password:"",error:"",success:true});
        //     }
        // }).catch((err)=>{
        //     console.log("Error in signup",err);
        // });
    };
    const FindTheServiceForm=()=>{
        return(
            <div className="py-5 text-start">
                <div className="col-md-6 offset-sm-3 border border-dark rounded">
                        <h4 className="rounded-bottom px-3 py-3" style={{
                        backgroundColor: "#D9D9D9"
      }}>Let us help you find relevant scheme and services for you!</h4>
                    <form className="py-3" action="">
                        <div className="form-group px-5 py-3">
                            <label className="text-dark">Date of Birth</label>
                            <input className="form-control" onChange={handleChange("dob")} value={dob} type="date"/>
                        </div>
                        <div className="form-group px-5 py-3">
                            <label className="text-dark">Annual Family Income (Optional)</label>
                            <select className="form-control" onChange={handleChange("annualFamilyIncome")} value={annualFamilyIncome} >
                                <option>0-20,000</option>
                                <option>20,000-50,000</option>
                                <option>>50,000</option>
                            </select>
                        </div>
                        <div className="form-group px-5 py-3">
                            <label className="text-dark">Any specific category of scheme or services, you are interested in? (Optional)?</label>
                            <select className="form-control" onChange={handleChange("schemeOrServiveCategory")} value={schemeOrServiveCategory}>
                                <option>Educational</option>
                                <option>Health</option>
                                <option>Financial</option>
                                <option>Skill & Employment</option>
                            </select>
                        </div>
                        <div className="form-group px-5 py-3">
                            <label className="text-dark">Type of disability?</label>
                            <select className="form-control" onChange={handleChange("typeOfDisability")} value={typeOfDisability}>
                                <option>Physical Disability</option>
                                <option>Intellectual Disability</option>
                                <option>Mental Disability</option>
                                <option>Neurological</option>
                                <option>Blood Disability</option>
                                <option>Multiple Disability</option>
                            </select>
                        </div>
                        <div className="form-group px-5 py-3">
                            <label className="text-dark">Disability Percentage% (Optional)</label>
                            <input className="form-control" onChange={handleChange("disabilityPercentage")} value={disabilityPercentage} type="number"/>
                        </div>
                        <div className="form-group text-center">
                            <button className="btn btn-dark px-5 rounded" onClick={onSubmit}>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
    const errorMessage=()=>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">        
                    <div className="alert alert-danger" style={{display:error?"":"none"}}>
                        {error}
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