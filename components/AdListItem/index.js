import styled from "styled-components";
import Link from "next/link";
import { Image } from "cloudinary-react";

export default function AdListItem({
  id,
  adTitle,
  tags,
  adPictureSrc,
  userName,
  adCosts,
  createdDate,
  userPictureSrc,
  category,
}) {
  const editedCreatedDate = new Date(createdDate).toLocaleDateString();
  return (
    <LinkToDetailspage href={`/${category}/${id}`}>
      <StyledArticle>
        <UserContainer>
          <UserProfilPhoto
            publicId={userPictureSrc}
            alt={`Profilphoto of ${userName}`}
          />
          <h3>{userName}</h3>
        </UserContainer>
        <ImageContainer>
          <Adtitlepictures
            publicId={
              adPictureSrc === undefined
                ? "placeholder-1920x1080_camkmj"
                : adPictureSrc
            }
            alt={`Examplephoto of ${adTitle}`}
          ></Adtitlepictures>
        </ImageContainer>

        <h2>{adTitle}</h2>
        <Costs>for {adCosts} Karmapoints</Costs>

        <TagsList>
          {tags.map((tag) => {
            return <TagItem key={tag}>#{tag}</TagItem>;
          })}
        </TagsList>
        <DateContainer>created at {editedCreatedDate}</DateContainer>
      </StyledArticle>
    </LinkToDetailspage>
  );
}

const ImageContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 3px rgba(150, 138, 144, 0.2);
`;

const UserContainer = styled.section`
  display: flex;
  gap: 1rem;
  margin: 1rem;
  font-weight: bold;
  align-items: center;
  align-self: start;
  width: 100%;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 50% 50% 50% 50% / 85% 85% 15% 15%;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const DateContainer = styled.p`
  color: grey;
  font-size: 0.75rem;
`;

const Costs = styled.p`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const LinkToDetailspage = styled(Link)`
  text-decoration: none;
  color: black;

  h2 {
    text-align: center;
    color: #5684bf;
    margin: 1rem 1rem 0.25rem 1rem;
  }
`;

const Adtitlepictures = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TagsList = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  gap: 0.5rem;
  padding: 0;
  margin: 1rem 1rem 0.25rem 1rem;
`;

const TagItem = styled.li`
  border-radius: 10px;
  border: 2px solid #5684bf;
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
`;
