import AdListItem from "../../components/AdListItem";
import useSWR from "swr";
import { fetcher } from "../../helpers/api";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Image } from "cloudinary-react";

export default function AdListPage({ setLastSearched }) {
  const Router = useRouter();
  const { category } = Router.query;

  useEffect(() => {
    setLastSearched((currentvalue) => category || currentvalue);
  }, [category]);

  const { data: ads, error } = useSWR("/api/listing/", fetcher);

  if (error) return <h1>...sorry cannot load ads</h1>;

  if (!ads)
    return (
      <>
        <h1>...please wait while loading...</h1>
        <Image publicId="hero-150x150_guzfn0" />
      </>
    );

  const AdsFilterByCategory = ads.filter((ad) => {
    return ad.category === category;
  });

  const choosenAds = category === "all" ? ads : AdsFilterByCategory;

  const sortedAds = choosenAds
    .slice()
    .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
  const heroCounter = sortedAds.length;

  return (
    <>
      <h1>I found {heroCounter} Heroes for you:</h1>
      {sortedAds.map((ad) => {
        return (
          <AdListItem
            key={ad.id}
            id={ad.id}
            adTitle={ad.adTitle}
            tags={ad.tags}
            adPictureSrc={ad.adPictureSrc}
            userName={ad.user.userName}
            adCosts={ad.adCosts}
            createdDate={ad.createdDate}
            userPictureSrc={ad.user.userPictureSrc}
            category={category}
          />
        );
      })}
    </>
  );
}
