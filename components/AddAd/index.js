import styled from "styled-components";
import Link from "next/link";

export default function AddAd({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit(data);

    return data;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFieldset>
        <legend>user information</legend>
        <label htmlFor="userName">
          *your name:
          <input type="text" name="userName" id="userName" required></input>
        </label>
        <label htmlFor="userPictureSrc">
          link your profilpicture:
          <input
            type="text"
            name="userPictureSrc"
            id="userPictureSrc"
            placeholder="https://yourprofilpicture.de/"
          ></input>
        </label>
        <label htmlFor="userEmail">
          *your email:
          <input type="email" name="userEmail" id="userEmail" required></input>
        </label>
        <label htmlFor="userPhonenumber">
          *your phonenumber:
          <input
            type="number"
            name="userPhonenumber"
            id="userPhonenumber"
            required
          ></input>
        </label>
      </StyledFieldset>
      <StyledFieldset>
        <legend>ad information</legend>
        <label htmlFor="adPictureSrc">
          link your adtitlepicture:
          <input
            type="text"
            name="adPictureSrc"
            id="adPictureSrc"
            placeholder="https://youradtitlepicture.de/"
          ></input>
        </label>
        <label htmlFor="adTitle">
          *type in your adtitle:
          <input type="text" name="adTitle" id="adTitle" required></input>
        </label>
        <label htmlFor="adDescription">
          what can make you done?
          <textarea
            type="text"
            name="adDescription"
            id="adDescription"
            placeholder="i can be a Hero in..."
          ></textarea>
        </label>
        <label htmlFor="adCosts">
          *costs of your ad:
          <input type="number" name="adCosts" id="adCosts" required></input>
        </label>
        <label htmlFor="category">
          *category:
          <select type="text" name="category" id="category" required>
            <option value="">---select a category for your ad---</option>
            <option value="care">care</option>
            <option value="coaching">coaching</option>
            <option value="cooking">cooking</option>
            <option value="education">education</option>
            <option value="events">events</option>
            <option value="garden">garden</option>
            <option value="home">home</option>
            <option value="technology">technology</option>
            <option value="vehicles">vehicles</option>
          </select>
        </label>
        <label htmlFor="tags">
          *describing hashtags for your ad:
          <input type="text" name="tags" id="tags" required></input>
        </label>
      </StyledFieldset>
      <FlexWrapper>
        <StyledLink href="/AdListPage/">Go Back</StyledLink>
        <StyledButton type="submit">Save</StyledButton>
      </FlexWrapper>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
  padding: 0.5rem;
  gap: 1rem;
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

const StyledLink = styled(Link)`
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

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  label,
  input,
  textarea,
  select {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
