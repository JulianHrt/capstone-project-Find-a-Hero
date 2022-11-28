import Link from "next/link";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import Icons from "../Icons";

export default function Footer({ lastSearched }) {
  const { pathname } = useRouter();

  return (
    <StyledNav>
      <Link href="/">
        <Icons
          variant="search"
          color={pathname === "/" ? "#BF382C" : "darkblue"}
        />
      </Link>
      <Link href={`/${lastSearched}`}>
        <Icons
          variant="results"
          color={pathname.startsWith("/[category]") ? "#BF382C" : "darkblue"}
        />
      </Link>
      <Link href="/FormPage">
        <Icons
          variant="add"
          color={pathname === "/FormPage" ? "#BF382C" : "darkblue"}
        />
      </Link>
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
