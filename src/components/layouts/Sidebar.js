import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
    return (
       <React.Fragment>
           <div className="sidebar">
               <div className="padd-t2">                
                  <Link to="#" className="banner-white"><p>Dummy Banner</p></Link>	
               </div>
               <div className="padd-t2 container">
                    <h1>Recommend</h1>
                    <ul className="list">
                        <li>                            
                            <Link to="/sample-page">
                                <div className="thumb"><img src="images/sidebar-thumbs.jpg" alt="" /></div>
                                <div className="text">
                                    サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
                                    <span>2016.03.26</span>
                                </div>
                            </Link>
                            <div className="clearfix">&nbsp;</div>
                        </li>
                        <li>
                            <Link to="/sample-page">
                                <div className="thumb"><img src="images/sidebar-thumbs.jpg" alt=""/></div>
                                <div className="text">
                                    サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
                                    <span>2016.03.26</span>
                                </div>
                            </Link>
                            <div className="clearfix">&nbsp;</div>
                        </li>
                        <li>
                            <Link to="/sample-page">
                                <div className="thumb"><img src="images/sidebar-thumbs.jpg" alt="" /></div>
                                <div className="text">
                                    サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
                                    <span>2016.03.26</span>
                                </div>
                            </Link>
                            <div className="clearfix">&nbsp;</div>
                        </li>
                    </ul>                    
                </div>

               <div className="padd-t2 clearfix">                   
                   <Link to="#" className="banner-gray"><p>Dummy Banner</p></Link>	
               </div>
                
               <div className="padd-t2 clearfix">
                    <Link to="#" className="banner-gray"><p>Dummy Banner</p></Link>	
               </div>
                
               <div className="padd-t2 clearfix">
                    <Link to="#" className="banner-gray"><p>Dummy Banner</p></Link>	
               </div>
           </div>
       </React.Fragment>
    )
}

export default Sidebar; 