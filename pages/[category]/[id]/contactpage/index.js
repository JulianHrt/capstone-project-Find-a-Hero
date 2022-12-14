import useSWR from "swr";
import { fetcher } from "../../../../helpers/api";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Image } from "cloudinary-react";
import Icons from "../../../../components/Icons";

export default function contactpage({ isUser, adIsPaid, setadIsPaid }) {
  const router = useRouter();
  const { category, id } = router.query;

  const { data: ad, error } = useSWR(`/api/listing/${id}`, fetcher);

  if (error) return <h1>... sorry cannot load contact data</h1>;

  if (!ad)
    return (
      <>
        <h1>...please wait while loading...</h1>
        <Image publicId="hero-150x150_guzfn0" />
      </>
    );

  function goBack() {
    setadIsPaid({ id: null, paid: false });
    router.push(`/${category}/${id}`);
  }

  return (
    <>
      {isUser.loggedIn === true &&
      adIsPaid.id === id &&
      adIsPaid.paid === true ? (
        <StyledArticle>
          <UserContainer>
            <UserProfilPhoto
              publicId={ad.user.userPictureSrc}
              alt={`Profilphoto of ${ad.user.userName}`}
            />
            <UserName>{ad.user.userName}´s Ad</UserName>
          </UserContainer>
          <h3>You can reach your Hero</h3>
          <StyledContactChannel>via mail</StyledContactChannel>

          <StyledLink href={`mailto:${ad.user.userEmail}`}>
            <Icons variant="mail" color="#5684bf">
              {ad.user.userEmail}
            </Icons>
          </StyledLink>

          <StyledContactChannel>via phone</StyledContactChannel>

          <StyledLink href={`tel:${ad.user.userPhonenumber}`}>
            <Icons variant="phone" color="#5684bf">
              {ad.user.userPhonenumber}
            </Icons>
          </StyledLink>

          <StyledButton onClick={goBack}>
            <Icons variant="back" color="#000000">
              go back
            </Icons>
          </StyledButton>
        </StyledArticle>
      ) : (
        <h1>
          Sorry, you have to log in and pay for this ad before you can reach
          this page.
        </h1>
      )}
    </>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 5px 3px rgba(150, 138, 144, 0.2);
  border-radius: 10px;
  width: 85vw;
`;

const UserContainer = styled.section`
  display: flex;
  font-weight: bold;
  align-items: center;
  align-self: flex-start;
  justify-content: space-between;
  padding: 1rem;
`;

const StyledContactChannel = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 50% 50% 50% 50% / 85% 85% 15% 15%;
  margin-right: 0.5rem;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const UserName = styled.h3`
  text-align: center;
  padding: 0 0 0 0.5rem;
`;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  padding: 0.5rem;
  margin-left: 0.5rem;
  margin-right: auto;
  color: #5684bf;
  text-align: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #5684bf;
`;
