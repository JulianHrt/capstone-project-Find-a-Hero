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
    <StyledArticle>
      <ImageContainer>
        <Adtitlepictures
          publicId={adPictureSrc}
          alt={`Examplephoto of ${adTitle}`}
        ></Adtitlepictures>
      </ImageContainer>
      <AdTitle href={`/${category}/${id}`}>
        <h2>{adTitle}</h2>
      </AdTitle>
      <UserContainer>
        <UserProfilPhoto
          publicId={userPictureSrc}
          alt={`Profilphoto of ${userName}`}
        />
        <p>{userName}</p>
      </UserContainer>
      <Costs>for {adCosts} Karmapoints</Costs>
      <TagsList>
        {tags.map((tag) => {
          return <TagItem key={tag}>#{tag}</TagItem>;
        })}
      </TagsList>
      <DateContainer>created at {editedCreatedDate}</DateContainer>
    </StyledArticle>
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
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
`;

const UserContainer = styled.section`
  display: flex;
  gap: 1rem;
  font-weight: bold;
  align-items: center;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 25px;
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
`;

const AdTitle = styled(Link)`
  padding: 0 1rem 0 1rem;

  h2 {
    text-align: center;
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
  margin: 0;
`;

const TagItem = styled.li`
  border-radius: 10px;
  border: 1px solid black;
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
`;
