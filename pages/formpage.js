import { useRouter } from "next/router";
import AddAd from "../components/AddAd";

export default function formpage({ isUser }) {
  const router = useRouter();
  const currentDate = new Date();

  const id = isUser.id;

  async function sendAd(ad) {
    const newAd = {
      ...ad,
      userId: id,
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
      {isUser.loggedIn ? (
        <>
          <h1>Be a Hero for the community</h1>
          <AddAd onSubmit={sendAd} onGoBack={() => router.back()} />
        </>
      ) : (
        <h1>Sorry, you have to log in before creating a new ad.</h1>
      )}
    </>
  );
}
