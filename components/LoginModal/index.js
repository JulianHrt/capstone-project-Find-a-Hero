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
        <label htmlFor="name">
          Name:
          <StyledInput
            type="text"
            id="name"
            name="name"
            pattern=".*[\S]+.*"
            required
          ></StyledInput>
        </label>
        <label htmlFor="password">
          Password:
          <StyledInput
            type="password"
            id="password"
            password="password"
            required
          ></StyledInput>
        </label>
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
  left: 5%;
  right: 5%;
  height: 40%;
  z-index: 10;
  background-color: white;
  padding: 0 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  display: block;
`;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  padding: 1.5rem;
  min-width: 40%;
  color: #342f66;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-evenly;
`;
