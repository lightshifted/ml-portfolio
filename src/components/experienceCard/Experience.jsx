import React from "react";
import { Timeline, Typography, Card, message, Descriptions } from "antd";
import styles from "./Experience.module.css"; // Import custom styles

const { Title, Text } = Typography;

const Experience = () => {

  return (

  <div id="experience" className={styles["experience-section"]}>
    <Title level={2}>Experience</Title>
    <div className={styles["timeline-container"]}>
      <Timeline mode="alternate">
      <Timeline.Item color="gray">
      <Text className={styles["experience-date"]}>Feb 2023 - Present</Text>
      <Card className={styles["experience-card"]} bordered={false}>
        <Title level={4}>Development Team Lead</Title>
        <Title level={5}>ContractQA</Title>
        <Descriptions column={1}>
          <Descriptions.Item labelStyle={{ color: "#1890ff"}} label="Responsibilities">
            <ul>
              <li>Leading a team of developers to unlock information in contracts using natural language commands</li>
              <li>Managing project timelines, deliverables, and product roadmap prioritization</li>
              <li>Collaborating with product management to ensure alignment with business goals</li>
            </ul>
          </Descriptions.Item>
          <Descriptions.Item labelStyle={{ color: "#1890ff"}} label="Acknowledgements">
            <ul>
              <li>Successfully delivered version 1.0 of the project on time and within budget</li>
              <li>Received positive feedback from product management and stakeholder</li>
            </ul>
          </Descriptions.Item>
        </Descriptions>
      </Card>
        </Timeline.Item>
        <Timeline.Items color="gray">
          <Text className={styles["experience-date"]}>Mar 2021 - July 2022</Text>
          <Card className={styles["experience-card"]} bordered={false}>
            <Title level={4}>Co-Founder | CTO</Title>
            <Title level={5}>TCW Strategies</Title>
            <Descriptions column={1}>
              <Descriptions.Item labelStyle={{ color: "#1890ff"}} label="Responsibilities">
              <ul>
                <li>Developed product roadmap and served as lead designer of business intelligence tools</li>
                <li>Coordinated implementation of machine learning solutions underlying all product offerings</li>
              </ul>
              </Descriptions.Item>
              <Descriptions.Item labelStyle={{ color: "#1890ff"}} label="Acknowledgements">
                <ul>
                  <li>Collaborated with National Educators Association to revamp data handling practices for downstream BI systems.</li>
                </ul>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Timeline.Items>
        <Timeline.Items color="white">
          <Text className={styles["experience-date"]}>May 2012 - Jun 2018</Text>
          <Card className={styles["experience-card"]} bordered={false}>
            <Title level={4}>Campaign Director</Title>
            <Title level={5}>American Federation of Teachers</Title>
            <Descriptions column={1}>
              <Descriptions.Item labelStyle={{ color: "#1890ff"}}label="Responsibilities">
                <ul>
                  <li>Coordinated and staffed pro-public education campaigns throughout the country</li>
                  <li>Developed and sustained strategic relationships with community stakeholders ranging from public school educators to state level politicians</li>
                </ul>
              </Descriptions.Item>

            </Descriptions>
          </Card>
        </Timeline.Items>
        {/* Add more Timeline.Item for other experiences */}
      </Timeline>
    </div>
    </div>
  );
};

  export default Experience;