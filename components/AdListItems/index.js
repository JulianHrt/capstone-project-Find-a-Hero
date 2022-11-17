import Image from "next/image";
import styled from "styled-components";

export default function AdListItems({
  adTitle,
  tags,
  adPictureSrc,
  userName,
  adCosts,
  createdDate,
  userPictureSrc,
}) {
  return (
    <StyledArticle>
      <ImageContainer>
        <Image
          src={
            adPictureSrc == ""
              ? `https://source.unsplash.com/random/?${tags}`
              : adPictureSrc
          }
          fill
          alt={`Examplephoto of ${adTitle}`}
        ></Image>
      </ImageContainer>
      <h2>{adTitle}</h2>

      <UserContainer>
        <UserProfilPhoto
          src={
            userPictureSrc == ""
              ? `https://source.unsplash.com/random/?person ${userName}`
              : userPictureSrc
          }
          width={40}
          height={40}
          alt={`Profilphoto of ${userName}`}
        ></UserProfilPhoto>
        <p>{userName}</p>
      </UserContainer>
      <Costs> Costs: {adCosts} Karmapoints</Costs>

      <DateContainer>created at {createdDate}</DateContainer>
    </StyledArticle>
  );
}

const ImageContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vw;
`;

const StyledArticle = styled.article`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
`;

const UserContainer = styled.section`
  display: flex;
  gap: 1em;
  font-weight: bold;
  align-items: center;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 25px;
`;

const DateContainer = styled.p`
  color: grey;
  font-size: 0.75rem;
`;

const Costs = styled.p`
  font-weight: bold;
`;
