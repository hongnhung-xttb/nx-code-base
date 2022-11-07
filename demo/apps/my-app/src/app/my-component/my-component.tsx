import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MyComponentProps {}

const StyledMyComponent = styled.div`
  color: pink;
`;

export function MyComponent(props: MyComponentProps) {
  let a = "";
  return (
    <StyledMyComponent>
      <h1>Welcome to MyComponent!</h1>
    </StyledMyComponent>
  );
}

export default MyComponent;
