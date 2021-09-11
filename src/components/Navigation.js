import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    { 
        label: 'Home', 
        to: '/', 
        activeOnlyWhenExact: true
    },
    { 
        label: 'About', 
        to: '/about', 
        activeOnlyWhenExact: true
    },
    { 
        label: 'Contact', 
        to: '/contact', 
        activeOnlyWhenExact: true
    },
    { 
        label: 'Products', 
        to: '/products', 
        activeOnlyWhenExact: true
    },
    { 
        label: 'Login', 
        to: '/login', 
        activeOnlyWhenExact: false
    },
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={ to } exact={ activeOnlyWhenExact } children={ ({ match }) => {
            var active = match ? 'active' : '';
            return <li className={`my-link ${active}`}>
                <Link to={ to }>{ label }</Link>
            </li>
        }}/>
    )
}

class Navigation extends Component {
    render() {
            return (
                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        { this.showNavigation(menus) }
                    </ul>
                </nav> 
            )
    }
    showNavigation = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={ index }
                    label={ menu.label }
                    to={ menu.to } 
                    activeOnlyWhenExact={ menu.activeOnlyWhenExact }
                    />
                )
            });
        }
        return result;
    }
}

export default Navigation;
