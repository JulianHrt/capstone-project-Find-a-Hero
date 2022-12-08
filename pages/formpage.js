import { useRouter } from "next/router";
import AddAd from "../components/AddAd";

export default function formpage({ isUser }) {
  const router = useRouter();
  const currentDate = new Date();

  const id = isUser.id;

  async function sendAd(ad, publicId) {
    const newAd = {
      ...ad,
      userId: id,
      adPictureSrc: publicId,
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
          <h2>Be a Hero for the community</h2>
          <AddAd onSubmit={sendAd} onGoBack={() => router.back()} />
        </>
      ) : (
        <h1>Sorry, you have to log in before creating a new ad.</h1>
      )}
    </>
  );
}
