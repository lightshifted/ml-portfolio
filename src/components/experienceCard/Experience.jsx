import React, { useRef, useEffect } from "react";
import { Timeline, Typography, Card, message, Descriptions } from "antd";
import styles from "./Experience.module.css"; // Import custom styles

const { Title, Text } = Typography;

const Experience = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
  if (containerRef.current) {
  message.info("Scroll down to see more experiences.");
  containerRef.current.addEventListener("scroll", handleScroll);
  return () => {
  containerRef.current.removeEventListener("scroll", handleScroll);
  };
  }
  }, [containerRef.current]);
  
  const handleScroll = () => {
  const container = containerRef.current;
  if (container.scrollHeight - container.scrollTop === container.clientHeight) {
  message.destroy();
  }
  };
  
  return (
  
  <div className={styles["experience-section"]}>
    <Title level={2}>Experience</Title>
    <div className={styles["timeline-container"]}>
      <Timeline mode="alternate">
      <Timeline.Item color="gray">
      <Text className={styles["experience-date"]}>Feb 2023 - Present</Text>
      <Card className={styles["experience-card"]} bordered={false}>
        <Title level={4}>Development Team Lead</Title>
        <Title level={5}>ContractQA</Title>
        <Descriptions column={1}>
          <Descriptions.Item label="Responsibilities">
            - Leading a team of developers to build an agent-actor system<br />
            - Managing project timelines and deliverables<br />
            - Collaborating with product management to ensure alignment with business goals
          </Descriptions.Item>
          <Descriptions.Item label="Acknowledgements">
            - Successfully delivered the project on time and within budget<br />
            - Received positive feedback from product management and stakeholders
          </Descriptions.Item>
        </Descriptions>
      </Card>
        </Timeline.Item>
        <Timeline.Items color="gray">
          <Text className={styles["experience-date"]}>Start Date - End Date</Text>
          <Card className={styles["experience-card"]} bordered={false}>
            <Title level={4}>Co-Founder | CTO</Title>
            <Title level={5}>TCW Strategies</Title>
            <Descriptions column={1}>
              <Descriptions.Item label="Responsibilities">
                - Leading a team of developers to build an agent-actor system<br />
                - Managing project timelines and deliverables<br />
                - Collaborating with product management to ensure alignment with business goals
              </Descriptions.Item>
              <Descriptions.Item label="Acknowledgements">
                - Successfully delivered the project on time and within budget<br />
                - Received positive feedback from product management and stakeholders
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Timeline.Items>
        <Timeline.Items color="white">
          <Text className={styles["experience-date"]}>Start Date - End Date</Text>
          <Card className={styles["experience-card"]} bordered={false}>
            <Title level={4}>Co-Founder | CTO</Title>
            <Title level={5}>TCW Strategies</Title>
            <Descriptions column={1}>
              <Descriptions.Item label="Responsibilities">
                - Leading a team of developers to build an agent-actor system<br />
                - Managing project timelines and deliverables<br />
                - Collaborating with product management to ensure alignment with business goals
              </Descriptions.Item>
              <Descriptions.Item label="Acknowledgements">
                - Successfully delivered the project on time and within budget<br />
                - Received positive feedback from product management and stakeholders
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