import React from 'react'
import { Link } from "react-router-dom";
//import '../../mytheme.js';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer clearfix">
                <div className="links float-left">
                    <Link to="sample-page">運営会社</Link>  &nbsp; &nbsp; 
                    <Link to="sample-page">個人情報保護について</Link>                   
                </div>
                <div className="copyright float-right">&copy;2016 Sample</div>
            </div>	
        </div>
    );
    
}

export default Footer