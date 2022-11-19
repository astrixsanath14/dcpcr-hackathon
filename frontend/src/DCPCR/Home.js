import React,{useState,useEffect} from 'react';
import '../styles.css';
import Base from './Base';

export default function Home(){
    const [error,setError]=useState(false);
    return(
        <Base title="DCPCR" description="DCPCR Landing Page">
           <div className="row text-center">
                <h1 className="text-white">Child Rights!</h1>
                <div className="row">
               </div>
           </div>
        </Base>
    );
};
// const Home=()=>{
//     return(
//         <div>
//             <h1>Hello Frontend</h1>
//         </div>
//     );
// };

// export default Home;