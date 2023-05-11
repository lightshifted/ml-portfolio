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
        - Extract data from tables using natural language commands<br />
        - Modify table data using natural language commands<br />
        - User-friendly interface<br />
      </Descriptions.Item>
      <Descriptions.Item label="Technical Challenges">
        - Preprocessing large amounts of table data for use in machine learning models<br />
        - Training and fine-tuning GPT models for table extraction and modification<br />
        - Developing a user-friendly interface for interacting with table data<br />
      </Descriptions.Item>
      <Descriptions.Item label="Results">
        - 50% increase in data extraction efficiency for a client<br />
        - Featured in a tech publication for innovative use of GPT in data extraction<br />
        - Shared on LinkedIn by [Name], marketing-director of Khan-Academy [link to tweet]
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
        - Extract data from tables using natural language commands<br />
        - Modify table data using natural language commands<br />
        - User-friendly interface<br />
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
