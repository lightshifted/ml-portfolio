# Jason's Portfolio

👋🏾 Welcome to the GitHub repository for my portfolio website! Here, you'll find the source code for the portfolio, which is built using React. Feel free to modify it for your own use.

[View live demo](https://ml-portfolio-9a08d.web.app/)

## Project Structure

The core components of the portfolio website are organized as follows:

```javascript
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
          <Skills />
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
```
<p>
The main entry point of the application is the MLPortfolio component. This component represents the entire portfolio website and serves as the top-level container. It is responsible for rendering the layout, including the header, content, and footer.

The structure of the website is divided into several components:
</p>

- `Navbar`: Represents the navigation bar at the top of the website.
- `Introduction`: Provides an introduction to the portfolio and showcases your personal information.
- `Experience`: Displays your relevant work experience and achievements.
- `Projects`: Projects you have worked on.
- `Skills`: Highlights your skills and expertise in machine learning.
- `Contact`: Allow visitors to get in touch with you.

The `Layout` component from the Ant Design library is used to create a basic structure for the website, with a header, content area, and footer. The `Footer` component displays copyright information and your name. The website is responsive, though modifications to the CSS for improved UX on mobile devices is needed.

## Usage
To run this portfolio website locally, follow these steps:

1. Clone the repository: `git clone [repository URL]`
2. Navigate to the project directory: cd [project directory]
3. Install the dependencies: npm install
4. Start the development server: npm start
5. Open your browser and visit http://localhost:3000 to see the portfolio website.

Feel free to explore the source code and make any modifications or enhancements according to your needs.

## Credits
This portfolio website is developed and maintained by Jason Wheeler. Thank you for visiting and considering my machine learning portfolio!

If you have any questions or would like to get in touch, please feel free to reach out to me.
