import styled from "styled-components";
import Link from "next/link";
import { Image } from "cloudinary-react";
import { categories } from "../helpers/categories";

export default function Home() {
  return (
    <>
      <Image publicId="hero-150x150_guzfn0"></Image>

      <h1>
        Welcome to <span>Find a Hero!</span>
      </h1>
      <h2>Have a look at these categories</h2>
      <FlexWrapper>
        {categories.map((category) => {
          return (
            <StyledCategoryLink key={category} href={`/${category}/`}>
              {category}
            </StyledCategoryLink>
          );
        })}
      </FlexWrapper>
      <h2>or get inspired</h2>
      <StyledCategoryLink href="/all">show me all heroes</StyledCategoryLink>
    </>
  );
}

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const StyledCategoryLink = styled(Link)`
  height: 40px;
  width: auto;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.25rem;
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  background: #5684bf;
`;
