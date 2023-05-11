import React from 'react';
import { Layout } from 'antd';

import Navbar from '../components/navBar/Navbar';
import Introduction from '../components/introductionCard/Introduction';
import Experience from '../components/experienceCard/Experience';
import Projects from '../components/projectsCard/Projects';
import Skills from '../components/skillsCard/Skills';
import Contact from '../components/contactCard/Contact';
import './MLPortfolio.css'

const { Header, Content, Footer } = Layout;


const MLPortfolio = () => {
  return (
    <Layout className="layout">
      <Header className="portfolio-header">
        <Navbar />
      </Header>
      <Content className="portfolio-content">
        <div className="site-layout-content">
          <Introduction />
          <Experience />
          <Projects />
          <Skills/>
          <Contact />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©{new Date().getFullYear()} Jason Wheeler. All Rights Reserved.
      </Footer>
    </Layout>
  );
};

export default MLPortfolio;
