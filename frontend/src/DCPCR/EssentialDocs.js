import React, { useState } from "react";
import Accordion from "./res/Accordian";
import * as Constants from './res/Constants'

const answerTheQuestionsIfAvailable = (questionElement) =>
{
    console.log(questionElement);
    if(questionElement.answers && Object.keys(questionElement.answers).length>0)
    {
        return (
            <div className="">
                <ol>
                    {questionElement.answers.map(answerElement => (
                        <li className="py-1">{answerElement.answer}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

const getDisabilityDocReferences = () => {
    return (
        <div>
            {
                Constants.EssentialDocsReferences.map(questionElement =>  
                    <div>
                    <div style={{backgroundColor: "#F1F1F1"}}>
                        <Accordion trigger={questionElement.question + "  "}>
                        {
                        <div className="px-5" >
                                {questionElement.answer_label}
                                {
                                    answerTheQuestionsIfAvailable(questionElement)
                                }
                        </div>
                        }
                        </Accordion>
                        </div>
                        <br />
                    </div>
                )
            }
        </div>
    );
}

const EssentialDocs = () => {
    return (
        <div className="px-5">
            <h5>Essential Documents for a Person with Disability </h5>
            <p className="py-2">A person with a benchmark disability as defined above will require a Disability Certificate & Unique Disability ID to avail benefits under various schemes and entitlements.</p>
            <p className="py-2"><b>Disability Certificate:</b> Disability Certificate or Handicap Certificate (as it may alternatively be called) is a document that certifies the type and degree of disability that has affected the person.</p>
            <p className="py-2"><b>Unique Disability ID:</b> Unique Disability ID is a single source document for identification, and verification of the disabled for availing benefits that they are eligible for under the various schemes and acts.</p>

            <h5>Referrences</h5>
            {getDisabilityDocReferences()}
        </div>
    );
};
export default EssentialDocs;