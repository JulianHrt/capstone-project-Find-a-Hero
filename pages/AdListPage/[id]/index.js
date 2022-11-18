import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../helpers/api";
import styled from "styled-components";

export default function AdDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: ad, error } = useSWR(`/api/ads/${id}`, fetcher);

  if (error) return <h1>...sorry cannot load ads</h1>;

  if (!ad) return <h1>...please wait while loading...</h1>;

  return (
    <StyledArticle>
      <UserContainer>
        <UserProfilPhoto
          src={
            ad.userPictureSrc == ""
              ? `https://source.unsplash.com/random/?person${ad.userName}`
              : ad.userPictureSrc
          }
          width={40}
          height={40}
          alt={`Profilphoto of ${ad.userName}`}
        />
        <h2>{ad.userName}´s Ad</h2>
      </UserContainer>{" "}
      <ImageContainer>
        <Image
          src={
            ad.adPictureSrc == ""
              ? `https://source.unsplash.com/random/1920x1080/?${ad.tags}`
              : ad.adPictureSrc
          }
          fill
          alt={`Examplephoto of ${ad.adTitle}`}
        />
      </ImageContainer>
      <h3>{ad.adTitle}</h3>
      <Description>
        <p>Task description:</p>
        {ad.adDescription}
      </Description>
      <Attributes>
        <p>category: {ad.category}</p>
        <p>Tags: </p>
        <TagsList>
          {ad.tags.map((tag, index) => {
            return <li key={index}> {tag} </li>;
          })}
        </TagsList>
        <p>Costs: {ad.adCosts}</p>
      </Attributes>
      <StyledButton type="button" onClick={() => router.push("/")}>
        go back
      </StyledButton>
    </StyledArticle>
  );
}

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

const ImageContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vw;
`;

const Description = styled.section`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 0 1rem 1rem 1rem;

  p {
    font-weight: bold;
  }
`;

const Attributes = styled.section`
  align-self: flex-start;
  padding: 0 1rem 1rem 1rem;

  p {
    font-weight: bold;
  }
`;

const StyledButton = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 0.5rem;
  margin: 1rem;
  align-self: flex-start;

  :hover {
    background-color: black;
    color: white;
  }
`;

const TagsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.25rem;
`;
