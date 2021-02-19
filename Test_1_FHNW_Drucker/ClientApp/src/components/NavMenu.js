import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';



export class NavMenu extends Component {
    static displayName = NavMenu.name;

    //von Projekt beispiel
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

   
    //bild einfügen gelang nicht 
    // Maker Studio als text 
    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-16" />
                </head>
                <body>
                    <header>
                        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                            <Container>
                                <NavbarBrand tag={Link} to="/"></NavbarBrand>
                                <h1>
                                    Maker Studio
                                </h1>
                                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                                    <ul className="navbar-nav flex-grow">
                                        <NavItem class="navlink">
                                            <NavLink tag={Link} className="text-dark" to="#">Zeit & Spesen</NavLink>
                                        </NavItem>
                                        <NavItem class="navlink">
                                            <div class="dropdown">
                                                <NavLink class="dropdown-title">Maschinen</NavLink>
                                                <div class="dropdown-content">
                                                    <a href="/Zaehler">Zähler</a>
                                                    <a href="#">Wartung</a>
                                                    <a href="/MaschinenVerwaltung">Verwaltung</a>
                                                    <a href="#">Statistik 1</a>
                                                </div>
                                            </div>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="#" id="navbar_admin">Admin</NavLink>
                                        </NavItem>
                                        
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="#" id="navbar_logout">Log Out</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} className="text-dark" to="#">Name des Benutzers</NavLink>
                                        </NavItem>
                                    </ul>
                                </Collapse>
                            </Container>
                        </Navbar>
                    </header>
                </body>
            </html>
        );
    }
}