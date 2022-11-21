import useSWR from "swr";
import { fetcher } from "../../../../helpers/api";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: ad, error } = useSWR(`/api/ads/${id}`, fetcher);

  if (error) return <h1>...sorry cannot load contact data</h1>;

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
      </UserContainer>
      <h3>You can reach your Hero</h3>
      <p>via mail</p>
      <a href={`mailto:${ad.userEmail}`}>{ad.userEmail}</a>
      <p>via phone</p>
      <a href={`tel:${ad.userPhonenumber}`}>{ad.userPhonenumber}</a>
      <StyledLink href={`/AdListPage/${id}`}>go back</StyledLink>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 5px 1px rgba(150, 138, 144, 0.2);

  p {
    font-weight: bold;
  }
`;

const UserContainer = styled.section`
  display: flex;
  gap: 1em;
  font-weight: bold;
  align-items: center;
  align-self: flex-start;
  padding: 0 0 0 1rem;
`;

const UserProfilPhoto = styled(Image)`
  border-radius: 25px;
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
