import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../utils/categories";

export default function Home() {
  return (
    <>
      <Image
        src="/images/super-hero.gif"
        width={300}
        height={300}
        alt="Animation of Hero flying"
      ></Image>
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
  background-color: white;
  border: 1px solid black;
  text-decoration: none;
  color: black;

  border-radius: 5px;
  padding: 0.5rem;

  :active {
    background-color: black;
    color: white;
  }
`;
