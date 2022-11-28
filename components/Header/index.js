import styled from "styled-components";
import Image from "next/image";
import LoginButton from "../LoginButton";
import { useState } from "react";
import LoginModal from "../LoginModal";
import useSWR from "swr";
import { fetcher } from "../../helpers/api";
import { getUserId } from "../../helpers/getUsersId";

export default function Header({ setUser, isUser }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const userId = getUserId(data.name);

    setUser({ id: userId, loggedIn: true });

    setModalShown((prevState) => !prevState);
  }

  const [isModalShown, setModalShown] = useState(false);

  const id = isUser.id;

  const { data: user } = useSWR(`/api/users/${id}`, fetcher);

  if (!user) {
    return (
      <FlexWrapper>
        <p>Please log in to be a Hero!</p>
        <LoginButton onClick={() => setModalShown(!isModalShown)}>
          Login
        </LoginButton>
        {isModalShown && <LoginModal handleSubmit={handleSubmit} />}
      </FlexWrapper>
    );
  } else {
    return (
      <FlexWrapper>
        <UserContainer>
          <UserProfilPhoto
            src={`https://source.unsplash.com/random/?person`}
            width={40}
            height={40}
            alt={`Profilphoto of `}
          />
          <p>{user.userName}</p>
          <p>{user.karmaAccount} Karmapoints</p>
        </UserContainer>
        <LoginButton onClick={() => setUser({ id: "", loggedIn: false })}>
          Logout
        </LoginButton>
      </FlexWrapper>
    );
  }
}

const FlexWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
`;
const UserContainer = styled.section`
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 25px;
`;
