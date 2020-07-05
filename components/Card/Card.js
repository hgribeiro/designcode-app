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

const Card = ({ image, title, logo, caption, subtitle }) => {
  return (
    <Container>
      <Cover>
        <Image source={image} />
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Logo source={logo} />
        <Wrapper>
          <Caption>{caption}</Caption>
          <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Card;
