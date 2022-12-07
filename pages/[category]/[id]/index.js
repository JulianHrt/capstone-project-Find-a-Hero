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

  if (!ad)
    return (
      <>
        <h1>...please wait while loading...</h1>
        <Image publicId="hero-150x150_guzfn0" />
      </>
    );

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
            <StyledButton
              onClick={() => router.push(`/${category}/${id}/editpage/`)}
            >
              <Icons variant="edit" color="#000000">
                edit
              </Icons>
            </StyledButton>
            <StyledButton
              type="button"
              onClick={() => setModalShown(!isModalShown)}
            >
              <Icons variant="delete" color="#000000">
                delete
              </Icons>
            </StyledButton>
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
              <Icons variant="done" color="green">
                yes
              </Icons>
            </StyledButton>
            <StyledButton
              type="button"
              onClick={() => setModalShown(!isModalShown)}
            >
              <Icons variant="close" color="#ea5455">
                {" "}
                no
              </Icons>
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
        <StyledLink href={`/${category}`}>
          <Icons variant="back" color="#000000">
            go back
          </Icons>
        </StyledLink>
        {isUser.loggedIn && isUser.id !== ad.userId ? (
          <StyledButton type="button" onClick={BookAd}>
            {enoughtPoints ? (
              <Icons variant="book" color="#000000">
                Book now for {ad.adCosts} Karmapoints
              </Icons>
            ) : (
              <Icons variant="close" color="#ea5455">
                Sorry you dont have enough Karmapoints
              </Icons>
            )}
          </StyledButton>
        ) : isUser.id !== ad.userId ? (
          <Icons variant="close" color="#ea5455">
            Please login to book this hero!
          </Icons>
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
  box-shadow: 2px 2px 5px 3px rgba(150, 138, 144, 0.2);
  width: 85vw;
  border-radius: 10px;
`;

const UserContainer = styled.section`
  display: flex;
  font-weight: bold;
  align-items: center;
  padding: 1rem;
`;

const AdTitle = styled.h3`
  align-self: center;
  padding: 0 1rem 0 1rem;
  color: #5684bf;
`;

const UserName = styled.h3`
  text-align: center;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 50% 50% 50% 50% / 85% 85% 15% 15%;
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
  border-top: 1px solid #8c8c8c;
  border-bottom: 1px solid #8c8c8c;
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
  text-decoration: none;
  text-align: center;
  color: #5684bf;
  padding: 0.5rem;
`;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  padding: 0.5rem;
  min-width: 40%;
  color: #5684bf;
  text-align: center;
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
  border: 2px solid #5684bf;
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
`;

const CategoryItem = styled.p`
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  background: #5684bf;
`;

const FlexWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  align-items: center;
`;

const StyledModal = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 16vh;
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

const IconContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 0;
  align-items: center;
  gap: 1rem;
`;

const Adtitlepictures = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
