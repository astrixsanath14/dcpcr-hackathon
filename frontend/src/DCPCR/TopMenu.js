import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const TopMenu=()=>{
    return (<div>
        <ul className="px-5 nav nav-tabs justify-content-end"
        style={{
        backgroundColor: "#D9D9D9"
      }}>
            <li className="nav-item">
                <Link style={{ color: '#000000', backgroundColor:"#D9D9D9"}} className="nav-link" to="/screenreaderaccess">
                    Screen Reader Access
                </Link>
            </li>
        </ul>
    </div>);
};

export default withRouter(TopMenu);