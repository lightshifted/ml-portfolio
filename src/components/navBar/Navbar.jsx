import React from 'react';
import { Menu, Layout } from 'antd';
import styles from './Navbar.module.css';
import { GithubOutlined } from '@ant-design/icons';
import { Link } from 'react-scroll';


const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className={`${styles.navbar} ${styles.fixed}`}>
      <div className={styles['navbar-logo']}><a href="https://github.com/lightshifted/ml-portfolio">Website Repo</a></div>
      <Menu mode="horizontal" className={styles['navbar-menu']}>
        <Menu.Item key="1">
          <Link
            activeClass={styles.active}
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link
            activeClass={styles.active}
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experience
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link
            activeClass={styles.active}
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link
            activeClass={styles.active}
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link
            activeClass={styles.active}
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </Menu.Item>
        {/* ...other menu items */}
      </Menu>
    </Header>
  );
};

export default Navbar;