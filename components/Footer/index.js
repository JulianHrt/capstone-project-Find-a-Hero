import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import Icons from "../Icons";

export default function Footer() {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <StyledNav>
      <Link href="/">
        <Icons
          variant="search"
          color={pathname === "/" ? "#BF382C" : "darkblue"}
        />
      </Link>
      <Link href="/AdListPage">
        <Icons
          variant="results"
          color={pathname.startsWith("/AdListPage") ? "#BF382C" : "darkblue"}
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