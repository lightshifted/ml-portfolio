import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

const Projects = () => (
    <div className="projects-section">
      <Title level={2}>Projects</Title>
      {/* Add a Card component for each project */}
      <Card title="JobHive" extra={<a href="https://project1-link">GitHub Repo</a>} style={{ marginBottom: 20 }}>
        <Text>
          An open-source agent-actor system for job search assistance.
        </Text>
      </Card>
      <Card title="TablesGPT" extra={<a href="https://project2-link">GitHub Repo</a>} style={{ marginBottom: 20 }}>
        <Text>
        GPT-powered solution for extracting and modifying data in tables using natural language commands.
        </Text>
      </Card>
      {/* Add more Card components for other projects */}
    </div>
  );

export default Projects;