import React from 'react';
import Navigations from './Navigations';
import TopMenu from './TopMenu';
import Card from 'react-bootstrap/Card';

const Base = ({
    lhsTitle = "DCPCR",
    rhsTitle = "Child Rights"
})=>{
    return(
        <div>
            <br></br>
            <TopMenu />
            <br></br>
            <div className="container-fluid">
                <div className="jumbotron text-white"> 
                    <div className="display-7 d-flex justify-content-between">
                        <Card
                        >
                            <Card.Body style={{
        backgroundColor: "#474646"
      }}>{lhsTitle}</Card.Body>
                        </Card>
                        <Card className='bg-dark'>
                            <Card.Body style={{
        backgroundColor: "#474646"
      }}>{rhsTitle}</Card.Body>
                        </Card>
                        {/* <button className='card-title'></button>
                        <button className='card-title'>{rhsTitle}</button> */}
                    </div>
                </div>
            </div>
            <br></br>
            <Navigations/>
            <br></br>
            <footer className="footer mt-auto py-3">
                <div className="container-fluid text-center py-3">
                    <h1>Child Rights</h1>
                    <div>The Delhi Commission for Protection of Child Rights has attempted to create extensive repository of all existing entitlements and relevant information which could be of benefit to Persons with Disabilities & their caregivers in Delhi. This website aims to address the information asymmetry by creating awareness about the rights of Persons with Disabilities, especially Children with Special Needs or Children who have parents with disabilities & assist them in understanding the means of leveraging rightful entitlements for their own benefit.</div>
                    <br></br>
                    <div>Click to know your rights & entitlement</div>
                    <br></br>
                    <button className="btn bg-dark text-white btn-lg">Get Started</button>
                </div>
            </footer>
        </div>
    );
};

export default Base;