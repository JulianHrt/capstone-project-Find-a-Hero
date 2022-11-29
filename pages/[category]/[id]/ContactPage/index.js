import useSWR from "swr";
import { fetcher } from "../../../../helpers/api";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function contactPage() {
  const router = useRouter();
  const { category, id } = router.query;

  const { data: ad, error } = useSWR(`/api/listing/${id}`, fetcher);

  if (error) return <h1>...sorry cannot load contact data</h1>;

  if (!ad) return <h1>...please wait while loading...</h1>;

  return (
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
      <a href={`tel:${ad.user.userPhonenumber}`}>{ad.user.userPhonenumber}</a>
      <StyledLink href={`/${category}/${id}`}>go back</StyledLink>
    </StyledArticle>
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

const StyledLink = styled(Link)`
  background-color: white;
  border: 1px solid black;
  padding: 0.5rem;
  margin: 1rem;
  align-self: flex-start;
  text-decoration: none;
  color: black;

  :active {
    background-color: black;
    color: white;
  }
`;
