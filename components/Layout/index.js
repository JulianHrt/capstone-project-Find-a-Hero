import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";

export default function Layout({ children, lastSearched, isUser, setUser }) {
  return (
    <>
      <Header isUser={isUser} setUser={setUser}></Header>
      <MainFlexWrapper>{children}</MainFlexWrapper>
      <Footer lastSearched={lastSearched} isUser={isUser}></Footer>
    </>
  );
}

const MainFlexWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1.5rem 5rem 1.5rem;
  align-items: center;

  span {
    display: block;
    color: #5684bf;
  }
`;
