import styled from "styled-components/native";

export const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;

  border-radius: 14px;
  margin: 20px 0 0 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const Cover = styled.View`
  width: 100%;
  height: 200px;

  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;

  margin-top: 20px;
  margin-left: 20px;
`;

export const Content = styled.View`
  padding-left: 20px;

  height: 80px;

  flex-direction: row;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;
export const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: bold;
`;
export const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 2px;
`;

export const Wrapper = styled.View`
  margin-left: 10px;
`;
