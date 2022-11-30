import styled from "styled-components";
import Image from "next/image";
import LoginButton from "../LoginButton";
import { useState } from "react";
import LoginModal from "../LoginModal";
import useSWR from "swr";
import { fetcher } from "../../helpers/api";
import { getUserId } from "../../helpers/getUsersId";
import { useRouter } from "next/router";

export default function Header({ setUser, isUser }) {
  const [isModalShown, setModalShown] = useState(false);
  const [isNotFound, setNotFound] = useState(false);
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const userId = getUserId(data.name);

    if (userId === undefined) {
      setNotFound(true);
      setTimeout(() => {
        setNotFound(false);
        event.target.name.value = "";
        event.target.password.value = "";
      }, 2500);
    } else {
      setUser({ id: userId, loggedIn: true });
      setModalShown((prevState) => !prevState);
    }
  }

  const id = isUser.id;

  const { data: user } = useSWR(`/api/users/${id}`, fetcher);

  if (!user) {
    return (
      <FlexWrapper>
        <p>Please log in to be a Hero!</p>
        <LoginButton onClick={() => setModalShown(!isModalShown)}>
          Login
        </LoginButton>
        {isModalShown && (
          <LoginModal handleSubmit={handleSubmit} isNotFound={isNotFound} />
        )}
      </FlexWrapper>
    );
  } else {
    return (
      <FlexWrapper>
        <UserContainer>
          <UserProfilPhoto
            src={user.userPictureSrc}
            width={40}
            height={40}
            alt={`Profilphoto of ${user.userName}`}
          />
          <p>{user.userName}</p>
          <KarmaAccount>{user.karmaAccount} Karmapoints</KarmaAccount>
        </UserContainer>
        <LoginButton
          onClick={() => {
            setUser({ id: 0, loggedIn: false });
            router.push("/");
          }}
        >
          Logout
        </LoginButton>
      </FlexWrapper>
    );
  }
}

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem 0 1rem;
`;
const UserContainer = styled.section`
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 25px;
`;

const KarmaAccount = styled.p`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;
