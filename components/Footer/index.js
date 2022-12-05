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
          color={pathname === "/" ? "#BF382C" : "darkblue"}
        >
          look for heroes
        </Icons>
      </StyledLink>
      <StyledLink
        href={`/${lastSearched}`}
        active={pathname.startsWith("/[category]") ? true : false}
      >
        <Icons
          variant="results"
          color={pathname.startsWith("/[category]") ? "#BF382C" : "darkblue"}
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
            color={pathname === "/formpage" ? "#BF382C" : "darkblue"}
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
  color: black;
  margin-top: 0.5rem;

  width: 100%;
  border-bottom: 4px solid darkblue;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 6px solid #bf382c;
      transition: 0.5s;
    `}
`;
