import React from 'react';
import { Menu, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="navbar">
      <div className="navbar-logo">Portfolio</div>
      <Menu mode="horizontal" className="navbar-menu">
        <Menu.Item key="1">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/experience">Experience</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/projects">Projects</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/skills">Skills</NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/contact">Contact</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
