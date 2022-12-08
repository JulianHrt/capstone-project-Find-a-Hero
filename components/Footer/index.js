import Link from "next/link";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import Icons from "../Icons";

export default function Footer({ lastSearched, isUser }) {
  const { pathname } = useRouter();

  return (
    <StyledNav>
      <StyledLink href="/" active={pathname === "/" ? true : false}>
        <Icons
          variant="search"
          color={pathname === "/" ? "#5684BF" : "#8C8C8C"}
        >
          look for Heroes
        </Icons>
      </StyledLink>
      <StyledLink
        href={`/${lastSearched}`}
        active={pathname.startsWith("/[category]") ? true : false}
      >
        <Icons
          variant="results"
          color={pathname.startsWith("/[category]") ? "#5684BF" : "#8C8C8C"}
        >
          last found heroes
        </Icons>
      </StyledLink>
      {isUser.loggedIn && (
        <StyledLink
          href="/formpage"
          active={pathname === "/formpage" ? true : false}
        >
          <Icons
            variant="add"
            color={pathname === "/formpage" ? "#5684BF" : "#8C8C8C"}
          >
            be a hero
          </Icons>
        </StyledLink>
      )}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #8c8c8c;
  margin-top: 0.5rem;
  width: 100%;
  border-bottom: 3px solid #5684bf;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 8px solid #5684bf;
      transition: 0.5s;
      color: #5684bf;
    `};
`;
