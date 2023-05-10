import React from 'react';
import { Card, Avatar, Typography, Divider } from 'antd';

const { Text, Title } = Typography;

const Introduction = () => (
    <div className="introduction-section">
      <Card style={{ textAlign: 'center', marginTop: "1rem" }}>
        <Avatar size={100} src="https://your-profile-image-url" />
        <Title level={2}>Jason Wheeler</Title>
        <Text>Prompt Engineer | Software Developer</Text>
        <Divider />
        <Text>
          A brief description about yourself, your experience, and your interests in the field of machine learning.
        </Text>
      </Card>
    </div>
  );

export default Introduction;