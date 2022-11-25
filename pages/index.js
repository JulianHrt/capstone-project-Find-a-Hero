import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../utils/categories";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home({ setFilterByCategory }) {
  const router = useRouter();

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

      <div>
        {categories.map((category) => {
          return (
            <StyledButton
              onClick={() => {
                setFilterByCategory(category), router.push("/AdListPage");
              }}
            >
              {category}
            </StyledButton>
          );
        })}
      </div>
      <h2>or let you inspire</h2>
      <StyledButton
        onClick={() => {
          setFilterByCategory(""), router.push("/AdListPage");
        }}
      >
        show me all
      </StyledButton>
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

const StyledButton = styled.button`
  background-color: white;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  margin: 1px;
  border-radius: 5px;
  padding: 0.5rem;

  :active {
    background-color: black;
    color: white;
  }
`;
