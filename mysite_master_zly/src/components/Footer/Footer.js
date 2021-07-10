import React from "react";
import "./Footer.css";
import facebook from "./facebook.png";
import linkedin from "./linkedin.png";
import pinterest from "./pinterest.png"
import email from "./email.png"

export default class Footer extends React.Component{
    render(){
        return(
            <>
                <h1>Hi, this is footer component</h1>
                <a href = "#"><img src={facebook} /></a>
                <a href = "#"><img src={linkedin} /></a>    
                <a href = "#"><img src={pinterest} /></a>
                <a href = "#"><img src={email} /></a>
            </>
        )
    }
}