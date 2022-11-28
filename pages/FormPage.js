import { useRouter } from "next/router";
import AddAd from "../components/AddAd";

export default function FormPage() {
  const router = useRouter();
  const currentDate = new Date();

  async function sendAd(ad) {
    const newAd = {
      ...ad,
      tags: ad.tags.split(","),
      createdDate: currentDate,
    };

    const response = await fetch("/api/listing/", {
      method: "POST",
      body: JSON.stringify(newAd),
    });

    router.back();
  }

  return (
    <>
      <h1>Be a Hero for the community</h1>
      <AddAd onSubmit={sendAd} onGoBack={() => router.back()} />
    </>
  );
}
