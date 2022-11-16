import { data } from "../utils/data";
import Image from "next/image";
import styled from "styled-components";

export default function AdListItems() {
  return (
    <>
      {data.map((ad) => {
        return (
          <StyledArticle key={ad.id}>
            <ImageContainer>
              <Image
                src={
                  ad.adPictureSrc == ""
                    ? `https://source.unsplash.com/random/?${ad.category}`
                    : ad.adPictureSrc
                }
                fill
                alt={`Examplephoto of ${ad.adTitle}`}
              ></Image>
            </ImageContainer>
            <h2>{ad.adTitle}</h2>
            <UserContainer>
              <UserProfilPhoto
                src={
                  ad.adPictureSrc == ""
                    ? `https://source.unsplash.com/random/?${ad.userName}`
                    : ad.userPictureSrc
                }
                width={40}
                height={40}
                alt={`Profilphoto of ${ad.userName}`}
              ></UserProfilPhoto>
              <p>{ad.userName}</p>
            </UserContainer>
            <Costs>Costs: {ad.adCosts} Karmapoints</Costs>
            <DateContainer>created at {ad.createdDate}</DateContainer>
          </StyledArticle>
        );
      })}
    </>
  );
}

const ImageContainer = styled.section`
  position: relative;
  height: 40vh;
  width: 100%;
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
