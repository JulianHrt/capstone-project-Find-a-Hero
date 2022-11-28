import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../../helpers/api";
import AddAd from "../../../../components/AddAd";

export default function EditAd() {
  const currentDate = new Date();
  const router = useRouter();
  const { category, id } = router.query;

  const { data: ad, error } = useSWR(`/api/listing/${id}`, fetcher);

  if (error) return <h1>...sorry cannot load adform data</h1>;

  if (!ad) return <h1>...please wait while loading...</h1>;

  async function updateAd(ad) {
    const newAd = {
      ...ad,
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
