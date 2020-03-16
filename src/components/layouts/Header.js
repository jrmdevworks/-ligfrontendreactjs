import React,{ Component }  from 'react';
import { Link } from "react-router-dom";

class Header extends Component{
    constructor(){
        super();
        this.slideIndex = 1;           
    }

    componentDidMount() {       
        this.showSlides(this.slideIndex);
    }    

    render() {
        return(
            <React.Fragment>  
                <div className="logo-container">
                    <div className="logo">
                        <Link to="/ligfrontendreactjs"><img src="images/logo.png" alt="Logo" /></Link>
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
                        
                        <Link to="#" className="prev" onClick={() => {this.plusSlides(-1)}}>&#10094;</Link>
                        <Link to="#" className="next" onClick={() => {this.plusSlides(1)}}>&#10095;</Link>
                        
                        <div className="dots-container">
                            <span className="dot" onClick={() => {this.currentSlide(1)}}></span> 
                            <span className="dot" onClick={() => {this.currentSlide(2)}}></span> 
                            <span className="dot" onClick={() => {this.currentSlide(3)}}></span>                           
                        </div>
                    </div>                                    
                </div>                
            </React.Fragment>
            
        );
    } 
    
    showSlides(n) { 
        //console.log('slideIndex: '+ this.slideIndex);
        //console.log('n: '+ n);        
        var i;                
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex-1].style.display = "block";
        dots[this.slideIndex-1].className += " active";    
    }

    plusSlides = (n) => {
        //console.log('plusSlides: '+n); 
        this.showSlides(this.slideIndex += n);
    }

    currentSlide(n){
       //console.log('currentSlide: '+n); 
       this.showSlides(this.slideIndex = n);
    }
    
}

const ImageStyle = {    
    width: "100%"
}

export default Header