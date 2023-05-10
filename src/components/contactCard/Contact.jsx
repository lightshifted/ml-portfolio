import React from "react";
import { Button, Typography } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Contact = () => (
    <div className="contact-section">
      <Title level={2}>Contact</Title>
      <Button type="primary" icon={<GithubOutlined />} href="https://github.com/yourusername">
        Github
      </Button>
      <Button type="primary" icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/yourusername/" style={{ marginLeft: 20 }}>
        LinkedIn
      </Button>
    </div>
  );

export default Contact;