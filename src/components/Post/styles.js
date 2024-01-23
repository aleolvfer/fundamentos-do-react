import styled, { css } from 'styled-components';

export const Container = styled.article`
  margin-bottom: 25px;
  /* opacity: ${(props) => props.removed ? 0.5 : 1};
  color: ${(props) => props.removed ? 'red' : ''}; */

  ${({ removed }) => css`
    opacity: ${removed ? 0.5 : 1};
    color: ${removed ? 'red' : '#fff'};
  `}
`;

export const Subtitle = styled.small`
  color: lightgreen;
`;

export const Rate = styled.span`
  color: lightblue;
`;