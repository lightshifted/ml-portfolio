import React from 'react';
import { Menu, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className={styles.navbar}>
      <div className={styles['navbar-logo']}>Jason's Portfolio</div>
      <Menu mode="horizontal" className={styles['navbar-menu']}>
        <Menu.Item key="1">
          <NavLink to="/" activeClassName={styles.active}>Home</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/experience" activeClassName={styles.active}>Experience</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/projects" activeClassName={styles.active}>Projects</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/skills" activeClassName={styles.active}>Skills</NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/contact" activeClassName={styles.active}>Contact</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
