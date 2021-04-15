import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4b59f7")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1, 1;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightText }) => (lightText ? "#a9b3c1" : "#1c2237")};
`;
