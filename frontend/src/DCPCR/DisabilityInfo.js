import React, { useState } from "react";
import * as DisabilityInfoUtil from './DisabilityInfoUtil';
import Button from 'react-bootstrap/Button';

const DisabilityInfo = () => {
    const [selectedDisability, setDisability] = useState();

    const renderContent = () => {
        console.log('selectedDisability',selectedDisability);
        if (selectedDisability)
        {
            return renderSelectedDisabilityContent(selectedDisability);
        }
        else
        {
            return renderDefaultContent();
        }
    }

    const renderDefaultContent = () =>
    {
        return (
            <div className="text-center">
                <p className="py-2"> 
                    <b>
                        The Rights of Persons with Disabilities Act, 2016, defines the term Person with Disability as “a person with long term physical, mental, intellectual or sensory impairment which, in interaction with barriers, hinders his full and effective participation in society equally with others.”
                    </b>
                </p>
                <p className="py-2"> 
                    <b>
                        The Act also specifies a comprehensive list of 21 disabilities, which are included under the ambit of the Act and are broadly classified into 6 major categories https://legislative.gov.in/sites/default/files/A2016-49_1.pdf
                    </b>
                </p>
            </div>
        );
    }

    const updateSelectedDisability = (event,selectedDisability) => {
        event.preventDefault();
        setDisability(selectedDisability.value)
    }

    const showDisabilityInfoButtons = (excludeDisabilityInfo) =>
    {
        console.log("Going to show disability info buttons...");
        var rowWiseDisabilityOptions = DisabilityInfoUtil.getRowWiseDisabilityOptions(excludeDisabilityInfo);
        console.log(rowWiseDisabilityOptions);
        return (<div className="">
            {
                rowWiseDisabilityOptions.map(currRowDisabilityOptions => (
                    <div className="row text-center">
                        {
                            currRowDisabilityOptions.map(disabilityElement =>
                            (
                                <div className="py-3 col-4 text-center">
                                    <Button className="rounded btn text-dark btn-dark py-3" onClick={(e)=>updateSelectedDisability(e,disabilityElement)} style={{ backgroundColor: "#F1F1F1", width:"100%" }}>{disabilityElement.label}</Button>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
        );
    }



    const renderSelectedDisabilityContent = (selectedDisability) =>
    {
        var selectedDisabilityElement = DisabilityInfoUtil.getDisability(selectedDisability);
        return (
            <div className="px-5">
                <div className="py-2"><b>{selectedDisabilityElement.label}</b></div>
                <div className="py-2">{selectedDisabilityElement.sub_types_label}</div>
                <div className="py-2">
                    <ol>{
                        selectedDisabilityElement.sub_types.map(disabilitySubType => (
                            <div className="py-2">
                                <li>
                                    <b>{disabilitySubType.label}</b>: {disabilitySubType.description}
                                    {
                                        disabilitySubType.sub_types.map(disabilitySubTypeSubType => (
                                            <ul>
                                                <div className="py-2">
                                                    <li><b>{disabilitySubTypeSubType.label}</b> - {disabilitySubTypeSubType.description}</li>
                                                </div>
                                            </ul>
                                        ))
                                    }
                                </li>
                            </div>
                        ))
                        }
                    </ol>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            {renderContent()}
            {showDisabilityInfoButtons(selectedDisability)}
        </div>
    );
};
export default DisabilityInfo;