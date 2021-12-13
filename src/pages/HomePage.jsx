import React from "react";
// import Card from "../Card/Card";
import HTML from "../icon/html5.svg";
import CSS from "../icon/css-3.svg";
import Javacript from "../icon/javascript.svg";
import Sql from "../icon/sql.svg";
import Git from "../icon/github.svg";
import Node from "../icon/nodejs.svg";
import ReactJs from "../icon/react.svg";
import Djs from "../icon/d3.svg";
import { Card } from "../component/Card"
import { CustomLink } from '../component/CustomLink'


let headerCard = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginTop: 50
    
}
let headerC = {
    textTransform: 'uppercase',
}

function HomePage() {
    
    return (
        <div >
           <div style={headerC}>
           <h1>Полезные ссылки it</h1>
           </div>
                
                <div style={headerCard}>
                <CustomLink to="/HtmlPage">
                <Card 
                    imgItem={HTML}
                    title="HTML"                    
                />
                </CustomLink>
                
                <CustomLink to="/CssPage">
                <Card 
                imgItem={CSS}
                    title="CSS"
                />
                </CustomLink>
                
                <CustomLink to="/JsPage">
                <Card 
                    imgItem={Javacript}
                    title="JAVASCRIPT"                   
                />
                </CustomLink>
                
                <CustomLink to="/SqlPage">
                <Card 
                    imgItem={Sql}
                    title="SQL"                   
                />
                </CustomLink>

                <CustomLink to="/GitPage">
                <Card 
                    imgItem={Git}
                    title="GIT"
                />
                </CustomLink>

                <CustomLink to="/ReactPage">
                <Card 
                    imgItem={ReactJs}
                    title="REACT.JS"
                />
                </CustomLink>

                <CustomLink to="/NodePage">
                <Card 
                    imgItem={Node}
                    title="NODE.JS"
                />
                </CustomLink>

                <CustomLink to="/Dpage">
                <Card 
                    imgItem={Djs}
                    title="D3.JS"
                />
                </CustomLink>
                </div>
                </div>
       
    )


}

// eslint-disable-next-line import/no-anonymous-default-export
export  { HomePage }