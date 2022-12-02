import useSWR from "swr";
import { fetcher } from "../../../../helpers/api";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";

export default function contactpage({ isUser, adIsPaid, setadIsPaid }) {
  const router = useRouter();
  const { category, id } = router.query;

  const { data: ad, error } = useSWR(`/api/listing/${id}`, fetcher);

  if (error) return <h1>... sorry cannot load contact data</h1>;

  if (!ad) return <h1>... please wait while loading ...</h1>;

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
              src={
                ad.user.userPictureSrc == ""
                  ? `https://source.unsplash.com/random/?person${ad.user.userName}`
                  : ad.user.userPictureSrc
              }
              width={40}
              height={40}
              alt={`Profilphoto of ${ad.user.userName}`}
            />
            <UserName>{ad.user.userName}´s Ad</UserName>
          </UserContainer>
          <h3>You can reach your Hero</h3>
          <p>via mail</p>
          <a href={`mailto:${ad.user.userEmail}`}>{ad.user.userEmail}</a>
          <p>via phone</p>
          <a href={`tel:${ad.user.userPhonenumber}`}>
            {ad.user.userPhonenumber}
          </a>
          <StyledButton onClick={goBack}>go back</StyledButton>
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
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);
  width: 85vw;

  p {
    font-weight: bold;
  }
`;

const UserContainer = styled.section`
  display: flex;
  font-weight: bold;
  align-items: center;
  align-self: flex-start;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 25px;
`;

const UserName = styled.h2`
  text-align: center;
  padding: 0 0 0 0.5rem;
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
