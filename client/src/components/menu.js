import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

export default class Menu extends React.Component {
  
    render() {
        return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/">View Exercises</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/">Add Exercise</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
          </div>
        )
    }
}