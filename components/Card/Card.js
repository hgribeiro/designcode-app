import React from "react";

import {
  Container,
  Cover,
  Title,
  Image,
  Content,
  Logo,
  Caption,
  Subtitle,
  Wrapper,
} from "./styles";

const Card = () => {
  return (
    <Container>
      <Cover>
        <Image source={require("../../assets/background2.jpg")} />
        <Title>Styled components</Title>
      </Cover>
      <Content>
        <Logo source={require("../../assets/logo-react.png")} />
        <Wrapper>
          <Caption>React Native</Caption>
          <Subtitle> 5 of 12 sections</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Card;
