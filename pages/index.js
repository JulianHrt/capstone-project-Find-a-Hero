import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../helpers/categories";

export default function Home() {
  return (
    <>
      <Image
        src="/images/super-hero.gif"
        width={300}
        height={300}
        alt="Animation of Hero flying"
        priority
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
  height: 40px;
  width: auto;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.25rem;
  color: #342f66;
  font-weight: bold;
  border-radius: 10px;
  border: 0.5px solid #342f66;
  background: #ffffff;
  box-shadow: 1px 1px 1px #342f66, -1px -1px 1px #342f66;
`;
