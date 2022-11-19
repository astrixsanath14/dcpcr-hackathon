import React from 'react';
import Navigations from './Navigations';
import Card from 'react-bootstrap/Card';

const Base = ({
    lhsTitle = "DCPCR",
    rhsTitle = "Child Rights"
})=>{
    return(
        <div className="py-3">
                        <ul className="px-5 text-white d-flex justify-content-between">
                <li>
                    <Card className='bg-dark'>
                            <Card.Body style={{
        backgroundColor: "#474646"
      }}>{lhsTitle}</Card.Body>
                        </Card></li>
                            
                            <li>
                        <Card className='bg-dark'>
                            <Card.Body style={{
        backgroundColor: "#474646"
      }}>{rhsTitle}</Card.Body>
                            </Card>
                        </li>
                       </ul>

            <Navigations />
            </div>
    );
};

export default Base;