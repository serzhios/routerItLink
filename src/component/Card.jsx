import React from "react";
import { CustomLink } from '../component/CustomLink'


let cardStyle = {
    height: 200,
    width: 150,
    // padding: 20,
    margin: 20,
    // display: 'flex',
    // backgroundColor: "#FFF",
    // boxShadow: "0px 0px 5px #666" ,
    textAligin: 'center',
    cursor: 'pointer'
    
}

let CardItemSryle = {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    padding: 13,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    aliginItems: 'center',
    color: 'black',
    
} 

let CardImgStyle = {
    width: 150,
    height: 150,
    textAligin: 'center',
   
}

let CardLink = {
    
}

function Card(props) {
  
   
       
        return(
            
            <div   style={cardStyle}>
                <img style={CardImgStyle} src={props.imgItem} alt="" />
                <h2 style={CardItemSryle}>{props.title}</h2>
               
            </div>
        )
    }


export  { Card };