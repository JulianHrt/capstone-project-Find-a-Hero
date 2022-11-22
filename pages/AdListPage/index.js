import AdListItem from "../../components/AdListItem";
import useSWR from "swr";
import { fetcher } from "../../helpers/api";
import Link from "next/link";
import styled from "styled-components";

export default function AdListPage() {
  const { data: ads, error } = useSWR("/api/ads/", fetcher);

  if (error) return <h1>...sorry cannot load ads</h1>;

  if (!ads) return <h1>...please wait while loading...</h1>;

  const sortedAds = ads
    .slice()
    .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
  const heroCounter = ads.length;

  return (
    <MainFlexWrapper>
      <h1>I found {heroCounter} Heroes for you:</h1>
      {sortedAds.map((ad) => {
        return (
          <AdListItem
            key={ad.id}
            id={ad.id}
            adTitle={ad.adTitle}
            tags={ad.tags}
            adPictureSrc={ad.adPictureSrc}
            userName={ad.userName}
            adCosts={ad.adCosts}
            createdDate={ad.createdDate}
            userPictureSrc={ad.userPictureSrc}
          />
        );
      })}
      <StyledLink href="/FormPage">
        <span>➕</span>Click here to be a Hero!
      </StyledLink>
    </MainFlexWrapper>
  );
}

const MainFlexWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  background-color: white;
  border: 1px solid black;
  padding: 0.5rem;
  margin: 1rem;
  text-decoration: none;
  color: black;
  text-align: center;

  span {
    display: block;
  }
  :active {
    background-color: black;
    color: white;
  }
`;
