import styled from "styled-components";

export default function LoginModal() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    return data;
  }

  return (
    <StyledModal>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <StyledInput type="text" id="name" name="name"></StyledInput>
        </label>
        <label htmlFor="password">
          Password:
          <StyledInput
            type="password"
            id="password"
            password="password"
          ></StyledInput>
        </label>
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  position: absolute;
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
  border: 1px solid black;
  padding: 0.5rem;
  text-decoration: none;
  color: black;
  min-width: 40%;
  text-align: center;
  font-size: 1rem;

  :active {
    background-color: black;
    color: white;
  }
`;
