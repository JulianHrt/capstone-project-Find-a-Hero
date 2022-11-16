import AdListItems from "../../components/AdListItems";
import useSWR from "swr";
import { fetcher } from "../../helpers/api";

export default function AdListPage() {
  const { data: ads, error } = useSWR("/api/ads", fetcher);

  if (error) return <h1>There was an error</h1>;

  if (!ads) return <h1>...Loading...</h1>;

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
