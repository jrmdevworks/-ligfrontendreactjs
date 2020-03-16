import React from 'react'
import HomeListDisplay from './HomeListDisplay';
import { Link } from "react-router-dom";

function Homepage() {
    return (
       <React.Fragment>           
        <div className="content-wrapper">
            <div className="container">
                <ul className="list">
                    <HomeListDisplay />
                </ul>
                <div className="padd-t2">
                    <Link to="#" className="btn-black pos-rel">
                        More <i className="arrow arrow-right pos-abs-right"></i>
                    </Link>
                </div>    
            </div>
        </div>         
       </React.Fragment>
    )
}

export default Homepage; 