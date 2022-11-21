import React,{useState,useEffect} from 'react';
import '../styles.css';
import { Link, withRouter } from 'react-router-dom';

const Home = ()=>{
    const loadHomePageContents = () => {
        return (
            <div className="px-5 py-3 container-fluid text-center">
                    <h1>Child Rights</h1>
                    <div className='py-3'>The Delhi Commission for Protection of Child Rights has attempted to create extensive repository of all existing entitlements and relevant information which could be of benefit to Persons with Disabilities & their caregivers in Delhi. This website aims to address the information asymmetry by creating awareness about the rights of Persons with Disabilities, especially Children with Special Needs or Children who have parents with disabilities & assist them in understanding the means of leveraging rightful entitlements for their own benefit.</div>
                    <div className='py-3'>Click to know your rights & entitlement</div>
                    <Link to="/findservice" className="btn bg-dark text-white btn-lg rounded px-5">Get Started</Link>
            </div>
        );
    }
    return(
        <div>
            {loadHomePageContents()}
        </div>
    );
};
// const Home=()=>{
//     return(
//         <div>
//             <h1>Hello Frontend</h1>
//         </div>
//     );
// };

export default Home;