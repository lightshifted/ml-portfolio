import React from "react";
import { Typography, Progress } from "antd";

const { Title } = Typography;

const Skills = () => (
  <div className="skills-section">
    <Title level={2}>Skills</Title>
    <Title level={4}>Python</Title>
    <Progress percent={90} />
    <Title level={4}>Machine Learning</Title>
    <Progress percent={85} />
    <Title level={4}>Deep Learning</Title>
    <Progress percent={80} />
    {/* Add more Progress components for other skills */}
  </div>
);

export default Skills;