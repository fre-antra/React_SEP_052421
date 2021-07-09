import React from "react";
import "./Footer.css";

export default class Footer extends React.Component{
    render(){
        return(
            <>
                <h1>Hi, this is footer component</h1>
                <a href = "#"><img className = "img-responsive" src = "../../../images/facebook.svg"/></a>
                <a href = "#"><img className = "img-responsive" src = "../../../images/linkedin.svg"/></a>
                <a href = "#"><img className = "img-responsive" src = "../../../images/pinterest.svg"/></a>
                <a href = "#"><img className = "img-responsive" src = "../../../images/email.svg"/></a>
            </>
        )
    }
}