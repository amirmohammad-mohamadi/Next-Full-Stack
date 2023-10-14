import {
  Body,
  Container,
  Html,
  Link,
  Head,
  Text,
  Tailwind,
} from "@react-email/components";
import React from "react";

interface IWelcomeTemplate {
  name: string;
}

const WelcomeTemplate: React.FC<IWelcomeTemplate> = ({ name = "Test" }) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>Welcome aboard!</Head>
      <Tailwind>
        <Body className="bg-white">
          <Container className="max-w-full p-3">
            <Text className="text-3xl">Hello {name}</Text>
            <Link href="https://google.com">www.google.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
