import styled from 'styled-components';

export const Container = styled.article`
  margin-bottom: 25px;
  opacity: ${(props) => props.removed ? 0.5 : 1};
`;

export const Subtitle = styled.small`
  color: lightgreen;
`;

export const Rate = styled.span`
  color: lightblue;
`;