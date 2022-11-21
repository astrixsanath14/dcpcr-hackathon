import React, { useState } from "react";
import * as Constants from './res/Constants'
import Accordion from "./res/Accordian";

// function InnerCollapsible() {
//     const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
// return (
//     <div className="collapsible">
//         <div className="header" {...getToggleProps()}>
//             {isExpanded ? 'Collapse' : 'Expand'}
//         </div>
//         <div {...getCollapseProps()}>
//             <div className="content">
//                 Now you can see the hidden content. <br/><br/>
//                 Click <i>Collapse</i> to hide this content...
//             </div>
//         </div>
//     </div>
//     );
// }

const ShowResults = (props) => {
    var values;
    var schemeOrServiveCategory;
    const state = props.location.state;
    if (state && state.values)
    {
        values = state.values;
        if (values.schemeOrServiveCategory && values.schemeOrServiveCategory !== '')
        {
            schemeOrServiveCategory = values.schemeOrServiveCategory;
        }
    }

    const answerTheQuestionsIfAvailable = (questionElement) =>
    {
        console.log(questionElement);
        if(questionElement.answers && Object.keys(questionElement.answers).length>0)
        {
            return (
                <div className="px-5">
                    <ol>
                        {questionElement.answers.map(answerElement => (
                            <li className="px-1 py-1">{answerElement.answer}</li>
                        ))}
                    </ol>
                </div>
            );
        }
    }

    console.log('values received', values);
    // const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="container">
            {
                Constants.SearchResults.map(titleElement => (
                    <div className="border-bottom">
                        <Accordion trigger={titleElement.title + "  "} open={schemeOrServiveCategory === titleElement.schemeOrServiveCategory ? "true" : ""}>
                        {
                            titleElement.sub_titles.map(subTitleElemet => (
                                <div className="px-5">
                                <Accordion trigger={subTitleElemet.label + "  "}>
                                    {
                                            subTitleElemet.questions.map(questionElement => (
                                            <div>
                                                <div className="px-5" style={{backgroundColor: "#F1F1F1"}}>
                                                    <Accordion trigger={"Q) " + questionElement.question + "  "}>
                                                        {
                                                            answerTheQuestionsIfAvailable(questionElement)
                                                        }
                                                    </Accordion>
                                                </div>
                                                <br></br>
                                            </div>
                                        ))
                                    }
                                    </Accordion>
                                </div>
                            ))
                        }
                        </Accordion>
                    </div>
                ))
            }
        </div>
        // <div className="collapsible">
        //     <div className="header" {...getToggleProps()}>
        //         {isExpanded ? 'Close' : 'Open'}
        //     </div>
        //     <div {...getCollapseProps()}>
        //         <div className="content">
        //             Now you can see the hidden content. <br/><br/>
        //             Click <i>Close</i> to hide everything... <br/><br/>
        //             <InnerCollapsible/>
        //         </div>
        //     </div>
        // </div>
        );
}

export default ShowResults;