import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

const Projects = () => (
    <div className="projects-section">
      <Title level={2}>Projects</Title>
      {/* Add a Card component for each project */}
      <Card title="Project 1" extra={<a href="https://project1-link">More</a>} style={{ marginBottom: 20 }}>
        <Text>
          A brief description of your project, its goals, technologies used, and your role in the project.
        </Text>
      </Card>
      <Card title="Project 2" extra={<a href="https://project2-link">More</a>} style={{ marginBottom: 20 }}>
        <Text>
          A brief description of your project, its goals, technologies used, and your role in the project.
        </Text>
      </Card>
      {/* Add more Card components for other projects */}
    </div>
  );

export default Projects;