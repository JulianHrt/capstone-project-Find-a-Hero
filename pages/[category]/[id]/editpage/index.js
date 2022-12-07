import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../../helpers/api";
import AddAd from "../../../../components/AddAd";
import Image from "next/image";

export default function editpage() {
  const currentDate = new Date();
  const router = useRouter();
  const { category, id } = router.query;

  const { data: ad, error } = useSWR(`/api/listing/${id}`, fetcher);

  if (error) return <h1>...sorry cannot load adform data</h1>;

  if (!ad)
    return (
      <>
        <h1>...please wait while loading...</h1>
        <Image publicId="hero-150x150_guzfn0" />
      </>
    );

  async function updateAd(ad, publicId) {
    const newAd = {
      ...ad,
      adPictureSrc: publicId,
      tags: ad.tags.split(","),
      createdDate: currentDate,
    };

    await fetch(`/api/listing/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newAd),
    });

    router.push(`/${category}/${id}`);
  }

  return (
    <>
      <h1>Change your ad as you like!</h1>
      <AddAd
        onSubmit={updateAd}
        inputValue={ad}
        onGoBack={() => router.back()}
      />
    </>
  );
}
