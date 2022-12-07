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
        <UserContainer>
          <p>Please log in to be a Hero!</p>
          <LoginButton onClick={() => setModalShown(!isModalShown)}>
            <Icons variant="lockOpen" color="#8C8C8C">
              Login
            </Icons>
          </LoginButton>
          {isModalShown && (
            <LoginModal
              handleSubmit={handleSubmit}
              isNotFound={isNotFound}
              setModalShown={setModalShown}
              isModalShown={isModalShown}
            />
          )}
        </UserContainer>
      </FlexWrapper>
    );
  } else {
    return (
      <FlexWrapper>
        <UserContainer>
          <UserProfilPhoto
            publicId={user.userPictureSrc}
            alt={`Profilphoto of ${user.userName}`}
          />
          <p>{user.userName}</p>
          <KarmaAccount>
            {user.karmaAccount} Karmapoints
            <YingYang publicId="icons8-yin-yang-30_qooc3s"></YingYang>
          </KarmaAccount>
          <LoginButton
            onClick={() => {
              setUser({ id: 0, loggedIn: false });
              router.push("/");
            }}
          >
            <Icons variant="lockClosed" color="#5684bf">
              Logout
            </Icons>
          </LoginButton>
        </UserContainer>
      </FlexWrapper>
    );
  }
}

const FlexWrapper = styled.div`
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
`;

const UserContainer = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1rem 1rem 1rem;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 50% 50% 50% 50% / 85% 85% 15% 15%;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const KarmaAccount = styled.p`
  margin-left: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

const YingYang = styled(Image)`
  width: 18px;
  height: 18px;
`;
