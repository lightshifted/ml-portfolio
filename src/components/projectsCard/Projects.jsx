import React from "react";
import { Card, Typography, Descriptions } from "antd";

const { Title } = Typography;

const Projects = () => (
  <div className="projects-section">
    <Title level={2} >Projects</Title>
    {/* Add a Card component for each project */}
    <Card title="JobHive" extra={<a href="https://project-link">GitHub Repo</a>} style={{ marginBottom: 20 }}>
    <Descriptions column={1}>
      <Descriptions.Item label="Description">
        An agent-actor system for job search assistance.
      </Descriptions.Item>
      <Descriptions.Item label="Technologies Used">
        LangChain, Ray, OpenAI API, PromptLayer, React, Ant Design, Chroma
      </Descriptions.Item>
      <Descriptions.Item label="Problem Statement">
        Design and develop an agent-actor system consisting of a parent agent responsible for task delegation, along with child agents 
        proficient in various specializations, to assist job seekers in identifying potential job opportunities and preparing for interviews.
      </Descriptions.Item>
      <Descriptions.Item label="Features">
        <ul>
        <li>Ray framework for efficient parallel execution of tasks by agents</li>
        <li>Plan-Do-Check-Adjust for continuous improvement</li>
        <li>User-friendly interface</li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Technical Challenges">
        <ul>
        <li>Developing a custom rendering system for user-friendly display of agent-actor system outputs, capabilities currently not offered by LangChain callbacks system.</li>
        <li>Integrating</li>
        <li>Training and fine-tuning GPT models for table extraction and modification</li>
        <li>Developing a user-friendly interface for interacting with table data</li>
        </ul>
      </Descriptions.Item>
      <Descriptions.Item label="Results">
        <ul>
        <li>One of the world's first open-sourced agent-actor system for job search assistance</li>
        <li>Shared on LinkedIn by Jeremy Schifeling, Marketing Director at Khan Academy. 👉🏾 <a href="https://www.linkedin.com/posts/schifeling_github-lightshiftedjobhive-an-agent-actor-activity-7061452083899629568-A35E?utm_source=share&utm_medium=member_desktop" target="_blank">View</a></li>
        </ul>
      </Descriptions.Item>
    </Descriptions>
  </Card>
  <Card title="TablesGPT" extra={<a href="https://project-link">GitHub Repo</a>} style={{ marginBottom: 20 }}>
    <Descriptions column={1}>
      <Descriptions.Item label="Description">
        GPT-powered solution for extracting and modifying data in tables using natural language commands.
      </Descriptions.Item>
      <Descriptions.Item label="Technologies Used">
        Python, PyTorch, Transformers, React, Ant Design
      </Descriptions.Item>
      <Descriptions.Item label="Problem Statement">
        Traditional methods for extracting data from tables are time-consuming and require technical expertise. TablesGPT solves this problem by allowing users to extract and modify data in tables using natural language commands.
      </Descriptions.Item>
      <Descriptions.Item label="Solution">
        TablesGPT uses natural language processing techniques to understand user queries and perform actions on tables, making it a unique and powerful solution for data extraction and modification.
      </Descriptions.Item>
      <Descriptions.Item label="Features">
  <ul>
    <li>Extract data from tables using intuitive natural language commands</li>
    <li>Modify table data effortlessly with simple natural language commands</li>
    <li>Enjoy a user-friendly interface for enhanced ease of use</li>
  </ul>
</Descriptions.Item>
      <Descriptions.Item label="Technical Challenges">
        - Preprocessing large amounts of table data for use in machine learning models<br />
        - Training and fine-tuning GPT models for table extraction and modification<br />
        - Developing a user-friendly interface for interacting with table data<br />
      </Descriptions.Item>
      <Descriptions.Item label="Results">
        - 50% increase in data extraction efficiency for a client<br />
        - Featured in a tech publication for innovative use of GPT in data extraction<br />
        - Retweeted by [Name], creator of GuardRailsLLM library [link to tweet]
      </Descriptions.Item>
    </Descriptions>
  </Card>
    {/* Add more Card components for other projects */}
  </div>
);

export default Projects;
