import styled from "styled-components";
import Icons from "../Icons";

export default function LoginModal({
  handleSubmit,
  isNotFound,
  setModalShown,
  isModalShown,
}) {
  return (
    <StyledModal>
      <StyledForm onSubmit={handleSubmit}>
        <InputContainer>
          <StyledInput
            type="text"
            id="name"
            name="name"
            placeholder=" "
            pattern=".*[\S]+.*"
            required
          ></StyledInput>
          <StyledLabel htmlFor="name">Name</StyledLabel>
        </InputContainer>
        <InputContainer>
          <StyledInput
            type="password"
            id="password"
            password="password"
            placeholder=" "
            required
          ></StyledInput>
          <StyledLabel htmlFor="password">Password</StyledLabel>
        </InputContainer>
        <ButtonWrapper>
          <StyledButton type="submit">
            <Icons variant="done" color="green">
              check in
            </Icons>
          </StyledButton>
          <StyledButton onClick={() => setModalShown(!isModalShown)}>
            <Icons variant="close" color="#ea5455">
              close
            </Icons>
          </StyledButton>
        </ButtonWrapper>
        {isNotFound && <h3>Sorry we don't know this user ¯\_(ツ)_/¯</h3>}
      </StyledForm>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 18vh;
  left: 20%;
  right: 20%;
  height: 40%;
  z-index: 10;
  background-color: white;
  padding: 2rem 0 0 0;
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  padding: 1.5rem;
  min-width: 40%;
  color: #5684bf;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-evenly;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 16px;
  bottom: 0;
  left: 16px;
  pointer-events: none;
  transition: all 0.2s ease-out;
`;

const InputContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  border: 1px solid #8c8c8c;
  padding: 1rem;
  &:focus {
    outline: none;
    border: 2px solid #5684bf;
  }
  &:focus + label {
    color: #5684bf;
  }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    height: fit-content;
    font-size: 12px;
    transform: translate(0, -50%);
    background: #ffffff;
    width: fit-content;
    transition: all 0.2s ease-out;
    padding: 0.25rem;
    top: 0;
  }
`;
