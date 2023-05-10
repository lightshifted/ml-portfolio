import React from "react";
import { Timeline, Typography } from "antd";
const { Title, Text } = Typography;

const Experience = () => (
    <div className="experience-section">
      <Title level={2}>Experience</Title>
      <Timeline>
        <Timeline.Item>
          <Title level={4}>Software Developer</Title>
          <Text>ContractQA | </Text>
          <Text>Start Date - End Date</Text>
          <Text>
            A brief description of your responsibilities and achievements in this position.
          </Text>
        </Timeline.Item>
        <Timeline.Item>
          <Title level={4}>Job Title 2</Title>
          <Text>Company 2</Text>
          <Text>Start Date - End Date</Text>
          <Text>
            A brief description of your responsibilities and achievements in this position.
          </Text>
        </Timeline.Item>
        {/* Add more Timeline.Item for other experiences */}
      </Timeline>
    </div>
  );

export default Experience;