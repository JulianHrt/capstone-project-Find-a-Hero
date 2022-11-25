import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../helpers/api";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import Icons from "../../../components/Icons";

export default function AdDetailsPage() {
  const [isModalShown, setModalShown] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { data: ad, error } = useSWR(`/api/ads/${id}`, fetcher);

  if (error) return <h1>...sorry cannot load ad details</h1>;

  if (!ad) return <h1>...please wait while loading...</h1>;

  async function deleteAd() {
    await fetch(`/api/ads/${id}`, {
      method: "DELETE",
    });

    router.push("/AdListPage");
  }

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
        <UserName>
          {ad.userName.charAt(ad.userName.length - 1) === "s"
            ? ad.userName
            : ad.userName + "`s"}{" "}
          Ad
        </UserName>
        <Link href={`/AdListPage/${id}/EditAd/`}>
          <Icons variant="edit" color="black" />
        </Link>
        <ButtonAsIcon
          type="button"
          onClick={() => setModalShown(!isModalShown)}
        >
          <Icons variant="delete" color="black" />
        </ButtonAsIcon>
      </UserContainer>
      {isModalShown && (
        <StyledModal>
          <p>Are you sure that you want to delete this ad? </p>
          <ButtonWrapper>
            <StyledButton type="button" onClick={deleteAd}>
              yes
            </StyledButton>
            <StyledButton
              type="button"
              onClick={() => setModalShown((prevState) => !prevState)}
            >
              no
            </StyledButton>
          </ButtonWrapper>
        </StyledModal>
      )}
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
      <AdTitle>{ad.adTitle}</AdTitle>
      <Description>
        <p>Task description:</p>
        {ad.adDescription}
      </Description>
      <Attributes>
        <p>category:</p>
        <CategoryItem> {ad.category}</CategoryItem>
        <p>Tags: </p>
        <TagsList>
          {ad.tags.map((tag) => {
            return <TagItem key={tag}> {tag} </TagItem>;
          })}
        </TagsList>
        <p>Costs: {ad.adCosts} Karmapoints</p>
      </Attributes>
      <FlexWrapper>
        <StyledLink href="/AdListPage/">go back</StyledLink>
        <StyledLink href={`/AdListPage/${id}/ContactPage`}>Book now</StyledLink>
      </FlexWrapper>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
  width: 85vw;
`;

const UserContainer = styled.section`
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
`;

const AdTitle = styled.h3`
  align-self: center;
  padding: 0 1rem 0 1rem;
`;

const UserName = styled.h2`
  padding: 0 2rem 0 0.5rem;
  text-align: center;
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
  padding: 0 1rem 1rem 1rem;

  p {
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  background-color: white;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  padding: 0.5rem;

  :active {
    background-color: black;
    color: white;
  }
`;

const StyledButton = styled.button`
  background-color: white;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  width: 30%;

  :active {
    background-color: black;
    color: white;
  }
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

const CategoryItem = styled.p`
  border-radius: 10px;
  border: 1px solid black;
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
`;

const FlexWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem 1rem 1rem;
`;

const StyledModal = styled.div`
  position: absolute;
  top: 18vh;
  left: 5%;
  right: 5%;
  height: 20%;
  z-index: 10;
  background-color: white;
  padding: 0 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-evenly;
`;

const ButtonAsIcon = styled.button`
  background-color: white;
  border: none;
`;
