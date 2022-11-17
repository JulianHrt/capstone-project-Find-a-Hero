import AdListItems from "../../components/AdListItems";
import useSWR from "swr";
import { fetcher } from "../../helpers/api";
import styled from "styled-components";

export default function AdListPage() {
  const { data: ads, error } = useSWR("/api/ads", fetcher);

  if (error) return <h1>Cannot load ads</h1>;

  if (!ads) return <h1>...please wait while loading...</h1>;

  ads.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
  const heroCounter = ads.length;

  return (
    <>
      <h1>I found {heroCounter} Heroes for you:</h1>
      {ads.map((ad) => {
        return (
          <AdListItems
            key={ad.id}
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
    </>
  );
}
