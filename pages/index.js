import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

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
      <StyledLink href="/AdListPage">
        Click here to take look at your local heroes!<span>🔍</span>
      </StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  background-color: white;
  border: 1px solid black;
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
  color: black;

  span {
    display: block;
  }

  :active {
    background-color: black;
    color: white;
  }
`;
