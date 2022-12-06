import styled from "styled-components";
import { Image } from "cloudinary-react";
import LoginButton from "../LoginButton";
import { useState } from "react";
import LoginModal from "../LoginModal";
import { getUserId } from "../../helpers/getUsersId";
import { useRouter } from "next/router";
import { getLoggedInUser } from "../../helpers/getLoggedInUser";
import Icons from "../Icons";

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

  const user = getLoggedInUser(isUser.id);

  if (!user) {
    return (
      <FlexWrapper>
        <p>Please log in to be a Hero!</p>
        <LoginButton onClick={() => setModalShown(!isModalShown)}>
          <Icons variant="lockOpen">Login</Icons>
        </LoginButton>
        {isModalShown && (
          <LoginModal
            handleSubmit={handleSubmit}
            isNotFound={isNotFound}
            setModalShown={setModalShown}
            isModalShown={isModalShown}
          />
        )}
      </FlexWrapper>
    );
  } else {
    return (
      <FlexWrapper>
        <UserProfilPhoto
          publicId={user.userPictureSrc}
          alt={`Profilphoto of ${user.userName}`}
        />
        <p>{user.userName}</p>
        <KarmaAccount>{user.karmaAccount} Karmapoints</KarmaAccount>
        <LoginButton
          onClick={() => {
            setUser({ id: 0, loggedIn: false });
            router.push("/");
          }}
        >
          <Icons variant="lockClosed">Logout</Icons>
        </LoginButton>
      </FlexWrapper>
    );
  }
}

const FlexWrapper = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  margin: 1rem 1rem 0 1rem;
  gap: 0.5rem;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 25px;
  margin-right: 0.5rem;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const KarmaAccount = styled.p`
  margin-left: 2rem;
`;
