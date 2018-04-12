import React, { Component } from 'react';
import logo from '../../logo.png';

class TypeCode extends Component {


    render() {
        return (
         < div className = "App" >
         	< header className = "App-header row middle-xs center-xs" >
         		< div className = "App-header-contain" > 
	        		< img src = { 
						 logo 
			            } 
			            className = "App-logo col-xs-12" 
			            alt = "logo" / >
	            	< h1 className = "App-title col-xs-12" > Hello please write your code < /h1>
	        	< / div >
	        < /header >
	        < p className = "App-intro" > Questions? Do not hesitate to
	        	<a href="#" class="contact-us">contact us! </a >
	        < /p > 
	   
            <input type="text"/>
            <button onClick={() => {window.location.href = "/enter-data"}}>Join</button>
        </div>
        );
    }
}

export default TypeCode;
