import React from 'react'
import { Link } from "react-router-dom";
//import '../../mytheme.js';

function Header() {
    return (        
        <React.Fragment>
            <div className="logo-container">
                <div className="logo">
                    <Link to="/"><img src="images/logo.png" alt="Logo" /></Link>
                </div>
            </div>        
            <div className="header-container">
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <img src="images/slide1.jpg" alt="Slider 1" style={ImageStyle} /> 
                        <div className="caption">
                            <h1>キャッチコピーが入ります。</h1>
                            <p>
                                サンプルテキストサンプルテキストサンプルテキストサンプルテキスト <br />
                                サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
                            </p>
                        </div>                       
                    </div>
                    <div className="mySlides fade">
                        <img src="images/slide2.jpg" alt="Slider 2" style={ImageStyle} /> 
                        <div className="caption">
                            <h1>キャッチコピーが入ります。</h1>
                            <p>
                                サンプルテキストサンプルテキストサンプルテキストサンプルテキスト <br />
                                サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
                            </p>
                        </div>                       
                    </div>
                    <div className="mySlides fade">
                        <img src="images/slide3.jpg" alt="Slider 3" style={ImageStyle} /> 
                        <div className="caption">
                            <h1>キャッチコピーが入ります。</h1>
                            <p>
                                サンプルテキストサンプルテキストサンプルテキストサンプルテキスト <br />
                                サンプルテキストサンプルテキストサンプルテキストサンプルテキスト
                            </p>
                        </div>                       
                    </div>
                </div>                                    
            </div>                
        </React.Fragment>   
    );
    
}

const ImageStyle = {    
    width: "100%"
}

export default Header