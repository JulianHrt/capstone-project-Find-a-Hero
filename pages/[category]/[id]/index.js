import { Image } from "cloudinary-react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../helpers/api";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import Icons from "../../../components/Icons";
import {
  updateKarmaAmountForLoggedInUser,
  updateKarmaAmountForHero,
} from "../../../helpers/updateKarmaAccount";

export default function AdDetailsPage({ isUser, setadIsPaid }) {
  const [isModalShown, setModalShown] = useState(false);
  const [enoughtPoints, setenoughtPoints] = useState(true);

  const router = useRouter();
  const { category, id } = router.query;

  const { data: ad, error } = useSWR(`/api/listing/${id}`, fetcher);

  if (error) return <h1>...sorry cannot load ad details</h1>;

  if (!ad) return <h1>...please wait while loading...</h1>;

  async function deleteAd() {
    await fetch(`/api/listing/${id}`, {
      method: "DELETE",
    });

    router.back();
  }

  async function BookAd() {
    const response = await fetch(`/api/users/${isUser.id}`);
    const user = await response.json();
    const currentUserAmount = Number(user.karmaAccount);
    const currentAdCosts = Number(ad.adCosts);
    if (currentUserAmount < currentAdCosts) {
      setenoughtPoints(false);
    } else {
      updateKarmaAmountForLoggedInUser(isUser.id, currentAdCosts);
      updateKarmaAmountForHero(ad.userId, currentAdCosts);
      setadIsPaid({ id: id, paid: true });
      router.push(`/${category}/${id}/contactpage/`);
    }
  }

  return (
    <StyledArticle>
      {isUser.id === ad.userId ? (
        <UserContainer>
          <UserName>your Ad</UserName>
          <IconContainer>
            <Link href={`/${category}/${id}/editpage/`}>
              <Icons variant="edit" color="black" />
            </Link>
            <ButtonAsIcon
              type="button"
              onClick={() => setModalShown(!isModalShown)}
            >
              <Icons variant="delete" color="black" />
            </ButtonAsIcon>
          </IconContainer>
        </UserContainer>
      ) : (
        <UserContainer>
          <UserProfilPhoto
            publicId={ad.user.userPictureSrc}
            alt={`Profilphoto of ${ad.user.userName}`}
          />
          <UserName>
            {ad.user.userName.charAt(ad.user.userName.length - 1) === "s"
              ? ad.user.userName
              : ad.user.userName + "`s"}{" "}
            Ad
          </UserName>
        </UserContainer>
      )}

      {isModalShown && (
        <StyledModal>
          <p>Are you sure that you want to delete this ad? </p>
          <ButtonWrapper>
            <StyledButton type="button" onClick={deleteAd}>
              yes
            </StyledButton>
            <StyledButton
              type="button"
              onClick={() => setModalShown(!isModalShown)}
            >
              no
            </StyledButton>
          </ButtonWrapper>
        </StyledModal>
      )}
      <ImageContainer>
        <Adtitlepictures
          publicId={
            ad.adPictureSrc === undefined
              ? "placeholder-1920x1080_camkmj"
              : ad.adPictureSrc
          }
          alt={`Examplephoto of ${ad.adTitle}`}
        ></Adtitlepictures>
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
            return <TagItem key={tag}>#{tag}</TagItem>;
          })}
        </TagsList>
        <p>Costs: {ad.adCosts} Karmapoints</p>
      </Attributes>
      <FlexWrapper>
        <StyledLink href={`/${category}`}>go back</StyledLink>
        {isUser.loggedIn && isUser.id !== ad.userId ? (
          <StyledBookNowButton onClick={BookAd}>
            {enoughtPoints
              ? `Book now for ${ad.adCosts} Karmapoints`
              : "Sorry you dont have enough Karmapoints"}
          </StyledBookNowButton>
        ) : isUser.id !== ad.userId ? (
          <p>login to book this hero</p>
        ) : (
          ""
        )}
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

  padding: 0 1rem 0 1rem;
`;

const AdTitle = styled.h3`
  align-self: center;
  padding: 0 1rem 0 1rem;
`;

const UserName = styled.h2`
  text-align: center;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 25px;
  margin-right: 0.5rem;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const ImageContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
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
  text-align: center;
  color: black;
  padding: 0.5rem;

  :active {
    background-color: black;
    color: white;
  }
`;

const StyledBookNowButton = styled.button`
  background-color: white;
  border: 1px solid black;
  text-decoration: none;
  text-align: center;
  color: black;
  font-size: 1rem;
  padding: 0.5rem;

  :active {
    background-color: black;
    color: white;
  }

  span {
    font-weight: bold;
  }
`;

const StyledButton = styled.button`
  background-color: white;
  border: 1px solid black;
  text-decoration: none;
  color: black;
  min-width: 40%;
  font-size: 1rem;
  text-align: center;

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

const IconContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 0;
`;

const Adtitlepictures = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
