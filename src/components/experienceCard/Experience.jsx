import React, { useRef, useEffect } from "react";
import { Timeline, Typography, Card, message } from "antd";
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
            <Text>
              ContractQA is a digital platform that streamlines the information contained in contracts into an easily accessible and user-friendly format. Through an intuitive user interface, anyone can easily upload a contract, ask questions about it, and receive accurate answers in seconds.
            </Text>
          </Card>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <Text className={styles["experience-date"]}>Start Date - End Date</Text>
          <Card className={styles["experience-card"]} bordered={false}>
            <Title level={4}>Co-Founder | CTO</Title>
            <Title level={5}>TCW Strategies</Title>
            <Text>
              A brief description of your responsibilities and achievements in this position.
            </Text>
          </Card>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <Text className={styles["experience-date"]}>Start Date - End Date</Text>
          <Card className={styles["experience-card"]} bordered={false}>
            <Title level={4}>Co-Founder | CTO</Title>
            <Title level={5}>TCW Strategies</Title>
            <Text>
              A brief description of your responsibilities and achievements in this position.
            </Text>
          </Card>
        </Timeline.Item>
        {/* Add more Timeline.Item for other experiences */}
      </Timeline>
    </div>
    </div>
  );
  };
  export default Experience;