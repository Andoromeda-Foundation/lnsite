import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <Nav>
          <NavItem>
            <NavLink href="/home">酒馆大门</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/apps">酒馆展厅</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog">酒馆日志</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">酒馆的那些事</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    );
  }
}

export default Header;
