import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

// import css
import "./NavBar.css";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Navbar collapseOnSelect fixedTop className="top_navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <div className="top_logo_name">My Gallery</div>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <NavItem
                eventKey={1}
                componentClass={NavLink}
                href="/task_one"
                to="/task_one"
                activeStyle={{ color: "#333333" }}
              >
                Task One
              </NavItem>
              <NavItem
                eventKey={2}
                componentClass={NavLink}
                href="/task_two"
                to="/task_two"
                activeStyle={{ color: "#333333" }}
              >
                Task Two
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          
        </Navbar>
      </Fragment>
    );
  }
}

export default NavBar;
