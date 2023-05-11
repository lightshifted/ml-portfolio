import React from "react";
import { Typography, Progress, Row, Col } from "antd";

const { Title } = Typography;

const Skills = () => (
  <div className="skills-section">
    <Title level={2}>Skills</Title>
    <Title level={4}>Languages</Title>
    <Title level={5}>Python <Progress percent={94} /></Title>
    <Title level={5}>JavaScript <Progress percent={87} /></Title>
    <Title level={5}>Mojo <Progress percent={64} /></Title>

    <Title level={4}>Libraries</Title>
      <Row gutter={[16, 16]}>
        <Col span={7}>
          <Title level={5}>LangChain</Title>
        </Col>
        <Col span={7}>
          <Title level={5}>Pinecone</Title>
        </Col>
        <Col span={7}>
          <Title level={5}>Guardrails</Title>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={7}>
          <Title level={5}>Chroma</Title>
        </Col>
        <Col span={7}>
          <Title level={5}>MotorHead</Title>
        </Col>
        <Col span={7}>
          <Title level={5}>PromptLayer</Title>
        </Col>
      </Row>


    {/* Add more Progress components for other skills */}
  </div>
);

export default Skills;