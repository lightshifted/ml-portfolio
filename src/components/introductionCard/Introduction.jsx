import React from 'react';
import { Card, Avatar, Typography, Divider } from 'antd';

const { Text, Title } = Typography;

const Introduction = () => (
    <div className="introduction-section" >
      <Card style={{ textAlign: 'center', marginTop: "1rem" }}>
        <Avatar size={115} src="./portfolio_avatar.jpg" />
        <Title level={2}>Jason Wheeler</Title>
        <Text>Prompt Engineer | Software Developer</Text>
        <Divider />
        <Text>
        <p style={{ textAlign: "left" }}>As a prompt engineering and machine learning enthusiast with a high-level understanding of large language models, I excel in communication and enjoy teaching technical concepts while creating valuable documentation. I possess a creative hacker spirit, basic programming skills, and an organizational mindset that allows me to build teams and proactively address organizational needs. Passionate about making technology safe and beneficial, I anticipate risks, think creatively about new technologies, and stay informed on emerging research and industry trends.</p>
        </Text>
      </Card>
    </div>
  );

export default Introduction;