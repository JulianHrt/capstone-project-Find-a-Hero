import styled from "styled-components";

export default function LoginButton({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
const StyledButton = styled.button`
  background-color: white;
  border: none;
  margin-left: auto;
  margin-right: 0;
  color: #342f66;
  text-align: center;
`;
