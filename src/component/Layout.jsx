import React from "react";
import { Outlet } from "react-router-dom"
import "./Layout.css"
import { CustomLink } from './CustomLink'


function Layout()  {
    return (
        <>
        <header className="Header">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/HtmlPage">HTML</CustomLink>
            <CustomLink to="/CssPage">CSS</CustomLink>
            <CustomLink to="/JsPage">JavaScript</CustomLink>
            <CustomLink to="/SqlPage">Sql</CustomLink>
            <CustomLink to="/GitPage">Git</CustomLink>            
            <CustomLink to="/ReactPage">React.js</CustomLink>
            <CustomLink to="/NodePage">Node.js</CustomLink>
            <CustomLink to="/DPage">D3.js</CustomLink>
            {/* <CustomLink to="/NotPage">Notpage</CustomLink> */}
        </header>

        <main className="container">
        <Outlet/>
        </main>
        

        <footer className="container">&copy; ReactRouter Tutorials 2021</footer>

        </>
    );


}

export {Layout}