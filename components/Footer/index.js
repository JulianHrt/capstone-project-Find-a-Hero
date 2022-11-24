import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledNav>
      <Link href="/">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
          <path d="m32.833 35.042-10.75-10.75q-1.208 1.041-2.854 1.604-1.646.562-3.479.562-4.5 0-7.625-3.146Q5 20.167 5 15.708q0-4.458 3.125-7.583T15.708 5q4.459 0 7.584 3.146t3.125 7.604q0 1.75-.563 3.396-.562 1.646-1.604 2.979l10.792 10.75ZM15.75 23.417q3.208 0 5.438-2.25 2.229-2.25 2.229-5.459 0-3.208-2.229-5.437-2.23-2.229-5.48-2.229-3.208 0-5.458 2.229T8 15.708q0 3.209 2.25 5.459 2.25 2.25 5.5 2.25Z" />
        </svg>
      </Link>
      <Link href="/AdListPage">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
          <path d="M5.042 32.083v-3.041H35v3.041Zm0-7.041v-3H35v3Zm0-7.042v-3H35v3Zm0-7.042v-3H35v3Z" />
        </svg>
      </Link>
      <Link href="/FormPage">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
          <path d="M18.5 31.625V21.5H8.375v-3.042H18.5V8.333h3v10.125h10.167V21.5H21.5v10.125Z" />
        </svg>
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
