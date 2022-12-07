import styled from "styled-components";
import { categories } from "../../helpers/categories";
import { Image } from "cloudinary-react";
import Icons from "../Icons";

export default function AddAd({ onSubmit, inputValue, onGoBack }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.adPictureSrc.name === "") {
      onSubmit(data);
    } else {
      const response = await fetch("/api/image/upload", {
        method: "POST",
        body: formData,
      });
      const image = await response.json();
      const publicId = image.publicId;

      onSubmit(data, publicId);
    }

    return data;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContainer>
        {inputValue === undefined ? (
          ""
        ) : (
          <Adtitlepictures publicId={inputValue.adPictureSrc}></Adtitlepictures>
        )}
        <StyledLabelForUpload htmlFor="adPictureSrc">
          <Icons variant="upload" color="#5684bf">
            upload a new title picture
          </Icons>
          <StyledUpload
            type="file"
            name="adPictureSrc"
            id="adPictureSrc"
          ></StyledUpload>
        </StyledLabelForUpload>
        <label htmlFor="adTitle">
          *type in your adtitle:
          <input
            type="text"
            name="adTitle"
            id="adTitle"
            pattern=".*[\S]+.*"
            defaultValue={inputValue === undefined ? "" : inputValue.adTitle}
            required
          ></input>
        </label>
        <label htmlFor="adDescription">
          what can make you done?
          <textarea
            type="text"
            name="adDescription"
            id="adDescription"
            pattern=".*[\S]+.*"
            defaultValue={
              inputValue === undefined
                ? "I can be a hero in ..."
                : inputValue.adDescription
            }
            minLength={5}
            rows={4}
          ></textarea>
        </label>
        <label htmlFor="adCosts">
          *costs of your ad:
          <input
            type="number"
            name="adCosts"
            id="adCosts"
            defaultValue={inputValue === undefined ? "" : inputValue.adCosts}
            required
          ></input>
        </label>
        <label htmlFor="category">
          *category:
          <select
            type="text"
            name="category"
            id="category"
            defaultValue={inputValue === undefined ? "" : inputValue.category}
            required
          >
            <option value="">---select a category for your ad---</option>
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="tags">
          *describing tags for your ad:{" "}
          <StyledInfo>(type in without "#" and split with ",")</StyledInfo>
          <input
            type="text"
            name="tags"
            id="tags"
            pattern=".*[\S]+.*"
            defaultValue={inputValue === undefined ? "" : inputValue.tags}
            required
          ></input>
        </label>
      </StyledContainer>
      <FlexWrapper>
        <StyledButton onClick={onGoBack}>
          <Icons variant="back" color="#ea5455">
            go back without saving
          </Icons>
        </StyledButton>
        <StyledButton type="submit">
          <Icons variant="save" color="green">
            save
          </Icons>
        </StyledButton>
      </FlexWrapper>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 85vw;
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
  padding: 0.5rem;
  border-radius: 10px;
  gap: 1rem;

  input,
  textarea,
  select {
    border-radius: 5px;
    border: 1px solid #5684bf;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  padding: 0.5rem;
  min-width: 40%;
  color: #5684bf;
  text-align: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem;
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

const Adtitlepictures = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledInfo = styled.span`
  font-size: 0.75rem;
`;

const StyledUpload = styled.input`
  opacity: 0;
  z-index: -1;
  position: absolute;
  top: -1px;
  left: 0;
  width: 0.1px;
  height: 0.1px;
`;

const StyledLabelForUpload = styled.label`
  border: 1px solid #5684bf;
  border-radius: 5px;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
`;
