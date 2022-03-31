import React from 'react';
import { Nav } from 'react-bootstrap';
// import {Link} from 'react-router-dom'
import CustomLink from './CustomLink/CustomLink';


const NavMenu = () => {
    return (
        <Nav className="justify-content-end border-0 nav nav-tabs"  defaultActiveKey="/home" >
            <Nav.Item>
                <CustomLink to="/" className='nav nav-link'>Home</CustomLink>
            </Nav.Item>
            <Nav.Item>
                <CustomLink to="/meals" className='nav nav-link'>Meals</CustomLink>
            </Nav.Item>
             <Nav.Item>
                <CustomLink to="/findcountry" className='nav nav-link'>Find Your Country</CustomLink>
            </Nav.Item>
            <Nav.Item>
                <CustomLink to="/countries" className='nav nav-link'>Countries</CustomLink>
            </Nav.Item>
            <Nav.Item>
                <CustomLink to="/posts" className='nav nav-link'>Posts</CustomLink>
            </Nav.Item>
            <Nav.Item>
                <CustomLink to="/bondhugon" className='nav nav-link'>Bondhugon</CustomLink>
            </Nav.Item>
        </Nav>
    );
};

export default NavMenu;