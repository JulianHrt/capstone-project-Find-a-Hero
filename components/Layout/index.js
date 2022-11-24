import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <MainFlexWrapper>{children}</MainFlexWrapper>
      <Footer></Footer>
    </>
  );
}

const MainFlexWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1.5rem 4rem 1.5rem;
  gap: 1rem;
  align-items: center;

  span {
    display: block;
    color: darkblue;
  }
`;
