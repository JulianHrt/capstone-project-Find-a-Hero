import styled from "styled-components";

export default function LoginButton({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
const StyledButton = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 0.5rem;
  text-decoration: none;
  color: black;

  text-align: center;
  font-size: 1rem;

  :active {
    background-color: black;
    color: white;
  }
`;
