import styled from "styled-components";
import Image from "next/image";
import LoginButton from "../LoginButton";
import { useState } from "react";
import LoginModal from "../LoginModal";

export default function Header() {
  const [isModalShown, setModalShown] = useState(false);
  return (
    <>
      <UserContainer>
        <UserProfilPhoto
          src={`https://source.unsplash.com/random/?person`}
          width={40}
          height={40}
          alt={`Profilphoto of `}
        />
        <UserName>Julian</UserName>
        <KarmaPoints>100 Karmapoints</KarmaPoints>
        <LoginButton onClick={() => setModalShown(!isModalShown)}>
          Login
        </LoginButton>
      </UserContainer>
      {isModalShown && <LoginModal />}
    </>
  );
}

const UserContainer = styled.section`
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
`;

const UserName = styled.h2`
  text-align: center;
`;

const KarmaPoints = styled.h2`
  text-align: center;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 25px;
`;
