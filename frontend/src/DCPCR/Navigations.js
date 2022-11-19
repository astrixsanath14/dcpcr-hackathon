import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Search from "./Search"

const currentTab = (history, path) => {
    if(history.location.pathname===path){
        return { color: '#ffffff', backgroundColor:"#000000"};
    }
    return {color: '#000000'};
};

const Menu=({history})=>{
    return (
        <div>
        <ul className="px-5 px-3 nav nav-tabs justify-content-between"
        style={{
        backgroundColor: "#D9D9D9"
      }}>
            <li className="nav-item">
                <Link style={currentTab(history,"/")} className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,"/findtheservice")} className="nav-link" to="/findtheservice">
                    Find the Service
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,"/disabilityinfo")} className="nav-link" to="/disabilityinfo">
                    Disability Info
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,"/essentialdocs")} className="nav-link" to="/essentialdocs">
                    Essential Docs
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history,"/resources")} className="nav-link" to="/resources">
                    Resources
                </Link>
            </li>

            <Search/>
            </ul>
            </div>
    );
};

export default withRouter(Menu);